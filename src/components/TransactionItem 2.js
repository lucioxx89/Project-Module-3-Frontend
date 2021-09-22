import React from 'react';

const TransactionItem = props => {
	return (
		<tr>
			<td>{props.date}</td>
			<td>{props.payee}</td>
			<td>{props.category}</td>
			<td>{props.description}</td>
			<td>{props.amount} €</td>
			<td>{props.buttonDelete} </td>
			<td>{props.buttonEdit} </td>

			{/* <button>Delete {props.onDelete}</button> */}
		</tr>
	);
};

export default TransactionItem;
