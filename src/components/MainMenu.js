import React, { useContext } from 'react'
import { QuizContext } from '../helpers/Contexts'
import '../css/mainMenu.css'
import {
    Container,
    Button
} from 'react-bootstrap'

function MainMenu() {
    const { setgameState } = useContext(QuizContext)
    return (
        <Container className="menu">

            <Button size="lg" onClick={() => setgameState("quiz")}> Start Quiz </Button>

        </Container>
    )
}

export default MainMenu
