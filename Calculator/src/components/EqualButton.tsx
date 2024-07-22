import React, { Dispatch } from "react";
import { Action } from "../entities/entities";

interface Props {
  result?: string | null;
  dispatch: Dispatch<Action>;
}

const EqualButton = ({ result, dispatch }: Props) => {
  return (
    <button
      className="span-two"
      onClick={() => dispatch({ type: "equal", payload: { result } })}
    >
      =
    </button>
  );
};

export default EqualButton;
