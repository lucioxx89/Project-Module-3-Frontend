import React, { Component } from 'react';
import Navbar from '../components/Navbar';
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
				<Navbar></Navbar>

				<h2>Add a new transaction </h2>
				<form onSubmit={this.handleSubmitNewTransaction}>
					<label> Date:</label>
					<input
						className="form-control"
						type="text"
						name="date"
						value={this.state.date}
						onChange={this.handleChangeInput}
					/>

					<br></br>

					<label> Payee:</label>
					<input
						className="form-control"
						type="text"
						name="payee"
						value={this.state.payee}
						onChange={this.handleChangeInput}
					/>

					<br></br>

					<label> Description:</label>
					<input
						className="form-control"
						type="text"
						name="description"
						value={this.state.description}
						onChange={this.handleChangeInput}
					/>

					<br></br>

					<label> Category:</label>
					<input
						className="form-control"
						type="text"
						name="category"
						value={this.state.category}
						onChange={this.handleChangeInput}
					/>

					<br></br>

					<label> Amount:</label>
					<input
						className="form-control"
						type="text"
						name="amount"
						value={this.state.amount}
						onChange={this.handleChangeInput}
					/>

					<br></br>

					<button className="btn btn-outline-success" type="submit">
						Submit
					</button>
				</form>
			</>
		);
	}
}

export default AddTransaction;
