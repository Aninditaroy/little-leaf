import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Product/Product';
import './Products.css';
import useProducts from './../../Hooks/useProducts';
const Products = () => {
    // const [products] = useProducts();
    const [products, setProducts] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0)
    const size = 10;

    useEffect(() => {
        // fetch('https://rocky-anchorage-54101.herokuapp.com/product')
        fetch(`http://localhost:5000/product?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [page, size])


    useEffect(() => {
        // fetch('https://rocky-anchorage-54101.herokuapp.com/product')
        fetch('http://localhost:5000/productCount')
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count / 10);
                setPageCount(pages)
            })
    }, [])
    return (
        <div>
            <div className='w-5/6 mx-auto my-10'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>

                    {
                        products.map(product => <Product
                            product={product}
                            key={product._id}
                        ></Product>)
                    }


                </div>

                <div class="btn-group mx-auto justify-center">
                    {/* <button class="btn">1</button>
                    <button class="btn btn-active">2</button>
                    <button class="btn">3</button>
                    <button class="btn">4</button> */}
                    {
                        [...Array(pageCount).keys()].map(number => <button onClick={() => setPage(number)} className={page === number ? "btn btn-active" : 'btn '}
                        >{number + 1}</button>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Products;