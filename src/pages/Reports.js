import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import transactionsApiClient from '../lib/transactionsApiClient';

class Reports extends Component {
	constructor(props) {
		super(props);
		this.state = {
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

	render() {
		console.log('report', this.state.transactionsList[0]);
		return (
			<>
				<Navbar></Navbar>
				<h1>Reports</h1>
				{/* {this.state.transactionsList.map(item => {
					return (
						<div>
							<p> {item[0]}</p>;
						</div>
					);
				})} */}
			</>
		);
	}
}

export default Reports;
