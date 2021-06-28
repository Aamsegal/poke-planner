import React from 'react';
import PokeBanner from './PokeBanner/PokeBanner';
import PokeContainer from './PokeContainer/PokeContainer'

//Main Container for React App
function App() {
  return (
    <main className="App">
        <PokeBanner />
        <PokeContainer />
    </main>
  )
}

export default App;