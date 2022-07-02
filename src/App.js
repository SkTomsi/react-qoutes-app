import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [quotesData, setQuotesData] = useState("");

  const getRandomQoute = () => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((quotes) => {
        const randomQuote = Math.floor(Math.random() * quotes.length);
        setQuotesData(quotes[randomQuote]);
      });
  };

  useEffect(() => {
    getRandomQoute();
  }, []);
  return (
    <div>
      <h2>{quotesData.text}</h2>
      <p>{quotesData.author}</p>
      <button onClick={getRandomQoute}>Next Quote</button>
    </div>
  );
}

export default App;
