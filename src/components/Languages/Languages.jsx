import "./Languages.css";

import { clsx } from 'clsx';

export default function Language(props) {
  const languagesElement = props.languages.map((language, index) => {
    const buttonStyling = clsx("language-button", {
      dead: props.wrongGuessesCount >= index + 1,
    });
    return (
      <button
        key={index}
        style={{
          color: `${language.color}`,
          backgroundColor: `${language.backgroundColor}`,
        }}
        className={buttonStyling}
      >
        {language.name}
      </button>
    );
  });
  return <section className="languages-section">{languagesElement}</section>;
}
