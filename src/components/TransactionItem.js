import React from 'react';

const TransactionItem = props => {
	const date = new Date(props.date).toLocaleDateString('es-ES', { year: 'numeric', month: '2-digit', day: '2-digit' });

	return (
		<tr>
			<td>{date}</td>
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
