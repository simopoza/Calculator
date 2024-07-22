export interface Action {
	type: "add-digit" | "delete-digit" | "clear" | "operation" | "equal";
	payload?: any;
}

export interface State {
	previousOperand?: string | null | undefined;
	currentOperand?: string | null | undefined;
	operation?: string | null | undefined;
	overwrite?: boolean;
}
