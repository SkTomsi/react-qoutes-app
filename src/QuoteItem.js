import React from "react";
import "./QuoteItem.css";
/* import headerImg from "./design_workspace_illustration_tubik.png"; */
const QuoteItem = ({ quote, quoteHandler }) => {
  const { text, author } = quote;
  return (
    <div className="quote__card">
      <div className="quote__cardInfo">
        {/*   <img src={headerImg} alt="quote" /> */}
        <h4>{text}</h4>
        <p>- {author}</p>
        <div className="quote__button">
          <button onClick={quoteHandler}>Next Quote</button>
        </div>
      </div>
    </div>
  );
};

export default QuoteItem;
