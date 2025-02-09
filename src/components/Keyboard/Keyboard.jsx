import "./Keyboard.css";

import {clsx} from "clsx";

export default function Keyboard(props) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const alphabetArray = [...alphabet];

  const keyboardElement = alphabetArray.map((letter, index) => {
    const isGuessed = props.guessedLetters.includes(letter);
    const isCorrect = isGuessed && props.currentWord.includes(letter);
    const isWrong = isGuessed && !props.currentWord.includes(letter);

    const buttonStyling = clsx({
      correct: isCorrect,
      wrong: isWrong
    })

    return (
      <button
        key={index}
        onClick={() => props.handleKeyboardButtonPress(letter)}
        className={buttonStyling}
        disabled={props.isGameOver}
      >
        {letter.toUpperCase()}
      </button>
    );
  });

  return <section className="keyboard-section">{keyboardElement}</section>;
}
