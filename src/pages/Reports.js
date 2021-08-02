import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import transactionsApiClient from '../lib/transactionsApiClient';
import Chart from '../components/Chart';

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
				<h1>Report</h1>

				<Chart transaction={this.state.transactionsList} />
			</>
		);
	}
}

export default Reports;

// {this.state.transactionsList.map(item => {
// 				console.log('itemtoshow', item)};

// .filter(item => {
// 						console.log('item', item.payee);
// 						if (item.payee === 'Vodafone') {
// 							return item;
// 						}
// 					})
