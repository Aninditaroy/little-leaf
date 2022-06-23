import React from 'react';
import PlantCare from '../PlantCare/PlantCare';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import Emni from './../Home/Emni';

import Facilities from './Facilities/Facilities';
import Story from './Story/Story';

const Home = () => {
    return (
        <div>
            <Banner />
            <Story />
            <PlantCare />
            <Emni />
            <Facilities />
            <Contact />

        </div>
    );
};

export default Home;