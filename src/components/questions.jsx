import React, { useContext, useState, useEffect } from "react";
import { QuizContext } from "../context/quiz";
import Option from "./Option";

const Question = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    const currentQuestion = quizState.questions[quizState.currentQuestion];
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [confirmedSelection, setConfirmedSelection] = useState(false);

    useEffect(() => {
        setShowConfirmation(false);
        setConfirmedSelection(false);
    }, [quizState.currentQuestion]);

    const onSelectOption = (option) => {
        if (!confirmedSelection) {
            setSelectedOption(option);
            setShowConfirmation(true);
        }
    };

    const handleConfirm = () => {
        dispatch({
            type: "CHECK_ANSWER",
            payload: { answer: currentQuestion.answer, option: selectedOption },
        });
        setShowConfirmation(false);
        setConfirmedSelection(true); 
    };

    return (
        <div id="question">
            <p>
                Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}
            </p>
            <h2>{currentQuestion.question}</h2>
            <div id="options-container">
                {currentQuestion.options.map((option, index) => (
                    <Option
                        option={option}
                        key={`${option}-${index}`}
                        answer={currentQuestion.answer}
                        selectOption={() => onSelectOption(option)}
                        hide={quizState.optionToHide === option ? "hide" : false}
                    />
                ))}
            </div>
            {!quizState.answerSelected && !quizState.help && (
                <>
                    {currentQuestion.tip && (
                        <button onClick={() => dispatch({ type: "SHOW_TIP" })}>Dica</button>
                    )}
                </>
            )}
            {!quizState.answerSelected && quizState.help === "tip" && (
                <p>{currentQuestion.tip}</p>
            )}
            {quizState.answerSelected && (
                <button onClick={() => dispatch({ type: "CHANGE_QUESTION" })}>
                    Continuar
                </button>
            )}

            {showConfirmation && (
                <div>
                    <p>Tem certeza de que deseja selecionar esta opção?</p>
                    <button onClick={handleConfirm}>Confirmar</button>
                </div>
            )}
        </div>
    );
};

export default Question;
