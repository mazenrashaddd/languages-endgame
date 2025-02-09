import "./App.css";
import { useState } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import { randomWords } from "./data/words";
import { languages } from "./data/languages";
import Header from "./components/Header/Header";
import Status from "./components/Status/Status";
import Languages from "./components/Languages/Languages";
import Word from "./components/Word/Word";
import Keyboard from "./components/Keyboard/Keyboard";
import Button from "./components/Button/Button";

function App() {
  //Window size for the confetti
  const { width, height } = useWindowSize();

  //State values
  const [currentWord, setCurrentWord] = useState([
    ...randomWords[Math.floor(Math.random() * randomWords.length)],
  ]);

  const [guessedLetters, setGuessedLetters] = useState([]);

  //Derived values
  const wrongGuessesCount = guessedLetters.filter(
    (letter) => !currentWord.includes(letter)
  ).length;
  const isGameLost = wrongGuessesCount >= languages.length - 1;
  const isGameWon =
    !isGameLost &&
    currentWord.every((letter) => guessedLetters.includes(letter));
  const isGameOver = isGameWon || isGameLost;

  function handleKeyboardButtonPress(letter) {
    setGuessedLetters((prevGuessedLetters) => [...prevGuessedLetters, letter]);
  }

  const lastGuessedLetter = guessedLetters[guessedLetters.length - 1];
  const isLastGuessedLetterIncorrect =
    lastGuessedLetter && !currentWord.includes(lastGuessedLetter);

  return (
    <main>
      <Header />
      <Status
        isGameWon={isGameWon}
        isGameLost={isGameLost}
        isGameOver={isGameOver}
        isLastGuessedLetterIncorrect={isLastGuessedLetterIncorrect}
        languages={languages}
        wrongGuessesCount={wrongGuessesCount}
      />
      <Languages languages={languages} wrongGuessesCount={wrongGuessesCount} />
      <Word
        currentWord={currentWord}
        guessedLetters={guessedLetters}
        isGameOver={isGameOver}
      />
      <Keyboard
        guessedLetters={guessedLetters}
        currentWord={currentWord}
        isGameOver={isGameOver}
        handleKeyboardButtonPress={handleKeyboardButtonPress}
      />
      <Button
        isGameOver={isGameOver}
        setGuessedLetters={setGuessedLetters}
        setCurrentWord={setCurrentWord}
        randomWords={randomWords}
      />
      {isGameWon && (
        <Confetti
          width={width}
          height={height}
          numberOfPieces={1000}
          recycle={false}
        />
      )}
    </main>
  );
}

export default App;
