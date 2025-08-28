import { updateProduct } from "../../api";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from "primereact/button";
import { useState } from "react";
import { Dialog } from 'primereact/dialog';
import EditProduct from "./action/EditProduct";

const ProductList = ({ products, loadProducts }) => {
  const [visibleEditDialog, setVisibleEditDialog] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState()

  return (
    <div style={{ padding: "20px" }}>
      <Dialog header={`Update Product - ${selectedProduct && selectedProduct?.sku}`} visible={visibleEditDialog} style={{ width: '50vw' }}
        onHide={() => {
          if (!visibleEditDialog)
            return; setVisibleEditDialog(false);
        }}
      >
        <EditProduct loadProducts={loadProducts} selectedProduct={selectedProduct} setVisibleEditDialog={setVisibleEditDialog} />
      </Dialog>

      <h2>Products</h2>

      <DataTable value={products} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>

        <Column field="sku" header=" SKU"></Column>
        <Column field="name" header="Name"></Column>
        <Column field="price" header="Price (RM)"></Column>
        <Column style={{ width: "8%" }} body={(rowData) => {
          return <><Button icon="pi pi-pencil" label="Update" onClick={() => {
            setSelectedProduct(rowData)
            setVisibleEditDialog(true);
          }} /></>
        }}></Column>
      </DataTable>

    </div>
  );
};

export default ProductList;
