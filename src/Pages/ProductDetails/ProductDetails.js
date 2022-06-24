import React from 'react';
import { useParams } from 'react-router-dom';
import useProductDetails from './../../Hooks/useProductDetails';

const ProductDetails = () => {
    const { productId } = useParams();
    const [productDetails] = useProductDetails(productId)
    console.log(productDetails)
    return (
        <div>
            <h2 className='text-4xl text-green-600'>Hi:{productId}</h2>
            <h2 className='text-4xl text-green-600'>{productDetails.plantName}</h2>
        </div>
    );
};

export default ProductDetails;