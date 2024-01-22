import * as React from "react";
import inspirations from "./insipirations.js";
import FancyText from "./FancyText";
import Color from "./Color.js";

export default function InspirationGenerator({ children }) {
  const [index, setIndex] = React.useState(0);
  const insipiration = inspirations[index];
  const next = () => setIndex((index + 1) % quotes.length);

  return (
    <>
      <p>Your inspirational quote is:</p>

      {inspirations.type === 'color'?
      <Color text={insipiration.value} />
      :<FancyText value={insipiration.value}/>}

      <button onClick={next}>Inspire me again</button>
      {children}
    </>
  );
}
