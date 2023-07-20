import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  function plusStep() {
    setStep(step + 1);
  }
  function minusStep() {
    setStep(step - 1);
  }
  function plusCount() {
    setCount(count + step);
  }
  function minusCount() {
    setCount(count - step);
  }

  return (
    <>
      <div>
        <button onClick={minusStep}>-</button>
        <span>Step: {step}</span>
        <button onClick={plusStep}>+</button>
      </div>
      <div>
        <button onClick={minusCount}>-</button>
        <span>Count: {count}</span>
        <button onClick={plusCount}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </>
  );
}
