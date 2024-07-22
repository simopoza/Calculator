import { Dispatch } from "react";
import { Action } from "../entities/entities";

interface Props {
  clear: string;
  dispatch: Dispatch<Action>;
}

const ClearButton = ({ clear, dispatch }: Props) => {
  return (
    <button
      className="span-two"
      onClick={() => dispatch({ type: "clear", payload: { clear: "" } })}
    >
      {clear}
    </button>
  );
};

export default ClearButton;
