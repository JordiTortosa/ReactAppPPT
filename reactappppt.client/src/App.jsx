
// App.jsx
import React, { useState } from 'react';
import Home from './components/HomeComponent.jsx';
import Game from './components/GameComponent.jsx';
import WinnerOne from './components/WinnerOneComponent.jsx';
import WinnerTwo from './components/WinnerTwoComponent.jsx';

function App() {
    const [screen, setScreen] = useState('home');

    const navigateTo = (screenName) => {
        setScreen(screenName);
    };

    return (
        <div className="App">
            {screen === 'home' && <Home navigateTo={navigateTo} />}
            {screen === 'game' && <Game navigateTo={navigateTo} />}
            {screen === 'winnerone' && <WinnerOne navigateTo={navigateTo} />}
            {screen === 'winnertwo' && <WinnerTwo navigateTo={navigateTo} />}
        </div>
    );
}

export default App;
