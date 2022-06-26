import React from 'react';
import useProducts from './../../../Hooks/useProducts';
import Product from './../../Product/Product';

const BestSellingProducts = () => {
    const [products] = useProducts()
    return (
        <div>
            <div className='w-5/6 mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>

                    {
                        products.slice(9, 18).map(product => <Product
                            product={product}
                            key={product._id}
                        ></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default BestSellingProducts;