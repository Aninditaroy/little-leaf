import React, { createRef, useState } from 'react';
import ReactStars from 'react-stars';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddReview = ({ productId }) => {
    const [rating, setRating] = useState(0);
    let ratingError;
    // console.log(rating)
    const handleRating = {
        size: 40,
        count: 5,
        value: rating,
        half: true,
        onChange: newValue => {
            setRating(newValue);
            console.log(`Rating is ${newValue}`)
        }
    }

    ratingError = 'Rating is required'

    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const onSubmit = (data, e) => {
        const reviews = {
            productId: productId,
            reviewPersonName: data.reviewPersonName,
            review: data.review,
            rating: rating
        }
        console.log(reviews)
        //send to my database
        fetch('http://localhost:5000/reviews', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(added => {
                if (added) {
                    toast.success("Thanks for review us!")
                    reset();
                }
                else {
                    toast.error("Failed to add a review!")
                }
            })
    }
    return (
        <div class=" container w-full mx-auto  px-5 md:px-0">
            <div className='bg-white p-10 flex flex-col  mx-auto  max-w-5xl col-span-1'>
                <h1 class="text-2xl md:text-3xl lg:text-4xl font-medium">Add a review</h1>

                <form onSubmit={handleSubmit(onSubmit)} class="mt-10">
                    <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
                    <div class="grid gap-6 sm:grid-cols-1">

                        <div class="relative z-0 col-span-4 mb-10">
                            <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-lg  duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 text-gray-500 peer-focus:dark:text-green-600 mb-2" required>Your Rating
                                <ReactStars  {...handleRating} /></label>
                        </div>

                        <div class="relative z-0">
                            <input type="text" name="name" class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-green-700 focus:outline-none focus:ring-0" placeholder=" " {...register("reviewPersonName", {
                                required: {
                                    value: true,
                                    message: "Your Name is required"
                                }
                            })} />
                            <label className="label">
                                {errors.reviewPersonName?.type === 'required' && <span className="label-text-alt text-red-500">{errors.reviewPersonName.message}</span>}
                            </label>
                            <span class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-green-700 peer-focus:dark:text-green-600 mb-1">Your name</span>
                        </div>
                        {/* {(rating) && <p className='label-text-alt text-red-500'>{ratingError}</p>} */}

                        <div class="relative z-0 col-span-4">
                            <textarea name="message" rows="5" class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-green-700 focus:outline-none focus:ring-0" placeholder=" "  {...register("review", {
                                required: {
                                    value: true,
                                    message: "Review is required"
                                }
                            })} ></textarea>
                            <label className="label">
                                {errors.review?.type === 'required' && <span className="label-text-alt text-red-500">{errors.review.message}</span>}
                            </label>
                            <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-green-700 peer-focus:dark:text-green-600 mb-2">Your Review</label>
                        </div>
                    </div>
                    <input type="submit" class="mt-5 rounded-md bg-[#97C05C] px-10 py-2 text-white" value='Send Review' />
                </form>
            </div>
        </div>
    );
};

export default AddReview;