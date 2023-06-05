import React from 'react';
import datas from '../../Data/Data';
import Card from '../Card/Card';
import "../../style/Gallery.css"

const Gallery = () => {
    return (
        <main className='home_gallery'>
            {datas.map(data => {
                return (
                    <Card 
                    key={data.id}
                    id={data.id}
                    title={data.title}
                    cover={data.cover}
                    />
                )
            })}
            
        </main>
    );
};

export default Gallery;