import React from 'react';

const TransactionItem = props => {
	return (
		<tr>
			<td>{props.date}</td>
			<td>{props.payee}</td>
			<td>{props.category}</td>
			<td>{props.description}</td>
			<td>{props.amount} €</td>
			<td>{props.buttonEdit} </td>
			<td>{props.buttonDelete} </td>
		</tr>
	);
};

export default TransactionItem;
