import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Bill />
      <ServiceRate>How did you like the service?</ServiceRate>
      <ServiceRate>How did your friend like the service?</ServiceRate>
    </>
  );
}

function Bill() {
  const [bill, setBill] = useState(null);
  return (
    <div>
      <span>How much the bill?</span>
      <input
        type="text"
        value={bill}
        onChange={(e) => {
          setBill(e.target.value);
        }}
      />
    </div>
  );
}

function ServiceRate({ children }) {
  const [rate, setRate] = useState("dissatisfied");

  return (
    <div>
      <span>{children}</span>
      <select
        name="rate"
        value={rate}
        onChange={(e) => {
          setRate(e.target.value);
        }}
      >
        <option value="dissatisfied">Dissatisfied (0%)</option>
        <option value="okay">It was okay (5%)</option>
        <option value="good">It was good (10%)</option>
        <option value="amazing">Absolutely Amazing (20%)</option>
      </select>
    </div>
  );
}

export default App;