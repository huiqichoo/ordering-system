import { useState, useEffect } from 'react'
import ProductList from './components/ProductList'
import AddProduct from './components/action/AddProduct';
import { getProducts } from "../api";
import Navbar from './Navbar'

const Products = () => {
    const [products, setProducts] = useState([]);

    const loadProducts = () => {
        getProducts().then((res) => setProducts(res.data));
    };

    useEffect(() => {
        loadProducts();
    }, []);

    return (
        <div className='col-12'>
            <div className='mb-3'>
                <AddProduct loadProducts={loadProducts} />
            </div>

            <div className='card'>
                <ProductList products={products} loadProducts={loadProducts} />
            </div>
        </div>
    )
}

export default Products