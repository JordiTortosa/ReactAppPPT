// Home.jsx
import React from 'react';
import '../style/Style.css';

function WinnerOne({ navigateTo }) {
    return (
        <div className='button'>
            <h1>El ganador es el Jugador 1</h1>
            <p>
            </p>
            <button onClick={() => navigateTo('home')}>Comenzar juego</button>
        </div>
    );
}

export default WinnerOne;