import React from "react";
import { useState } from "react";
function RandomAdviceRendering() {
  const [advice, setAdvice] = useState("");
  //   =========
  async function fetchAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    setAdvice(data.slip.advice);
  }

  return { advice, fetchAdvice };
}

function Advicerandom() {
  const { advice, fetchAdvice } = RandomAdviceRendering();
  return (
    <>
      <p>{advice}</p>
      <button onClick={fetchAdvice}>hear sth👂🏻</button>
    </>
  );
}

export { Advicerandom };
