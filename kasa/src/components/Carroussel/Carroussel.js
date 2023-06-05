import React from 'react';
import "../../style/Carroussel.css"
import ArrowRight from "../../images/chevron_carousel_right.png"
import ArrowLeft from "../../images/chevron_carousel_left.png"
import { useState } from 'react';

const Carroussel = ({imageSlider}) => {

    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {
        setCurrentIndex(currentIndex + 1)
        if(currentIndex === imageSlider.length - 1)
            setCurrentIndex(0)
    }

    const prevSlide = () => {
        setCurrentIndex(currentIndex - 1)
        if(currentIndex === 0)
            setCurrentIndex(imageSlider.length - 1)
    }


    return (
        <div style={{backgroundImage : `url(${imageSlider[currentIndex]})`}} className='carroussel'>
            
        {imageSlider.length > 1 &&
        <>
        <img
        className="carroussel-arrow carroussel-arrow-right"
        src={ArrowRight}
        alt="prochaine image"
        onClick={nextSlide} />
        
        <img
        className="carroussel-arrow carroussel-arrow-left"
        src={ArrowLeft}
        alt="image précédente"
        onClick={prevSlide} />

        <p className='slideCount'>{currentIndex + 1} / {imageSlider.length}</p>

        </>
        }

        </div>
    );
};

export default Carroussel;