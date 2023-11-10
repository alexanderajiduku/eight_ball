import React, { useState } from 'react';
import './EightBall.css'; // For styling

function EightBall(props) {
  const [color, setColor] = useState("black");
  const [message, setMessage] = useState("Think of a Question");

  // Function to choose a random answer
  const getRandomAnswer = () => {
    const randomIdx = Math.floor(Math.random() * props.answers.length);
    const randomAnswer = props.answers[randomIdx];
    setColor(randomAnswer.color);
    setMessage(randomAnswer.msg);
  };

  return (
    <div
      className="eight-ball"
      onClick={getRandomAnswer}
      style={{ backgroundColor: color }}
    >
      <p className="eight-ball-message">{message}</p>
    </div>
  );
}

export default EightBall;
