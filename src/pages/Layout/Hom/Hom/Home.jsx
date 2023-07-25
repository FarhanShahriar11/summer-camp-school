import React from 'react';
import Banner from '../Banner/Banner';
import PopularClass from '../PopularClass/PopularClass';

import Featured from '../Featured/Featured';
import { Helmet } from 'react-helmet-async';
import PopularInstructor from '../PopularInstructor/PopularInstructor';
import Category from '../../../Category/Category';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>FitZone | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopularClass></PopularClass>
            <PopularInstructor></PopularInstructor>
            <Featured></Featured>
        </div>
    );
};

export default Home;