import { useContext } from "react"
import { QuizContext } from "../context/quiz"

import wellDone from "../img/welldone.png"
import "./GameOver.css"

const GameOver = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    return (
        <div id="gameover">
            <h2>fim de jogo!</h2>
            <p>pontuação: {quizState.score}</p>
            <p>você acertou {quizState.score} de {quizState.questions.length}{""} perguntas.</p>
            <img src={wellDone} alt="fim do quiz"/>
            <button onClick={() => dispatch({type: "NEW_GAME"})}>Reiniciar</button>
        </div>
    )
}

export default GameOver