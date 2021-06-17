import React, { useContext } from 'react'
import { QuizContext } from '../helpers/Contexts'
import { Questions } from '../helpers/QuestionBank'
import {
    NavLink
} from 'react-bootstrap'

function EndScreen() {
    const { score, setscore, setgameState } = useContext(QuizContext)
    const restartGame = () => {
        setscore(0);
        setgameState("menu");
    }
    return (
        <div>
            <h2> Your Score is {score}/{Questions.length}</h2>
            <NavLink onClick={restartGame}> Restart Quiz </NavLink>
        </div>
    )
}

export default EndScreen
