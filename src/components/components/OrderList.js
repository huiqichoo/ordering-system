import { useState } from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import moment from 'moment';
import { Tag } from 'primereact/tag';
import ViewOrderDetail from './view/ViewOrderDetail';

const OrderList = ({ orders, loadOrders }) => {
  const [loading, setLoading] = useState(false);
  const [visibleOrderDialog, setVisibleOrderDialog] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  return (
    <div className='col-12'>
      <Dialog
        header={selectedOrder ? `${selectedOrder?.name}` : 'Order'}
        visible={visibleOrderDialog}
        style={{ width: '70vw' }}
        onHide={() => setVisibleOrderDialog(false)}
      >
        {selectedOrder && <ViewOrderDetail selectedOrder={selectedOrder} setVisibleOrderDialog={setVisibleOrderDialog} />}
      </Dialog>

      <h2>Orders</h2>

      <DataTable value={orders} paginator rows={10} loading={loading} tableStyle={{ minWidth: '40rem' }}>
        <Column header="#" headerStyle={{ width: '3rem' }} body={(data, options) => options.rowIndex + 1}></Column>
        <Column field="name" header="Name" />
        <Column field="status" header="Status" body={(rowData) => (
          <Tag value={rowData.status === 1 ? "Paid" : "Open"} severity={rowData.status === 1 ? "success" : "info"}></Tag>
        )} />
        <Column field="created_at" header="Created" bodyStyle={(rowData) => <>{moment(rowData.craeted_at).format('lll')}</>} />
        {/* <Column body={(rowData) => (
          <Button label="View" icon="pi pi-eye" onClick={() => { setSelectedOrder(rowData); setVisibleOrderDialog(true); }} />
        )} header="Actions" style={{ width: '10%' }} /> */}
      </DataTable>


    </div>
  )
}

export default OrderList;