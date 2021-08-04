import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TransactionItem from '../components/TransactionItem';
import transactionsApiClient from '../lib/transactionsApiClient';
import '../SmartPocketStyle.css';
import Navbar from '../components/Navbar';

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
		console.log('compdidmount', this.componentDidMount);

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
				<i className="float">
					<Link to="/addTransaction" style={{ textDecoration: 'none' }} className="fa fa-plus my-float" />
				</i>

				<Navbar></Navbar>
				<br></br>
				<h2>Expenses</h2>
				<br></br>

				<div className="table-responsive">
					<table className="table table-hover">
						<thead>
							<tr>
								<th>Date</th>
								<th>Payee</th>
								<th>Category</th>
								<th>Descripton</th>
								<th>Amount</th>
								<th></th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{this.state.transactionsList.map(transaction => {
								return (
									<>
										<TransactionItem
											key={transaction._id}
											date={transaction.date}
											payee={transaction.payee}
											category={transaction.category}
											description={transaction.description}
											amount={transaction.amount}
											buttonDelete={<i className="fa fa-trash" onClick={() => this.handleDelete(transaction._id)}></i>}
											buttonEdit={
												<i>
													<Link to={`/editTransaction/${transaction._id}`} className="fa fa-pencil" />
												</i>
											}
										/>
									</>
								);
							})}
						</tbody>
					</table>
				</div>
			</>
		);
	}
}

export default Transactions;
