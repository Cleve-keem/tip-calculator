import { useState } from "react";

function App() {
  const [bill, setBill] = useState("");
  const [rate1, setRate1] = useState(0);
  const [rate2, setRate2] = useState(0);

  const tip = bill * ((rate1 + rate2) / 2) / 100

  function handleClear() {
    setBill("");
    setRate1(0);
    setRate2(0);
  }

  return (
    <div style={{fontFamily: "sans-serif"}}>
      <Bill bill={bill} onBill={setBill} />
      <ServiceRate rate={rate1} onRate={setRate1}>
        How did you like the service?
      </ServiceRate>
      <ServiceRate rate={rate2} onRate={setRate2}>
        How did your friend like the service?
      </ServiceRate>

      {bill > 0 && (
        <div>
          <h1>
            You pay ${bill + tip} (${bill} + ${tip} tip)
          </h1>
          <button style={{marginTop: 10 }} onClick={handleClear} >Reset</button>
        </div>
      )}
    </div>
  );
}

function Bill({ bill, onBill }) {
  return (
    <div>
      <span>How much the bill?</span>
      <input
        type="text"
        value={bill}
        onChange={(e) => {
          onBill(+e.target.value);
        }}
      />
    </div>
  );
}

function ServiceRate({ children, rate, onRate }) {
  return (
    <div>
      <span>{children}</span>
      <select
        name="rate"
        value={rate}
        onChange={(e) => {
          onRate(Number(e.target.value));
        }}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely Amazing (20%)</option>
      </select>
    </div>
  );
}

export default App;
