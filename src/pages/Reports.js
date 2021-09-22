import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import transactionsApiClient from '../lib/transactionsApiClient';
import CategoryChart from '../components/CategoryChart';
import YearSpendingChart from '../components/YearSpendingChart';

class Reports extends Component {
	constructor(props) {
		super(props);
		this.state = {
			status: 'loading',
			transactionsList: [],
			expenseCharts: <></>,
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
				expenseCharts: (
					<>
						<CategoryChart transactions={myList.found} />
						<br></br>
						<br></br>

						<YearSpendingChart transactions={myList.found} />
					</>
				),
			});
		} catch (error) {
			console.log(error);
		}
	};

	render() {
		return (
			<>
				<Navbar></Navbar>
				<br></br>
				<h2>Report</h2>
				<br></br>

				{this.state.expenseCharts}
			</>
		);
	}
}

export default Reports;
