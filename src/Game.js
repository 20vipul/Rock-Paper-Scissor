import React, { useState } from "react";
import { Row,Col, ButtonGroup, Button } from "react-bootstrap";
import { FaRegHandRock,FaRegHandPaper, FaRegHandScissors } from "react-icons/fa";

const Game = () => {
    const [playerVal, setPlayerVal] = useState(null);
    const [computerVal, setComputerVal] = useState(null);
    const [playerScore, setPlayerScore] = useState(0);
    const [compScore, setCompScore] = useState(0);

    const logic = (playerVal, computerVal) => {
        if(playerVal === computerVal){
            return 0;
        } else if ((playerVal === "ROCK" && computerVal === "SCISSORS") ||
            (playerVal === "SCISSORS" && computerVal === "PAPER") ||
            (playerVal === "PAPER" && computerVal === "ROCK")
        ) {
            return 1;
        } else {
            return -1;
        }
    }

    const decision = (playerChoice) => {
        const choices = ["ROCK", "PAPER", "SCISSORS"];
        const compChoice =  choices[Math.floor(Math.random() * choices.length)];
        const val = logic(playerChoice, compChoice);
        if(val === 1) {
            setPlayerVal(playerChoice);
            setComputerVal(compChoice);
            setPlayerScore(prevScore => prevScore + 1);
        } else if(val === -1) {
            setPlayerVal(playerChoice);
            setComputerVal(compChoice);
            setCompScore(prevScore => prevScore + 1);
        } else {
            setComputerVal(compChoice);
            setPlayerVal(playerChoice);
        }
    }

    return (

      <div>
        <Row className="justify-content-center m-2">
          <ButtonGroup size="lg">
            <Button onClick={() => decision("ROCK")}>
              <FaRegHandRock /> Rock</Button>
            <Button onClick={() => decision("PAPER")}>
              <FaRegHandPaper /> Paper</Button>
            <Button onClick={() => decision("SCISSORS")}>
              <FaRegHandScissors /> Scissors</Button>
          </ButtonGroup>
        </Row>
        <Row className="m-3 ">
          <Col md="6">
            <p className="text-center ">Your choice: {playerVal}</p>
          </Col>
          <Col md="6">
            <p className="text-center ">Computer's choice: {computerVal}</p>
          </Col>
        </Row>
        <Row className="m-3 ">
          <Col>
            <h3 className="text-center ">Your Score: {playerScore}</h3>
          </Col>
          <Col>
            <h3 className="text-center ">Computer Score: {compScore}</h3>
          </Col>
        </Row>
      </div>

    );
}

export default Game;
