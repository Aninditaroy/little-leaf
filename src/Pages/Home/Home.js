import React from 'react';
import PlantCare from '../PlantCare/PlantCare';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import Facilities from './Facilities/Facilities';
import Story from './Story/Story';
import Tabs from './Tabs/Tabs';

const Home = () => {
    return (
        <div>
            <Banner />
            <Story />
            <PlantCare />
            <Tabs />
            <Contact />
            <Facilities />



        </div>
    );
};

export default Home;