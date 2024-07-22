import { Action, State } from "../entities/entities";


const doOperation = (state: State) => {
  if (state.currentOperand && state.previousOperand) {
    const previousOperandFloat = parseFloat(state.previousOperand);
    const currentOperandFloat = parseFloat(state.currentOperand);
    if (isNaN(currentOperandFloat) || isNaN(previousOperandFloat)) return null;
    if (state.operation === "+")
      return previousOperandFloat + currentOperandFloat;
    if (state.operation === "*")
      return previousOperandFloat * currentOperandFloat;
    if (state.operation === "-")
      return previousOperandFloat - currentOperandFloat;
    if (state.operation === "÷")
      return previousOperandFloat / currentOperandFloat;
  }
  return null;
};

const reducer = (state: State, { type, payload }: Action): State => {
	switch (type) {
		case "add-digit":
			if (state.overwrite) {
				return {
					...state,
					currentOperand: payload.digit,
					overwrite: false,
				};
			}
			if (payload.digit === "0" && state.currentOperand === "0") return state;
			if (payload.digit === "." && state.currentOperand?.includes("."))
				return state;
			return {
				...state,
				currentOperand: `${state.currentOperand || ""}${payload.digit}`,
			};
		case "operation":
			if (state.previousOperand && state.operation && state.currentOperand) {
				return {
					...state,
					previousOperand: doOperation(state)?.toString(),
					operation: payload.operation,
					currentOperand: null,
				};
			}
			return {
				...state,
				operation: `${
					(state.currentOperand || state.previousOperand) && payload.operation
				}`,
				previousOperand: `${state.currentOperand || state.previousOperand}`,
				currentOperand: null,
			};
		case "clear":
			return {};
		case "delete-digit":
			if (state.overwrite) {
				return {
					...state,
					overwrite: false,
					currentOperand: null,
				};
			}
			if (state.currentOperand === null) {
				if (state.operation)
					return {
						...state,
						operation: null,
						currentOperand: state.previousOperand,
						previousOperand: null,
					};
				return state;
			}
			if (state.currentOperand?.length === 1) {
				return {
					...state,
					currentOperand: null,
				};
			}
			return {
				...state,
				currentOperand: state.currentOperand?.slice(0, -1),
			};
		case "equal":
			return {
				...state,
				overwrite: true,
				currentOperand: doOperation(state)?.toString(),
				previousOperand: null,
				operation: "",
			};
		default:
			return state;
	}
};

export default reducer;