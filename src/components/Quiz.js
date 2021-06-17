import React, { useContext, useState } from 'react'
import { QuizContext } from '../helpers/Contexts'
import '../css/mainMenu.css'
import '../css/Quiz.css'
import {
    NavLink,
    Button,
    Container,
    Row,
    Col,
    Card
} from 'react-bootstrap'
import { Questions } from '../helpers/QuestionBank'

function Quiz() {
    const { setgameState } = useContext(QuizContext)
    const { score, setscore } = useContext(QuizContext)
    const [currQuestion, setcurrQuestion] = useState(0);

    const [value, setvalue] = useState("")

    const nextQuestion = () => {
        if (Questions[currQuestion].answer === value) {
            setscore(score + 1);
        }
        setcurrQuestion(currQuestion + 1);
    }
    const finishQuiz = () => {
        if (Questions[currQuestion].answer === value) {
            setscore(score + 1);
        }
        setgameState('endScreen');
    }
    return (
        <Container as={Row} className="d-flex justify-content-center align-items-center flex-column">
            <Col className="col-md-10 col-12 m-4">
                <Card style={{ height: "80vh", padding: "50px" }}>
                    <h2 className="heading"> {Questions[currQuestion].prompt} </h2>
                    <div className="btn-group btn-group-toggle d-flex flex-column justify-content-center align-items-center" data-toggle="buttons">
                        <label className="d-inline-block btn btn-secondary mb-2" style={{ width: "80%" }}>
                            <input className="inputField" type="radio" name="options" id="optionA" autoComplete="off" onChange={() => setvalue("A")} />
                            {Questions[currQuestion].optionA}
                        </label>

                        <label className="d-inline-block btn btn-secondary mb-2" style={{ width: "80%" }}>
                            <input className="inputField" type="radio" name="options" id="optionB" autoComplete="off" value="B" onChange={() => setvalue("B")} />
                            {Questions[currQuestion].optionB}
                        </label>

                        <label className="d-inline-block btn btn-secondary mb-2" style={{ width: "80%" }}>
                            <input className="inputField" type="radio" name="options" id="optionC" autoComplete="off" value="C" onChange={() => setvalue("C")} />
                            {Questions[currQuestion].optionC}
                        </label>

                        <label className="d-inline-block btn btn-secondary mb-2" style={{ width: "80%" }}>
                            <input className="inputField" type="radio" name="options" id="optionD" autoComplete="off" value="D" onChange={() => setvalue("D")} />
                            {Questions[currQuestion].optionD}
                        </label>
                        {
                            currQuestion === Questions.length - 1 ?
                                <Button onClick={finishQuiz} style={{ width: "30%" }}> Finish Quiz </Button> :
                                <Button onClick={nextQuestion} style={{ width: "30%" }}> Next Question</Button>
                        }
                    </div>
                </Card>
            </Col>
        </Container>
    )
}

// function Quiz() {
//     const { setgameState } = useContext(QuizContext)
//     const { score, setscore } = useContext(QuizContext)
//     const [currQuestion, setcurrQuestion] = useState(0);

//     const [value, setvalue] = useState("")

//     const nextQuestion = () => {
//         if (Questions[currQuestion].answer === value) {
//             setscore(score + 1);
//         }
//         setcurrQuestion(currQuestion + 1);
//     }
//     const finishQuiz = () => {
//         if (Questions[currQuestion].answer === value) {
//             setscore(score + 1);
//         }
//         setgameState('endScreen');
//     }
//     return (
//         <Container className="menu">

//             <h1> {Questions[currQuestion].prompt}</h1>
//             <div className="options d-flex flex-column justify-content-center align-items-center">
//                 <Button style={{ width: "30vw", marginBottom: "10px" }} variant="outline-dark" onClick={() => setvalue("A")}> {Questions[currQuestion].optionA} </Button>
//                 <Button style={{ width: "30vw", marginBottom: "10px" }} variant="outline-dark" onClick={() => setvalue("B")}> {Questions[currQuestion].optionB} </Button>
//                 <Button style={{ width: "30vw", marginBottom: "10px" }} variant="outline-dark" onClick={() => setvalue("C")}> {Questions[currQuestion].optionC} </Button>
//                 <Button style={{ width: "30vw", marginBottom: "10px" }} variant="outline-dark" onClick={() => setvalue("D")}> {Questions[currQuestion].optionD} </Button>
//             </div>

//             {
//                 currQuestion === Questions.length - 1 ?
//                     <Button onClick={finishQuiz}> Finish Quiz </Button> :
//                     <Button onClick={nextQuestion}> Next Question</Button>

//             }
//             <NavLink onClick={() => setgameState("menu")}> Back To Menu </NavLink>
//         </Container>
//     )
// }

export default Quiz
