// Home.jsx
import React from 'react';
import '../style/Style.css';

function Home({ navigateTo }) {
    return (
        <div className='button'>
            <h1>Bienvenido</h1>
            <button onClick={() => navigateTo('game')}>Comenzar juego</button>
        </div>
    );
}

export default Home;
 