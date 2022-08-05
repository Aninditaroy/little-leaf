import React from 'react';

const FAQ = () => {
    return (

        <div className=' w-8/12 mx-auto my-16'>
            <p class=" text-2xl text-center font-bold pb-3 text-primary"> FAQ</p>
            <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item border border-gray-200 py-2">
                    <h2 class="accordion-header mb-0" id="flush-headingOne">
                        <button class="accordion-button relative flex items-center w-full py-4 px-8 text-base text-black text-left border-0 rounded-none transition focus:outline-none font-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                            aria-expanded="false" aria-controls="flush-collapseOne">
                            How will my plant arrive?
                        </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse border-0 collapse show"
                        aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body py-4 px-8">
                            Our number one priority is that our plants arrive in happy, healthy condition. You never know what adventures a plant can get into making its way to your home! Our plants ship in their nursery grow pot to allow for a safe and comfy ride all the way to your doorstep. Allowing plants to stay in their grow pot while being shipped helps reduce the risk of stress and shock that could happen if they were to be potted in a new planter before leaving the greenhouse.
                            <br />  <br />
                            If you paired your plant with one of our planters, the grow pot will be securely nestled inside. For large plants and planters, including faux plants, the planter will ship separately from the large plant due to its weight.
                            <br />  <br />
                            In our <span className='text-secondary'>stores</span>, we offer to freshly pot plants in-store for our customers. Plants potted in our shops have a shorter journey to your home so we love offering this service for local plant parents.</div>
                    </div>
                </div>
                <div class="accordion-item border border-gray-200 py-2">
                    <h2 class="accordion-header mb-0" id="flush-headingTwo">
                        <button class="accordion-button collapsed relative flex items-center w-full py-4 px-8 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none font-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo"
                            aria-expanded="false" aria-controls="flush-collapseTwo">
                            Do I have to repot my plant once it arrives?
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingTwo"
                        data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body py-4 px-8">
                            The short answer is, no. First, let your plant acclimate to its new environment. Place the plant in the spot you plan to keep it in. Let it settle in for about two weeks.
                            <br />  <br />
                            After two weeks, your plant has adjusted—your home’s light levels and temperature differ from a greenhouse!—and you can pot it into its ceramic planter, if you choose. You might notice your plant’s earthenware planter is wider than the plant’s nursery pot.
                        </div>
                    </div>
                </div>
                <div class="accordion-item border border-gray-200 py-2">
                    <h2 class="accordion-header mb-0" id="flush-headingThree">
                        <button class="accordion-button collapsed relative flex items-center w-full py-4 px-8 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none font-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree"
                            aria-expanded="false" aria-controls="flush-collapseThree">
                            My plant arrived damaged,what do I do?
                        </button>
                    </h2>
                    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree"
                        data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body py-4 px-8">
                            We guarantee your plants will arrive in happy, healthy condition. If not, we replace them for free as part of our 30-Day Customer Happiness Guarantee. It’s natural for live plants to show minor signs of stress after transit but if the damage is beyond minor blemishes*, reach out to us within 30 days of receipt to receive a free replacement.
                            <br />  <br />
                            The guarantee applies to all online and in-store purchases within the first 30 days. We require photos as proof of damage and to help us improve our packaging process. You can also bring an online order into any of our shops for a replacement. Inventory online and in-store differs, so we recommend calling your closest shop in advance to ensure availability.
                        </div>
                    </div>
                </div>
                <div class="accordion-item border border-gray-200 py-2">
                    <h2 class="accordion-header mb-0" id="flush-headingFour">
                        <button class="accordion-button collapsed relative flex items-center w-full py-4 px-8 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none font-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour"
                            aria-expanded="false" aria-controls="flush-collapseFour">
                            What plant is right for my space?
                        </button>
                    </h2>
                    <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour"
                        data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body py-4 px-8">
                            We suggest starting with daylight - how many hours of direct sun do you have in the room where you want to place your plant (rays of sun coming through a window or shining on your garden)? We’ve included lighting and general watering guidelines for all plants on the product page for each type of plant. Since these are just guidelines, we recommend you paying close attention to your plant for the first few weeks. If you listen closely, you may even hear it talking to you.
                            <br />  <br />
                            (Pro Tip: there is no houseplant that we’d recommend for a windowless bathroom or any windowless room. Not happening without a grow light!)sest shop in advance to ensure availability.
                        </div>
                    </div>
                </div>
                <div class="accordion-item border border-gray-200 py-2">
                    <h2 class="accordion-header mb-0" id="flush-headingFive">
                        <button class="accordion-button collapsed relative flex items-center w-full py-4 px-8 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none font-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive"
                            aria-expanded="false" aria-controls="flush-collapseFive">
                            Why does my plant look different from the website?
                        </button>
                    </h2>
                    <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive"
                        data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body py-4 px-8">
                            Live plants and small batch pottery will have variations in color, texture, finish, and size. While we make every effort to display our potted plants as accurately as possible, there may be subtle differences from what is displayed online.
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FAQ;