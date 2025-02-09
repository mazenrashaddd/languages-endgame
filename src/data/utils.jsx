export function getFarewellText(language) {
    const options = [
      `Farewell, ${language}`,
      `Adios, ${language}`,
      `R.I.P., ${language}`,
      `We will miss you, ${language}`,
      `Goodbye, dear ${language}`,
      `Gone but not forgotten, ${language}`,
      `You were the best, ${language}`,
      `Another legend lost: ${language}`,
      `So long and thanks for all the bugs, ${language}`,
      `${language}, you shall live in our hearts forever`,
      `${language}, it's been real`,
      `${language}, has left the building`,
      `${language}, bites the dust`,
    ];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  }