import { useEffect, useState } from "react";
import { quotes } from "./quotes.json";

function App() {
  const [quote, setQuote] = useState({
    quote: "",
    author: "",
  });

  const chooseQuote = () => {
    const idx = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[idx]);
  };

  useEffect(() => {
    chooseQuote();
  }, []);

  return (
    <>
      <div id="quote-box">
        <div id="quote">
          <img src="src\assets\quote-left-icon.png" alt='"' id="quote-symbol" />
          <h1 id="text">{quote.quote}</h1>
        </div>
        <h5 id="author">{`- ${quote.author}`}</h5>
        <div id="quote-footer">
          <a
            id="tweet-quote"
            href={`https://twitter.com/intent/tweet?text="${quote.quote}."%20-${quote.author}+%23quotes`}
            target="_blank"
          >
            <img src="src\assets\twitter.png" alt="twitter" id="twitter-logo" />
          </a>
          <button id="new-quote" onClick={chooseQuote}>
            {"New Quote"}
          </button>
        </div>
      </div>
      <p>By Issac Roy</p>
    </>
  );
}

export default App;
