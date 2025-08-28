import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useState } from 'react';
import { Button } from 'primereact/button';

const Cart = ({ items, setItems }) => {
    const [loading, setLoading] = useState(false)

    return (
        <div className='card'>
            <DataTable value={items} paginator rows={10} loading={loading} emptyMessage="No items in cart">
                <Column header="#" headerStyle={{ width: '3rem' }} body={(data, options) => options.rowIndex + 1}></Column>
                <Column field="name" header="Name" />
                <Column field="qty" header="Quantity" />
                <Column body={(rowData) => <><Button icon="pi pi-trash" severity='danger' text onClick={() => {
                    setItems((prev) => {
                        return prev
                            .map((item) =>
                                item.id === rowData?.id ? { ...item, qty: item.qty - 1 } : item
                            )
                            .filter((item) => item.qty > 0);
                    });
                }} /></>} />
            </DataTable></div>
    )
}

export default Cart