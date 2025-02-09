import "./Status.css";

import { clsx } from 'clsx';

import { getFarewellText } from "../../data/utils";

export default function Status(props) {

    const statusSectionStyling = clsx("status-section", {
        won: props.isGameWon,
        lost: props.isGameLost,
        farewell: !props.isGameOver && props.isLastGuessedLetterIncorrect,
    })

  return (
    <section className={statusSectionStyling}>
      {props.isGameWon ? (
        <>
          <h2>You won!</h2>
          <p>Good job🎉</p>
        </>
      ) : null}
      {props.isGameLost ? (
        <>
          <h2>You lost!</h2>
          <p>You better start learning assembly😭</p>
        </>
      ) : null}
      {props.isLastGuessedLetterIncorrect && !props.isGameOver? (
        <>
          <p>{getFarewellText(props.languages[props.wrongGuessesCount - 1].name)}</p>
        </>
      ) : null}
    </section>
  );
}
