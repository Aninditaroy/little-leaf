import React from 'react';
import AddReview from './AddReview';
import AllReviews from './AllReviews';

const Reviews = ({ productId }) => {
    return (
        <div>
            <ul class="nav nav-tabs flex flex-row md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4 justify-center" id="tabs-tab"
                role="tablist">
                <li class="nav-item active" role="presentation">
                    <a href="#tabs-reviews" class="active nav-link block font-medium text-md leading-tight border-b-2 px-6 py-3 my-2   focus:border-transparent" id="tabs-reviews-tab" data-bs-toggle="pill" data-bs-target="#tabs-reviews" role="tab" aria-controls="tabs-reviews"
                        aria-selected="true">Give Reviews</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a href="#tabs-allreviews" class="nav-link block font-medium text-md  leading-tight  border-b-2  px-6 py-3 my-2  focus:border-transparent " id="tabs-allreviews-tab" data-bs-toggle="pill" data-bs-target="#tabs-allreviews" role="tab"
                        aria-controls="tabs-allreviews" aria-selected="false">All Reviews</a>
                </li>
            </ul>
            <div class="tab-content" id="tabs-tabContent">
                <div class="tab-pane show active" id="tabs-reviews" role="tabpanel" aria-labelledby="tabs-reviews-tab">
                    <AddReview productId={productId} />
                </div>
                <div class="tab-pane fade" id="tabs-allreviews" role="tabpanel" aria-labelledby="tabs-allreviews-tab">
                    <AllReviews productId={productId} />
                </div>
            </div>
        </div>
    );
};

export default Reviews;