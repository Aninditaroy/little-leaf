import React from 'react';
import PlantCare from '../PlantCare/PlantCare';
import Banner from './Banner/Banner';
import Story from './Story/Story';

const Home = () => {
    return (
        <div>
            <Banner />
            <Story />
            <PlantCare />
        </div>
    );
};

export default Home;