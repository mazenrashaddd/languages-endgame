import "./Button.css";

export default function Button(props) {
  function handleNewGameButton() {
    props.setCurrentWord([
      ...props.randomWords[
        Math.floor(Math.random() * props.randomWords.length)
      ],
    ]);
    props.setGuessedLetters([]);
  }

  return (
    <section className="button-section">
      {props.isGameOver && (
        <button className="new-game-button" onClick={handleNewGameButton}>
          New Game
        </button>
      )}
    </section>
  );
}
