import { Dispatch } from 'react'
import { Action } from "../entities/entities";

interface Props {
	Del: string;
	dispatch: Dispatch<Action>;
}

const DeleteButton = ({ Del, dispatch }: Props) => {
  return (
    <button onClick={() => dispatch({type: 'delete-digit'})}>{Del}</button>
  )
}

export default DeleteButton