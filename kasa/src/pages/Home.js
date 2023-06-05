import React from 'react';
import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';
import Gallery from '../components/Gallery/Gallery';
import Footer from '../components/Footer/Footer';


const Home = () => {
    return (
        <div className='home'>
            <Header />
            <Banner />
            <Gallery />
            <Footer />

        </div>
    );
};

export default Home;