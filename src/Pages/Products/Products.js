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
    const [searchProduct, setSearchProduct] = useState([]);
    const [pro] = useProducts();
    useEffect(() => {
        // fetch('http://localhost:5000/product')
        fetch(`http://localhost:5000/product?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setSearchProduct(data);
            })
    }, [page, size])


    useEffect(() => {
        // fetch('http://localhost:5000/product')
        fetch('http://localhost:5000/productCount')
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count / 10);
                setPageCount(pages)
            })
    }, [])




    const handleSearch = (e) => {
        e.preventDefault()
        const searchText = e.target.value
        if (searchText) {
            const searchedText = searchText.toLowerCase()
            const filtered = pro.filter(searchedProduct => searchedProduct?.plantName?.toLowerCase().includes(searchedText))
            setSearchProduct(filtered)
        }
        else {
            setSearchProduct(products)
        }
    }
    return (
        <div>

            {/* search products */}
            <div class="flex justify-center mt-6">
                <div class="mb-3 xl:w-96">
                    <div class="input-group relative flex flex-wrap items-stretch w-full mb-4">
                        <input onChange={(e) => handleSearch(e)} type="search" class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-700 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
                        <button class="btn px-6 py-3 bg-secondary text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-primary hover:shadow-lg focus:bg-green-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className='w-5/6 mx-auto my-10'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>

                    {
                        searchProduct.map(product => <Product
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