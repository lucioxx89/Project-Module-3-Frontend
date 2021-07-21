import React from 'react';

const TransactionItem = props => {
	return (
		<tr>
			<td>{props.date}</td>
			<td>{props.payee}</td>
			<td>{props.category}</td>
			<td>{props.description}</td>
			<td>{props.amount}</td>
		</tr>
	);
};

// import React, { Component } from 'react';

// class TransactionItem extends Component {
// 	constructor(props) {
// 	// 	super(props);
// 	// 	// this.state(props);
// 	 }

// 	render() {
// 		return (
// 			<div>
// 				<p>Transaction iteeeeeeem</p>
// 				<p> {props.date}</p>
// 			</div>
// 		);
// 	}
// }

export default TransactionItem;
