import React, { useState } from "react";
import styles from "./Game.module.css";

export default function Game() {

  const questions = [
    {
      question: "A story of three friends whose friendship is tested by love and career choices. Which movie am I?",
      answer: "3 Idiots",
      hints: [
        "Based on a book by Chetan Bhagat",
        "Famous dialogue: 'All is well'",
        "Aamir Khan is one of the lead actors",
      ],
    },
    {
      question: "A love story where the hero dies, but their love is eternal. Which movie am I?",
      answer: "Kal Ho Naa Ho",
      hints: [
        "Shahrukh Khan plays the role of a dying man",
        "The title song became an anthem for hope and living in the moment",
        "The film is set in New York",
      ],
    },
    {
      question: "A gangster becomes a politician and fights for the common people. Which movie am I?",
      answer: "Nayak",
      hints: [
        "The hero becomes the Chief Minister for a day",
        "Anil Kapoor is the protagonist",
        "A movie about corruption and political reform",
      ],
    },
    {
      question: "A story of a brave man who leads a war against injustice and the British Empire. Which movie am I?",
      answer: "Lagaan",
      hints: [
        "It’s about cricket and freedom struggle",
        "Aamir Khan leads a group of villagers",
        "Set during British rule in India",
      ],
    },
    {
      question: "A police officer is determined to bring down a powerful criminal in this action-packed drama. Which movie am I?",
      answer: "Singham",
      hints: [
        "Ajay Devgn plays a tough cop",
        "Famous dialogue: 'Aata majhi satakli'",
        "Directed by Rohit Shetty",
      ],
    }
  ];
  
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [Hint, setHint] = useState(0);
  const [score, setScore] = useState(0);


  return (
    <div className={styles.card}>
      <h2 className={styles.question}>Dumb Charades Game</h2>
      <p className={styles.question}>
        Question {currentQuestion + 1}: {questions[currentQuestion].question}
      </p>
      <p className={styles.hint}>
        Hint: {questions[currentQuestion].hints[Hint]}
      </p>
      <button className={styles.button} >
        Show Next Hint
      </button>

      <div>
        <input
          type="text"
          className={styles.inputField}
          placeholder="Enter answer"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
        />
        <button className={styles.button} >
          Submit Answer
        </button>
      </div>

      {/* <p className={styles.score}>Your Score: {score}</p> */}
    </div>
  );
}