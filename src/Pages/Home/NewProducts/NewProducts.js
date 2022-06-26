import React from 'react';
import useProducts from './../../../Hooks/useProducts';
import Product from './../../Product/Product';

const NewProducts = () => {
    const [products] = useProducts();
    const newProducts = [...products].reverse();
    console.log('new product haaha', newProducts);
    return (
        <div>
            <div className='w-5/6 mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>

                    {
                        newProducts.slice(0, 10).map(product => <Product
                            product={product}
                            key={product._id}
                        ></Product>)
                    }


                </div>
            </div>
        </div>
    );
};

export default NewProducts;