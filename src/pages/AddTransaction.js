import React, { Component } from 'react';
import transactionsApiClient from '../lib/transactionsApiClient';

class AddTransaction extends Component {
	constructor(props) {
		super(props);
		this.state = {
			date: '',
			payee: '',
			description: '',
			category: [],
			amount: '',
		};
	}

	handleChangeInput = event => {
		console.log('event', event.target.value);
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	handleSubmitNewTransaction = async event => {
		event.preventDefault();

		try {
			await transactionsApiClient.createTransaction(this.state);
			console.log('transactionCreated:', this.state);
		} catch (error) {
			console.log(error);
		} finally {
			this.props.history.push('/transactions', this.state);
		}
	};

	render() {
		return (
			<>
				<form onSubmit={this.handleSubmitNewTransaction}>
					<label> Date:</label>
					<input type="text" name="date" value={this.state.date} onChange={this.handleChangeInput} />

					<label> Payee:</label>
					<input type="text" name="payee" value={this.state.payee} onChange={this.handleChangeInput} />

					<label> Description:</label>
					<input type="text" name="description" value={this.state.description} onChange={this.handleChangeInput} />

					<label> Category:</label>
					<input type="text" name="category" value={this.state.category} onChange={this.handleChangeInput} />

					<label> Amount:</label>
					<input type="text" name="amount" value={this.state.amount} onChange={this.handleChangeInput} />

					<button type="submit">Submit</button>
				</form>
			</>
		);
	}
}

export default AddTransaction;
