import React from 'react';
import PlantCare from '../PlantCare/PlantCare';
import Banner from './Banner/Banner';
import Facilities from './Facilities/Facilities';
import Story from './Story/Story';

const Home = () => {
    return (
        <div>
            <Banner />
            <Story />
            <PlantCare />
            <Facilities />
        </div>
    );
};

export default Home;