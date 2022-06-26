import React from 'react';
import useProducts from './../../../Hooks/useProducts';
import Product from './../../Product/Product';
import { useNavigate } from 'react-router-dom';

const HomeProducts = () => {
    const [products] = useProducts();
    const navigate = useNavigate();
    // const viewMoreProducts = () => {
    //     navigate('')
    // }
    return (
        <div>
            <div>
                <div className='w-5/6 mx-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>

                        {
                            products.slice(0, 8).map(product => <Product
                                product={product}
                                key={product._id}
                            ></Product>)
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HomeProducts;