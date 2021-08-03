import React, { Component } from 'react';
import transactionsApiClient from '../lib/transactionsApiClient';
import Navbar from '../components/Navbar';

class EditTransaction extends Component {
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

	componentDidMount = async () => {
		const { id } = this.props.match.params;

		try {
			const transactionToEdit = await transactionsApiClient.getOneTransaction(id);
			this.setState({
				date: transactionToEdit.found.date,
				payee: transactionToEdit.found.payee,
				description: transactionToEdit.found.description,
				category: transactionToEdit.found.category,
				amount: transactionToEdit.found.amount,
			});

			console.log('loadeeeeed');
		} catch (error) {
			console.log(error);
		}
	};

	handleEdit = async event => {
		event.preventDefault();
		const { id } = this.props.match.params;
		const { date, payee, description, category, amount } = this.state;
		try {
			const editTransaction = await transactionsApiClient.editTransaction(id, {
				date,
				payee,
				description,
				category,
				amount,
			});
			console.log(editTransaction);
		} catch (error) {
			console.log(error);
		} finally {
			this.props.history.push('/transactions');
		}
	};

	handleChangeInput = event => {
		console.log('event', event.target.value);

		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	render() {
		return (
			<>
				<h2>Edit your transaction</h2>
				<Navbar></Navbar>

				<form onSubmit={this.handleEdit}>
					<label> Date:</label>
					<input
						className="form-control"
						type="date"
						name="date"
						value={this.state.date.split('T')[0]}
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
						Update transaction
					</button>
				</form>
			</>
		);
	}
}

export default EditTransaction;
