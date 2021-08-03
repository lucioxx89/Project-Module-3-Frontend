import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import transactionsApiClient from '../lib/transactionsApiClient';
import CategorySpendingChart from '../components/CategorySpendingChart';

class Reports extends Component {
	constructor(props) {
		super(props);
		this.state = {
			status: 'loading',
			transactionsList: [],
			charts: <></>,
		};
	}

	async componentDidMount() {
		this.getAllTransactions();
	}

	getAllTransactions = async () => {
		try {
			const myList = await transactionsApiClient.getAllTransactions();
			this.setState({
				status: 'loaded',
				charts: <CategorySpendingChart transactions={myList.found} />,
			});
		} catch (error) {
			console.log(error);
		}
	};

	render() {
		return (
			<>
				<Navbar></Navbar>
				<h1>Report</h1>

				{this.state.charts}
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
