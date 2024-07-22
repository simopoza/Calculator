import { useReducer } from "react";
import "./App.css";
import DigitButton from "./components/DigitButton";
import OperationButton from "./components/OperationButton";
import ClearButton from "./components/ClearButton";
import DeleteButton from "./components/DeleteButton";
import EqualButton from "./components/EqualButton";
import reducer from "./reducer/reducer";

const FORMAT_INTEGER = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 0,
});

const FormatOperand = (operand?: string | null) => {
  if (operand === null || operand === undefined) return null;
  const [integer, decimal] = operand.split(".");
  if (decimal === undefined) return FORMAT_INTEGER.format(parseFloat(integer));
  if (integer === "") return `.${decimal}`;
  return `${FORMAT_INTEGER.format(parseFloat(integer))}.${decimal}`;
};

function App() {
  const [{ previousOperand, currentOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">
          {FormatOperand(previousOperand)} {operation}
        </div>
        <div className="current-operand">{FormatOperand(currentOperand)}</div>
      </div>
      <ClearButton clear="AC" dispatch={dispatch} />
      <DeleteButton Del="DEL" dispatch={dispatch} />
      <OperationButton operation="÷" dispatch={dispatch} />
      <DigitButton digit="1" dispatch={dispatch} />
      <DigitButton digit="2" dispatch={dispatch} />
      <DigitButton digit="3" dispatch={dispatch} />
      <OperationButton operation="*" dispatch={dispatch} />
      <DigitButton digit="4" dispatch={dispatch} />
      <DigitButton digit="5" dispatch={dispatch} />
      <DigitButton digit="6" dispatch={dispatch} />
      <OperationButton operation="+" dispatch={dispatch} />
      <DigitButton digit="7" dispatch={dispatch} />
      <DigitButton digit="8" dispatch={dispatch} />
      <DigitButton digit="9" dispatch={dispatch} />
      <OperationButton operation="-" dispatch={dispatch} />
      <DigitButton digit="." dispatch={dispatch} />
      <DigitButton digit="0" dispatch={dispatch} />
      <EqualButton result={currentOperand} dispatch={dispatch} />
    </div>
  );
}

export default App;
