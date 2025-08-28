
import { createProduct } from "../../../api";
import { useState } from 'react';
import ProductForm from '../form/ProductForm';

const AddProduct = ({ loadProducts }) => {
    const [form, setForm] = useState({ name: "", price: "" });

    const addProduct = () => {
        createProduct({
            store_id: 1,
            category_id: 1,
            sku: "SKU" + Math.floor(Math.random() * 1000),
            name: form.name,
            price: parseFloat(form.price),
            created_by: 1
        }).then(() => {
            setForm({ name: "", price: "" });
            loadProducts();
        });
    };


    return (
        <div>
            <ProductForm form={form} setForm={setForm} action={addProduct} />
        </div>
    )
}

export default AddProduct