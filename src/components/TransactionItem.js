import React from 'react';

const TransactionItem = transaction => {
	const date = new Date(transaction.date).toLocaleDateString('de-DE', {
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
	});

	// let transactionClass = 'table-success';
	// if (transaction.amount < 0) {
	// 	transactionClass = 'table-danger';
	// }

	return (
		// <tr className={transactionClass}>
		<tr>
			<td>{date}</td>
			<td>{transaction.payee}</td>
			<td>{transaction.category}</td>
			<td>{transaction.description}</td>
			<td>{transaction.amount} €</td>
			<td>{transaction.buttonEdit} </td>
			<td>{transaction.buttonDelete} </td>
		</tr>
	);
};

export default TransactionItem;
