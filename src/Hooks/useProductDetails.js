import React, { useEffect, useState } from 'react';

const useProductDetails = (id) => {
    const [productDetails, setProductDetails] = useState({});
    useEffect(() => {
        const url = `https://little-leaf.free.beeceptor.com/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProductDetails(data))
    }, [])
    return [productDetails]
};

export default useProductDetails;