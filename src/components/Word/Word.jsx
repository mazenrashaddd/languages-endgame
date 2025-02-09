import "./Word.css";

import { clsx } from 'clsx';

export default function Word(props) {
  const wordElements = props.currentWord.map((letter, index) => {
    const isLetterShown =
      props.guessedLetters.includes(letter) || props.isGameOver;
      const wordStyling = clsx("word-letter", {
        missing: props.isGameOver && !props.guessedLetters.includes(letter)
      })
    return (
      <span key={index} className={wordStyling}>
        {isLetterShown && letter.toUpperCase()}
      </span>
    );
  });
  return <section className="word-section">{wordElements}</section>;
}
