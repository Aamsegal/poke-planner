import React from 'react';
import MainBanner from './MainBanner/MainBanner';
import PokeContainer from './MainContainer/MainContainer'

import './App.css'

//Main Container for React App
function App() {
  return (
    <main className="App">
        <MainBanner />
        <PokeContainer />
    </main>
  )
}

export default App;