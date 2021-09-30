import React, { useState } from "react";

import "./styles.css";

function App() {
  const [initialPrice, setInitialPrice] = useState(0);
  const [quantityOfStocks, setQuantityOfStocks] = useState(0);
  const [currentPrice, setCurrentPrice] = useState(0);
  const [output, setOutput] = useState("");
  const [color, setColor] = useState("black");

  const calculate = () => {
    if (!initialPrice || !quantityOfStocks || !currentPrice) {
      alert("Some input was empty or set to 0");
      setOutput("Some input was empty or set to 0");
      return;
    }
    const difference = (
      (currentPrice - initialPrice) *
      quantityOfStocks
    ).toFixed(2);
    const differencePercentage = (
      ((currentPrice - initialPrice) / initialPrice) *
      100
    ).toFixed(2);

    if (difference > 0) {
      setOutput(
        `Yay! Profit of ${difference}. Percentage was ${differencePercentage}%`
      );
      setColor("green");
      return;
    }
    if (difference < 0) {
      setOutput(
        `Oh! Loss of ${difference}. Percentage was ${differencePercentage}%`
      );
      setColor("red");
      return;
    }
    setOutput("No profit no loss");
    setColor("black");
    return;
  };

  return (
    <div className="App">
      <h1>{"Stock Profile & Loss Calculator"}</h1>

      <h3>Initial Price</h3>
      <input
        value={initialPrice}
        onChange={(e) => setInitialPrice(parseInt(e.target.value))}
        type="number"
      />

      <h3>Quantity of Stocks</h3>
      <input
        value={quantityOfStocks}
        onChange={(e) => setQuantityOfStocks(parseInt(e.target.value))}
        type="number"
      />

      <h3>Current Price</h3>
      <input
        value={currentPrice}
        onChange={(e) => setCurrentPrice(parseInt(e.target.value))}
        type="number"
      />

      <div>
        <button onClick={calculate}>Calculate</button>
      </div>

      <div style={{ color }}>{output}</div>
    </div>
  );
}

export default App;
