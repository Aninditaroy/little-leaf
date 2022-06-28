
import { useEffect, useState } from 'react';
const useCart = () => {
    const [cartProducts, setCartProducts] = useState([]);
    useEffect(() => {
        fetch('https://rocky-anchorage-54101.herokuapp.com/carts')
            .then(res => res.json())
            .then(data => setCartProducts(data))
    }, [cartProducts])
    return ([cartProducts, setCartProducts]);
};

export default useCart;