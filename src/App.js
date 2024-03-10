import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [diceCount, setDiceCount] = useState("");
  const [diceType, setDiceType] = useState(4);
  const [result, setResult] = useState([]);

  const dice = (side) => {
    return Math.floor(Math.random() * side) + 1;
  };
  const count = diceCount.valueOf();
  const type = diceType.valueOf();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (count && type) {
      const spin = [];
      for (let i = 0; i < parseInt(count); i += 1) {
        const Roll = dice(parseInt(type));
        spin.push(Roll);
      }
      setResult(spin);
    } else {
      console.log("error");
    }
  };
  useEffect(() => {
    console.log(result);
  }, [result]);

  return (
    <div className="diceRoll">
      <section>
        <form onSubmit={handleSubmit} className="diceForm">
          <h1>Roll the dice</h1>
          <div className="inputs">
            <div className="inputType">
              <label>How many dices to roll</label>
              <input
                value={diceCount}
                onChange={(e) => {
                  setDiceCount(e.target.value);
                }}
                name="dice-count"
                id="dice-count"
              />
            </div>
            <br />
            <div className="inputType">
              <label>Choose the number of sides</label>
              <select
                name="dice-type"
                id="dice-type"
                value={diceType}
                onChange={(e) => {
                  setDiceType(e.target.value);
                }}
              >
                <option value="4">D4</option>
                <option value="6">D6</option>
                <option value="8">D8</option>
                <option value="12">D12</option>
              </select>
            </div>
          </div>
          <button id="submit" type="submit">
            Submit
          </button>
        </form>
      </section>
      <section id="result">
        {result.map((diceResult, index) => (
          <div key={index} className="dices">
            {diceResult}
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;
