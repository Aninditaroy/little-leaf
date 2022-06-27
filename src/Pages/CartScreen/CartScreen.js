import React from 'react';
import useCart from './../../Hooks/useCart';

const CartScreen = () => {
    const [cartProducts] = useCart();

    return (
        <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 text-center my-10">Shopping Cart</h1>
            {
                cartProducts.map(cart => <div
                    cart={cart}
                    key={cart._id}
                    class="card card-side bg-base-100 shadow-xl">
                    <figure><img src={cart.img} alt={cart.imgAlt} /></figure>
                    <div class="card-body">
                        <h2 class="card-title">{cart.name}</h2>
                        <p>{cart.description}</p>
                        {/* <p>{cart.quantity}</p> */}
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Proceed to checkout</button>
                        </div>
                    </div>
                </div>)
            }
        </div >
    );
};

export default CartScreen;