import { useState } from 'react'
import { updateProduct } from '../../../api';
import ProductForm from '../form/ProductForm';

const EditProduct = ({ loadProducts, selectedProduct, setVisibleEditDialog }) => {
    const [form, setForm] = useState(selectedProduct);

    const editProduct = (id) => {
        updateProduct(id, {
            name: form.name || "Updated Name",
            price: parseFloat(form.price) || 9.99
        }).then(() => { loadProducts(); setVisibleEditDialog(false) });
    };

    return (
        <div><ProductForm form={form} setForm={setForm} action={editProduct} isEdit/></div>
    )
}

export default EditProduct