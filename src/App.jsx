import React, { useContext,useEffect } from 'react';
import { QuizContext } from './context/quiz';

import Wellcome from './components/wellcome';
import PickCategory from './components/pickCategory';
import Question from './components/questions'
import GameOver from './components/GameOver';
import './App.css';


function App() {
    const [quizState, dispatch] = useContext(QuizContext);


    return (
        <div className="app">
            <h1>Quiz de Programação</h1>
            {quizState.gameStage === "Start" && <Wellcome />}
            {quizState.gameStage === "Category" &&  <PickCategory/>}
            {quizState.gameStage === "Playing" && <Question />}
            {quizState.gameStage === "End" && <GameOver/>}
        </div>
    );
}

export default App;
