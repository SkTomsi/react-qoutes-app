import React, { useEffect, useState } from "react";
import "./App.css";
import Footer from "./Footer";

import Navbar from "./Navbar";
import QuoteItem from "./QuoteItem";

function App() {
  const [quotesData, setQuotesData] = useState("");
  const [authorData, setAuthorData] = useState("");

  const getRandomQoute = () => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((quotes) => {
        const randomQuote = Math.floor(Math.random() * quotes.length);
        setQuotesData(quotes[randomQuote]);
        setAuthorData(quotes[randomQuote].author);
      });
  };

  if (authorData === null) {
    setAuthorData("Unknown");
  }

  useEffect(() => {
    getRandomQoute();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <QuoteItem
        quoteHandler={getRandomQoute}
        quote={quotesData}
        author={authorData}
      />
      <>
        <Footer />
      </>
    </div>
  );
}

export default App;
