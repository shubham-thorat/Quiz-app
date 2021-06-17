import React, { useState } from 'react'
import MainMenu from './components/MainMenu'
import Quiz from './components/Quiz'
import EndScreen from './components/EndScreen'
import {
  Container
} from 'react-bootstrap'

import { QuizContext } from './helpers/Contexts'
import RadioButton from './components/RadioButton'

function App() {
  const [gameState, setgameState] = useState('menu')
  const [score, setscore] = useState(0);

  return (
    <Container className="App text-center">
      <h1 className="heading"> Quiz Game</h1>

      <QuizContext.Provider value={{ gameState, setgameState, score, setscore }}>
        {gameState === 'menu' ? <MainMenu /> : null}
        {gameState === 'quiz' ? <Quiz /> : null}
        {gameState === 'endScreen' ? <EndScreen /> : null}
      </QuizContext.Provider>
      {/* <RadioButton /> */}
    </Container>
  );
}

export default App;
