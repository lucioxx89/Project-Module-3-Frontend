import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TransactionItem from '../components/TransactionItem';
import transactionsApiClient from '../lib/transactionsApiClient';

class Transactions extends Component {
	constructor(props) {
		super(props);
		this.state = {
			status: 'loading',
			transactionsList: [],
		};
	}

	async componentDidMount() {
		this.getAllTransactions();
	}

	getAllTransactions = async () => {
		console.log('compdidmount');

		try {
			const myList = await transactionsApiClient.getAllTransactions();
			console.log('createdList: ', myList);
			this.setState({
				status: 'loaded',
				transactionsList: myList.found,
			});
		} catch (error) {
			console.log(error);
		}
	};

	handleDelete = async id => {
		await transactionsApiClient.deleteTransaction(id);
		await this.getAllTransactions();
	};

	render() {
		console.log('newState', this.state.transactionsList);

		return (
			<>
				<Link to="/transactions" className="btn btn-link">
					Transactions
				</Link>
				<Link to="/reports" className="btn btn-link">
					Reports
				</Link>
				<Link to="/profile" className="btn btn-link">
					Profile
				</Link>

				<Link to="/addTransaction" className="btn btn-link">
					Add Transaction
				</Link>

				<h1>Recent Transactions</h1>

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
						{this.state.transactionsList.map(transaction => {
							return (
								<TransactionItem
									key={transaction._id}
									date={transaction.date}
									payee={transaction.payee}
									category={transaction.category}
									description={transaction.description}
									amount={transaction.amount}
									buttonDelete={<button onClick={() => this.handleDelete(transaction._id)}>Delete</button>}
									buttonEdit={<Link to="/editTransaction">Edit</Link>}
								/>
							);
						})}
					</tbody>
				</table>
			</>
		);
	}
}

export default Transactions;
