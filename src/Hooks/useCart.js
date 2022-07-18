
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../firebase.init';
const useCart = () => {
    const [cartProducts, setCartProducts] = useState([]);
    const [user] = useAuthState(auth);
    const email = user?.email;
    useEffect(() => {
        fetch(`https://rocky-anchorage-54101.herokuapp.com/carts/${email}`)
            .then(res => res.json())
            .then(data => setCartProducts(data))
    }, [cartProducts])
    return ([cartProducts, setCartProducts]);
};

export default useCart;