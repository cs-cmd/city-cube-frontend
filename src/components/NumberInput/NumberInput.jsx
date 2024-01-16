import "./NumberInput.css";

export default function NumberInput({ count, changeNumberFunction }) {
  return (
    <div className="counter">
      <button
        className="counter-button"
        onClick={() => changeNumberFunction(-1)}
      >
        -
      </button>
      <span className="counter-number">{count}</span>
      <button
        className="counter-button"
        onClick={() => changeNumberFunction(1)}
      >
        +
      </button>
    </div>
  );
}
