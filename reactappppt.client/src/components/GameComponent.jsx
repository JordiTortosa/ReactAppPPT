import React, { useState, useEffect } from 'react';
import '../style/Style.css';

import piedraImg from '../assets/piedra.png';
import papelImg from '../assets/papel.png';
import tijeraImg from '../assets/tijera.png';
import versusImg from '../assets/versus.png';

function Game({ navigateTo }) {

    const [playerOneMove, setPlayerOneMove] = useState('');
    const [playerTwoMove, setPlayerTwoMove] = useState('');
    const [result, setResult] = useState(['', 0, 0]);

    if (result[1] === 3) {
        navigateTo('winnerone');
    }

    if (result[2] === 3) {
        navigateTo('winnertwo');
    }

    const movimiento = (move, player) => {
        if (player === 1) {
            if (playerOneMove !== '') {
                document.getElementById('playerOneImg_' + playerOneMove).style.transform = 'scale(1)';
            }
            setPlayerOneMove(move);
            document.getElementById('playerOneImg_' + move).style.transform = 'scale(1.5)';
        } else {
            if (playerTwoMove !== '') {
                document.getElementById('playerTwoImg_' + playerTwoMove).style.transform = 'scale(1)';
            }
            setPlayerTwoMove(move);
            document.getElementById('playerTwoImg_' + move).style.transform = 'scale(1.5)';
        }
    };

    const versus = () => {
        if (playerOneMove !== '' && playerTwoMove !== '') {
  
            fetch('api/game/move', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ movePlayerOne: playerOneMove, movePlayerTwo: playerTwoMove, playerOneWins: result[1], playerTwoWins: result[2]}),
            })
                .then(response => response.json())
                .then(data => setResult(data))
                .catch(error => console.error('Error:', error));
        }
        
        document.getElementById('playerOneImg_' + playerOneMove).style.transform = 'scale(1)';
        document.getElementById('playerTwoImg_' + playerTwoMove).style.transform = 'scale(1)';
    };

    return (
        <div className="App">
            <h1>Piedra, Papel o Tijera</h1>
            <h2>Consigue 3 victorias para ganar</h2>
            <div className="columns">
                <div className="column">
                    <h2>Victorias Jugador 1: {result[1]}</h2>
                    <div className="options">
                        <button onClick={() => movimiento('piedra', 1)}><img id="playerOneImg_piedra" src={piedraImg} alt="Piedra" /></button>
                        <button onClick={() => movimiento('papel', 1)}><img id="playerOneImg_papel" src={papelImg} alt="Papel" /></button>
                        <button onClick={() => movimiento('tijera', 1)}><img id="playerOneImg_tijera" src={tijeraImg} alt="Tijera" /></button>
                    </div>
                </div>
                <div className="versus-image">
                    <img src={versusImg} alt="Versus" />
                </div>
                <div className="column">
                    <h2>Victorias Jugador 2: {result[2]}</h2>
                    <div className="options">
                        <button onClick={() => movimiento('piedra', 2)}><img id="playerTwoImg_piedra" src={piedraImg} alt="Piedra" /></button>
                        <button onClick={() => movimiento('papel', 2)}><img id="playerTwoImg_papel" src={papelImg} alt="Papel" /></button>
                        <button onClick={() => movimiento('tijera', 2)}><img id="playerTwoImg_tijera" src={tijeraImg} alt="Tijera" /></button>
                    </div>
                </div>
            </div>
            {result && <div className="result">{result[0]}</div>}
            <p></p>
            <div className="button">
                <button onClick={versus}>JUGAR</button>
                <p></p>
                <button onClick={() => window.location.href = '/'}>Salir</button>
            </div>
        </div>
    );
}

export default Game;
