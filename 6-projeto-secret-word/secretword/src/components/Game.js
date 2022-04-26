import "./Game.css";
import { useState, useRef } from "react";

const Game = ({
  verifyLetter, 
  pickedWord, 
  pickedCategory, 
  letters, 
  guessedLetters, 
  wrongLetters, 
  guesses, score
}) => {

  const [letter, setLetter] = useState("");
  const letterInputRef = useRef(null);

  const handleSubmit = (e) => {

    e.preventDefault();

    verifyLetter(letter);

    setLetter("");

    letterInputRef.current.focus();

  };

  return (
    <div className="game">
      <p className="points">
        <span>Pontuação: {score}</span>
      </p>
      <h1>Adivinhe a palavra</h1>
      <h3 className="tip">
        Dica sobre a palavra <span>{pickedCategory}</span>
      </h3>
      <p>você ainda tem {guesses} tentativas(s).</p>
      <div className="wordContainer">
        {letters.map((letter, i) => {
          if(guessedLetters.includes(letter)) {
            return (
              <span key={i} className="letter">{letter}</span>
            );
          } else {
            return (
              <span key={i} className="blankSquare"></span>
            );
          }
        })}
      </div>
      <div className="letterContainer">
        <p>Tente adivinhar uma letra da palavra</p>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="letter" 
            required 
            onChange={(e) => setLetter(e.target.value)}
            value={letter}
            ref={letterInputRef}
            maxLength={1}
          />
          <button>Jogar</button>
        </form>
      </div>
      <div className="wrongLettersContainer">
        <p>
          Letras já utilizadas:
          {wrongLetters.map((letter, i) => (
            <span key={i}> {letter} </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default Game;