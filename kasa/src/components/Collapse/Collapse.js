import React from 'react';
import arrow from '../../images/arrow.png';
import { useState } from 'react';
import "../../style/Collapse.css"



const Collapse = ({title, content}) => {
    const [toggle, setToggle] = useState(false);



    return (
        
        <div className="collapse">
            <h3 className='collapse_title' onClick={() => setToggle(!toggle)} >
                    {title}
                    <img 
                        className={toggle ? 'arrow arrow-up' : 'arrow arrow-down'} 
                        src={arrow} 
                        alt="show content" 
                    />
                </h3>
                <div className={toggle ? 'collapse-content' : 'collapse-content-hidden'}>
                     {Array.isArray(content) ? <ul>{content.map((item, index) => {
                        return ( <li key={index}>{item}</li>) })} </ul> : content }
                </div> 
        </div>
        
    );
};

export default Collapse;