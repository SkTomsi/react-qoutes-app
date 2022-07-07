import React from "react";
import "./QuoteItem.css";
/* import headerImg from "./design_workspace_illustration_tubik.png"; */
const QuoteItem = ({ quote, quoteHandler, author }) => {
  const { text } = quote;
  return (
    <div className="quote__container">
      <div className="quote__card">
        <div className="quote__cardInfo">
          {/*   <img src={headerImg} alt="quote" /> */}

          <h4>{text}</h4>
          <p>- {author}</p>
        </div>
        <div className="quote__button">
          <div className="quote__buttonLeft">
            <button>Share</button>
          </div>
          <div className="quote__buttonRight">
            <button onClick={quoteHandler}>Next Quote</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteItem;
