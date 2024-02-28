// Home.jsx
import React from 'react';
import '../style/Style.css';

function WinnerTwo({ navigateTo }) {
    return (
        <div className='button'>
            <h1>El ganador es el Jugador 2</h1>
            <p>
            </p>
            <button onClick={() => navigateTo('home')}>Comenzar juego</button>
        </div>
    );
}

export default WinnerTwo;
