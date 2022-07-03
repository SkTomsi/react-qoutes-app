import React, { useEffect, useState } from "react";
import "./App.css";
import QuoteItem from "./QuoteItem";

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
    <div className="App">
      <div className="quote">
        <QuoteItem quoteHandler={getRandomQoute} quote={quotesData} />
      </div>
    </div>
  );
}

export default App;
