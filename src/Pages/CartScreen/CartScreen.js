import React from 'react';
import useProducts from './../../Hooks/useProducts';


const CartScreen = () => {
    const [products] = useProducts();
    return (
        <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 text-center my-10">Shopping Cart</h1>
            {/* {
                products.map(product => <div
                    product={product}
                    key={product._id}
                    class="card card-side bg-base-100 shadow-xl">
                    <figure><img src={product.imageUrl} alt={product.imageAlt} /></figure>
                    <div class="card-body">
                        <h2 class="card-title">New movie is released!</h2>
                        <p>Click the button to watch on Jetflix app.</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Watch</button>
                        </div>
                    </div>
                </div>)
            } */}


        </div >
    );
};

export default CartScreen;