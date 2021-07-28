import React, { Component } from 'react';
import transactionsApiClient from '../lib/transactionsApiClient';
import Private from './Private';

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
			console.log('transactiontoedit', transactionToEdit);
			this.setState({
				date: transactionToEdit.found.title,
				payee: transactionToEdit.found.payee,
				description: transactionToEdit.found.description,
				category: transactionToEdit.found.category,
				amount: transactionToEdit.found.amount,
			});
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

	// 	transactionsApiClient.put(id);
	// 	this.props.history.push('/transactions', body);
	// };
	// handleDelete = async id => {
	// 	const { id } = this.props.match.params._id;
	// 	try {
	// 		await transactionsApiClient.editTransaction(this.state);
	// 		console.log('transactionUpdated:', this.state);
	// 	} catch (error) {
	// 		console.log(error);
	// 	} finally {
	// 		this.props.history.push('/transactions', this.state);
	// 	}
	// };

	render() {
		return (
			<>
				<Private></Private>

				<form onSubmit={this.handleEdit}>
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

export default EditTransaction;
