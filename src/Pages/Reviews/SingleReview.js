import React from 'react';

const SingleReview = ({ singleReview }) => {
    const { reviewPersonName, review, rating } = singleReview;
    return (
        <div class="carousel-inner relative w-full overflow-hidden">

            {/* {
            allReviewsShow?.map(singleReview => <SingleReview singleReview={singleReview} key={singleReview._id}></SingleReview>)

        } */}
            <div class="carousel-item active relative float-left w-full text-center">
                <p class="text-xl italic mx-auto text-gray-700 max-w-4xl">
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet
                    numquam iure provident voluptate esse quasi, voluptas nostrum quisquam!"
                </p>
                <div class="mt-12 mb-6 flex justify-center">
                    <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                        class="rounded-full w-24 h-24 shadow-lg"
                        alt="smaple image"
                    />
                </div>
                <p class="text-gray-500">- Anna Morian</p>
            </div>



        </div>
    );
};

export default SingleReview;