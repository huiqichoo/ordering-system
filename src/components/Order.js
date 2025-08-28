import { useState, useEffect } from 'react'
import OrderList from './components/OrderList';
import { getOrders, createOrder, createOrderDetail } from '../api';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import CreateOrder from './components/action/CreateOrder';
import Cart from './components/table/Cart';

const Orders = () => {
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);
  const [visibleCreateOrderDialog, setVisibleCreateOrderDialog] = useState(false)
  const [table, setTable] = useState()
  const [items, setItems] = useState(() => {
    return JSON.parse(localStorage.getItem("_order")) || [];
  });

  const loadOrders = () => {
    setLoading(true);
    getOrders()
      .then((res) => {
        setOrders(res.data || [])
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadOrders();
  }, []);

  useEffect(() => {
    localStorage.setItem("_order", JSON.stringify(items));
  }, [items]);

  const handleCreateOrder = async () => {
    if (!items || items.length === 0) {
      alert('No items in cart');
      return;
    }

    if (table === null || table === undefined) {
      alert('Please select a table');
      return;
    }

    try {
      const orderPayload = {
        store_id: 1,
        outlet_id: 1,
        table_id: table || null,
        name: 'Order' + Math.floor(Math.random() * 1000),
        charge_id: 1,
        status: 0,
        created_by: 1,
      };

      const res = await createOrder(orderPayload);
      const orderId = res.data && (res.data.id || res.data.order_id || res.data.data?.id);

      const resolvedOrderId = orderId || (res.data && typeof res.data === 'number' ? res.data : null);

      if (!resolvedOrderId) {
        console.warn('Could not determine created order id from response, response:', res.data);
      }

      const detailsPromises = items.map(item => {
        const detailPayload = {
          orders_id: resolvedOrderId,
          category_id: 1,
          product_id: item.id,
          sku: 'SKU-' + resolvedOrderId,
          name: "Order Details",
          qty: item.qty,
          price: item.price,
          created_by: 1,
        };
        return createOrderDetail(detailPayload);
      });

      await Promise.all(detailsPromises);

      setVisibleCreateOrderDialog(false);
      setItems([]);
      setTable(null);
      loadOrders();

    } catch (err) {
      console.error('Create order failed', err);
      alert('Failed to create order. Check console for details.');
    }
  }


  return (
    <div className='col-12'>
      <Dialog header="Create Order" visible={visibleCreateOrderDialog} style={{ width: '90vw' }}
        onHide={() => {
          if (!visibleCreateOrderDialog)
            return; setVisibleCreateOrderDialog(false);
        }}
      >
        <div className='grid'>
          <div className='col-8'>
            <CreateOrder setItems={setItems} table={table} setTable={setTable} />
          </div>

          <div className='col-4'>
            <Cart items={items} setItems={setItems} />
          </div>

          <div className='col-12 text-right'>
            <hr />
            <Button label='Create Order' icon="pi pi-check" onClick={handleCreateOrder} />
          </div>
        </div>
      </Dialog>


      <div className='mb-3'>
        <Button label='Create Order' icon="pi pi-plus" onClick={() => setVisibleCreateOrderDialog(true)} />
      </div>

      <div className='card'>
        <OrderList orders={orders} loadOrders={loadOrders} />
      </div>
    </div>
  )
}

export default Orders