import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TransactionItem from '../components/TransactionItem';

class Transactions extends Component {
	constructor(props) {
		super(props);
		this.state = [
			{
				_id: '60f873509181a584394dcad1',
				date: '30.07.2021',
				payee: 'Consum Express',
				amount: 100,
				description: 'Burger Bar with flat mates',
				category: 'Grocery',
				userId: '60f146f3d8019e7a438189f9',
				__v: 0,
			},
			{
				_id: '60f873509181a584394dcad2',
				date: '30.07.2021',
				payee: 'Vueling Airlines',
				amount: 100,
				description: 'Flights for Italy vacation',
				category: 'Travel',
				userId: '60f146f3d8019e7a438189f9',
				__v: 0,
			},
			{
				_id: '60f873509181a584394dcad3',
				date: '30.07.2021',
				payee: 'Pharmacia Providencia',
				amount: 100,
				description: 'Pills',
				category: 'Health',
				userId: '60f146f3d8019e7a438189f9',
				__v: 0,
			},
		];

		// TODO: get real transactions from API and assign them to state
	}

	render() {
		console.log('state', this.state.name);

		return (
			<>
				<h1>Recent Transactions</h1>
				<Link to="/transactions" className="btn btn-link">
					Transactions
				</Link>
				<Link to="/reports" className="btn btn-link">
					Reports
				</Link>
				<Link to="/profile" className="btn btn-link">
					Profile
				</Link>

				<table className="table table-hover">
					<thead>
						<tr>
							<th>Date</th>
							<th>Payee</th>
							<th>Category</th>
							<th>Descripton</th>
							<th>Amount</th>
						</tr>
					</thead>
					<tbody>
						{this.state.map(transaction => (
							<TransactionItem
								key={transaction._id}
								date={transaction.date}
								payee={transaction.payee}
								category={transaction.category}
								description={transaction.description}
								amount={transaction.amount}
							/>
						))}
					</tbody>
				</table>
			</>
		);
	}
}

export default Transactions;
