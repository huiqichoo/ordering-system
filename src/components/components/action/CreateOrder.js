import { Dropdown } from 'primereact/dropdown'
import { useState, useEffect } from 'react';
import { getTables, getProducts } from '../../../api';
import { Button } from 'primereact/button';

const CreateOrder = ({ table, setTable, setItems }) => {
  const [outletOptions, setOutletOptions] = useState()
  const [products, setProducts] = useState()

  const loadTables = () => {
    getTables().then((res) => {
      setOutletOptions(res.data)
    });
  };

  const loadProducts = () => {
    getProducts().then((res) => {
      setProducts(res.data)
    });
  };


  useEffect(() => {
    loadTables();
    loadProducts();
  }, []);


  return (
    <div>
      <Dropdown
        options={outletOptions}
        optionLabel="name"
        optionValue="id"
        placeholder="Select a table"
        value={table}
        onChange={(e) => {
          setTable(e.value);
        }}
      />

      <div className='col-12 mt-2 flex gap-3' style={{ flexWrap: "wrap" }}>
        {products && products.map(product => (
          <div key={product.id}>
            <Button
              severity="warning"
              style={{
                minWidth: "220px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
              onClick={() => {
                setItems((prev) => {
                  const index = prev.findIndex((item) => item.id === product.id);

                  if (index !== -1) {
                    const updated = prev.map((item, i) =>
                      i === index ? { ...item, qty: item.qty + 1 } : item
                    );
                    return updated;
                  } else {
                    return [...prev, { ...product, qty: 1 }];
                  }
                });
              }}
            >
              <div>{product.name}</div>
              <div>RM{product.price}</div>
            </Button>

          </div>
        ))}
      </div>

    </div>
  )
}

export default CreateOrder