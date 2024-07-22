import { Dispatch } from "react";
import { Action } from "../entities/entities";

interface Props {
	operation: string;
	dispatch: Dispatch<Action>;
}

const OperationButton = ({operation, dispatch}: Props) => {
  return (
		<button onClick={() => dispatch({ type: "operation", payload: { operation } })}>
			{operation}
		</button>
  )
}

export default OperationButton