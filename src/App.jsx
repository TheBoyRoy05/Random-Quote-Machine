import { useEffect, useState } from "react";
import { quotes } from "./quotes.json";
import twitterLogo from "./assets/twitter.png"

function App() {
  const [quote, setQuote] = useState({
    quote: "",
    author: "",
  });

  const randInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const chooseQuote = () => {
    let idx = randInt(0, quotes.length);
    setQuote(quotes[idx]);

    const color = `hsl(${randInt(0, 360)}, 60%, 70%)`
    document.documentElement.style.setProperty("--color", color)
  };

  useEffect(() => {
    chooseQuote();
  });

  return (
    <div id="wrapper">
      <div id="quote-box">
        <div id="quote">
          <h1 id="text">{quote.quote}</h1>
        </div>
        <h5 id="author">{`- ${quote.author}`}</h5>
        <div id="quote-footer">
          <a
            id="tweet-quote"
            href={`https://twitter.com/intent/tweet?text="${quote.quote}"%20-${quote.author}+%23quotes`}
            target="_blank"
          >
            <img src={twitterLogo} alt="twitter" id="twitter-logo" />
          </a>
          <button id="new-quote" onClick={chooseQuote}>
            {"New Quote"}
          </button>
        </div>
      </div>
      <p id="signature">By Issac Roy</p>
    </div>
  );
}

export default App;
