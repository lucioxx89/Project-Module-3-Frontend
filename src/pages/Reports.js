import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import transactionsApiClient from '../lib/transactionsApiClient';

class Reports extends Component {
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

	render() {
		console.log('report', this.state.transactionsList);
		return (
			<>
				<Navbar></Navbar>
				<h1>Reports</h1>
				{this.state.transactionsList.map((item, index) => {
					console.log('item1', item);
					return (
						<div key={index}>
							<p>{item.description}</p>
						</div>
					);
				})}
			</>
		);
	}
}

export default Reports;

// .filter(item => {
// 						console.log('item', item.payee);
// 						if (item.payee === 'Vodafone') {
// 							return item;
// 						}
// 					})
