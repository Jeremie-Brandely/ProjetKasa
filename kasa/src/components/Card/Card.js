import React from 'react';
import "../../style/Card.css";
import { Link } from 'react-router-dom'


const Card = ({id, title, cover}) => {
    return (
        <Link to={`/Appart/${id}`} className="gallery_card"  >
            
			<div className='degrade'>
                <h3>{title}</h3>
            </div>
			
            <img src={cover} alt={title} />	
		</Link>
    );
};

export default Card;