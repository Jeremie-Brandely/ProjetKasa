import React from 'react';
import Header from '../components/Header/Header';
import "../style/Error.css"

const Error = () => {
    return (
        <div className='error'>
            <Header />
            <div className='infos-error'>
                <h1 className='info-error-title'> 404</h1>
                <p className='info-error-contenu'> Oups! La page que vous recherchez n'existe pas.</p>
            </div>
            <a className='return' href="/"> Retourner sur la page d'accueil</a>
        </div>
    );
};

export default Error;