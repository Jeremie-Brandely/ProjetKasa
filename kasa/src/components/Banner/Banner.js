import React, { useEffect } from 'react';
import "../../style/Banner.css"
import { useState } from 'react';
import { useLocation } from 'react-router-dom';


const Banner = () => {

    const [aboutPage, setAboutPage] = useState(false);

    const location = useLocation();

    useEffect(() => {
        if(location.pathname === "/about"){
            setAboutPage(true)
        };
    }, [])

    return (
        <div className={aboutPage ? 'banner_about' : 'banner'}>
            {!aboutPage && <p>Chez vous, partout et ailleurs</p>}
            
        </div>
    );
};

export default Banner;