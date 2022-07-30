import React from 'react';
import Products from '../../Products/Products';
import BestSellingProducts from '../BestSellingProducts/BestSellingProducts';
import HomeProducts from '../HomeProducts/HomeProducts';
import NewProducts from '../NewProducts/NewProducts';
import './Tabs.css';
const Tabs = () => {
    return (
        <div>
            <ul class="nav nav-tabs flex flex-row md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4 justify-center" id="tabs-tab"
                role="tablist">
                <li class="nav-item active" role="presentation">
                    <a href="#tabs-products" class="active nav-link block font-medium text-md leading-tight uppercase border-b-2 px-6 py-3 my-2   focus:border-transparent" id="tabs-products-tab" data-bs-toggle="pill" data-bs-target="#tabs-products" role="tab" aria-controls="tabs-products"
                        aria-selected="true">Products</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a href="#tabs-bestselling" class="nav-link block font-medium text-md  leading-tight uppercase border-b-2  px-6 py-3 my-2  focus:border-transparent " id="tabs-bestselling-tab" data-bs-toggle="pill" data-bs-target="#tabs-bestselling" role="tab"
                        aria-controls="tabs-bestselling" aria-selected="false">best selling</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a href="#tabs-newproducts" class="nav-link block font-medium text-md leading-tight uppercase border-b-2 px-6 py-3 my-2   focus:border-transparent" id="tabs-newproducts-tab" data-bs-toggle="pill" data-bs-target="#tabs-newproducts" role="tab"
                        aria-controls="tabs-newproducts" aria-selected="false">new products</a>
                </li>
            </ul>
            <div class="tab-content" id="tabs-tabContent">
                <div class="tab-pane fade show active" id="tabs-products" role="tabpanel" aria-labelledby="tabs-products-tab">
                    <HomeProducts />
                </div>
                <div class="tab-pane fade" id="tabs-bestselling" role="tabpanel" aria-labelledby="tabs-bestselling-tab">
                    <BestSellingProducts />
                </div>
                <div class="tab-pane fade" id="tabs-newproducts" role="tabpanel" aria-labelledby="tabs-newproducts-tab">
                    <NewProducts />
                </div>
            </div>
        </div>
    );
};

export default Tabs;