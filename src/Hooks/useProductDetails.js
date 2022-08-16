import React, { useEffect, useState } from 'react';

const useProductDetails = (id) => {
    const [productDetails, setProductDetails] = useState({});
    useEffect(() => {
        // const url = `https://rocky-anchorage-54101.herokuapp.com/product/${id}`
        const url = `https://rocky-anchorage-54101.herokuapp.com/product/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProductDetails(data))
    }, [])
    return [productDetails]
};

export default useProductDetails;