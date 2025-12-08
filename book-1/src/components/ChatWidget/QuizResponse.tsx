import React, { useState } from 'react';
import { parseQuizMarkdown } from '../../utils/parseQuiz';
import styles from './QuizResponse.module.css';

interface QuizResponseProps {
    content: string;
}

export default function QuizResponse({ content }: QuizResponseProps) {
    const questions = parseQuizMarkdown(content);
    const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
    const [showAnswers, setShowAnswers] = useState(false);

    const handleSelectAnswer = (questionIndex: number, answer: string) => {
        setUserAnswers({
            ...userAnswers,
            [questionIndex]: answer,
        });
    };

    const calculateScore = () => {
        let correct = 0;
        questions.forEach((q, idx) => {
            if (userAnswers[idx] === q.correctAnswer) {
                correct++;
            }
        });
        return correct;
    };

    const handleCheckAnswers = () => {
        setShowAnswers(true);
    };

    const handleRetake = () => {
        setUserAnswers({});
        setShowAnswers(false);
    };

    return (
        <div className={styles.quizContainer}>
            <div className={styles.quizHeader}>
                <h3>📝 Quiz</h3>
                {showAnswers && (
                    <div className={styles.score}>
                        Score: {calculateScore()} / {questions.length}
                    </div>
                )}
            </div>

            {questions.map((question, qIndex) => (
                <div key={qIndex} className={styles.questionCard}>
                    <div className={styles.questionText}>
                        <strong>Question {qIndex + 1}:</strong> {question.question}
                    </div>

                    <div className={styles.options}>
                        {question.options.map((option) => {
                            const isSelected = userAnswers[qIndex] === option.label;
                            const isCorrect = option.label === question.correctAnswer;
                            const showCorrectness = showAnswers;

                            let optionClassName = styles.option;
                            if (isSelected) optionClassName += ` ${styles.selected}`;
                            if (showCorrectness && isCorrect) optionClassName += ` ${styles.correct}`;
                            if (showCorrectness && isSelected && !isCorrect) optionClassName += ` ${styles.incorrect}`;

                            return (
                                <button
                                    key={option.label}
                                    onClick={() => !showAnswers && handleSelectAnswer(qIndex, option.label)}
                                    className={optionClassName}
                                    disabled={showAnswers}
                                >
                                    <span className={styles.optionLabel}>{option.label})</span>
                                    <span className={styles.optionText}>{option.text}</span>
                                    {showCorrectness && isCorrect && <span className={styles.checkmark}>✓</span>}
                                </button>
                            );
                        })}
                    </div>
                </div>
            ))}

            <div className={styles.actions}>
                {!showAnswers ? (
                    <button
                        onClick={handleCheckAnswers}
                        className={styles.checkBtn}
                        disabled={Object.keys(userAnswers).length !== questions.length}
                    >
                        Check Answers
                    </button>
                ) : (
                    <button onClick={handleRetake} className={styles.retakeBtn}>
                        Retake Quiz
                    </button>
                )}
            </div>
        </div>
    );
}
