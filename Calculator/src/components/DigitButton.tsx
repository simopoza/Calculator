import { Dispatch } from "react";
import { Action } from "../entities/entities";

interface Props {
  digit: string;
  dispatch: Dispatch<Action>;
}

const DigitButton = ({ digit, dispatch }: Props) => {
  return (
    <button onClick={() => dispatch({ type: "add-digit", payload: { digit } })}>
      {digit}
    </button>
  );
};

export default DigitButton;
