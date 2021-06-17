import React, { useState } from 'react'
import '../css/radioButton.css'
import {
    Container,
    Card,
    Form,
    Row,
    Col
} from 'react-bootstrap'

function RadioButton() {

    const [value, setvalue] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(value)
    }
    return (
        <Container as={Row}>
            <Col className="col-md-10 col-12 m-4">
                <Card>
                    <form onSubmit={handleSubmit}>

                        <h2 className="heading"> What is your name</h2>
                        <div className="btn-group btn-group-toggle d-flex flex-column justify-content-center align-items-center" data-toggle="buttons">
                            <label className="d-inline-block btn btn-secondary mb-2" style={{ width: "80%" }}>
                                <input className="inputField" type="radio" name="options" id="optionA" autoComplete="off" onChange={() => setvalue("A")} />
                                Java
                            </label>

                            <label className="d-inline-block btn btn-secondary mb-2" style={{ width: "80%" }}>
                                <input className="inputField" type="radio" name="options" id="optionB" autoComplete="off" value="B" onChange={() => setvalue("B")} />
                                JavaScript
                            </label>

                            <label className="d-inline-block btn btn-secondary mb-2" style={{ width: "80%" }}>
                                <input className="inputField" type="radio" name="options" id="optionC" autoComplete="off" value="C" onChange={() => setvalue("C")} />
                                python
                            </label>

                            <label className="d-inline-block btn btn-secondary mb-2" style={{ width: "80%" }}>
                                <input className="inputField" type="radio" name="options" id="optionD" autoComplete="off" value="D" onChange={() => setvalue("D")} />
                                None of above
                            </label>
                        </div>
                        <button type="submit" > Submit </button>
                    </form>
                </Card>
            </Col>
        </Container>
    )
}

export default RadioButton
