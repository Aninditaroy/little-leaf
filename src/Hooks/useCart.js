
import { useEffect, useState } from 'react';
const useCart = () => {
    const [cartProducts, setCartProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/carts')
            .then(res => res.json())
            .then(data => setCartProducts(data))
    }, [])
    return ([cartProducts]);
};

export default useCart;