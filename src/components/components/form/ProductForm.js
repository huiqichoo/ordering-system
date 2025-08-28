import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button';

const ProductForm = ({ form, setForm, action, isEdit = false }) => {
    return (
        <div className='flex gap-2'>
            <InputText value={form.name}
                placeholder="Product name"
                onChange={(e) => setForm({ ...form, name: e.target.value })} />

            <InputNumber value={form.price}
                placeholder="Price"
                onValueChange={(e) => setForm({ ...form, price: e.target.value })} minFractionDigits={2}/>

            <Button icon={isEdit ? "pi pi-send" : "pi pi-plus"} label={isEdit ? "Submit" : "Add"} onClick={() => action(form.id)} />
        </div>
    )
}

export default ProductForm