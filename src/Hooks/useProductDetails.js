import React, { useEffect, useState } from 'react';

const useProductDetails = (id) => {
    const [productDetails, setProductDetails] = useState({});
    useEffect(() => {
        // const url = `http://localhost:5000/product/${id}`
        const url = `http://localhost:5000/product/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProductDetails(data))
    }, [])
    return [productDetails]
};

export default useProductDetails;