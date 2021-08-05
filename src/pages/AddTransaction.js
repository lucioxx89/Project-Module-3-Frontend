import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import transactionsApiClient from '../lib/transactionsApiClient';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class AddTransaction extends Component {
	constructor(props) {
		super(props);
		this.state = {
			date: '',
			payee: '',
			description: '',
			category: '',
			amount: '',
			missingDate: false,
			missingPayee: false,
			missingDescription: false,
			missingCategory: false,
			missingAmount: false,
		};
	}

	handleChangeInput = event => {
		console.log('event', event.target.value);
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	handleSubmitNewTransaction = async event => {
		const { date, payee, description, category, amount } = this.state;
		event.preventDefault();
		this.setState({
			missingDate: false,
			missingPayee: false,
			missingDescription: false,
			missingCategory: false,
			missingAmount: false,
		});

		// validation form starting
		if (!date || !payee || !description || !category || !amount) {
			if (!date && payee && description && category && amount) {
				toast.error('Please, date field is required', {
					position: 'top-center',
					autoClose: 2000,
					hideProgressBar: true,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
				return this.setState({ missingDate: true });
			} else if (!payee && date && description && category && amount) {
				toast.error('Please payee field is required', {
					position: 'top-center',
					autoClose: 2000,
					hideProgressBar: true,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
				return this.setState({ missingPayee: true });
			} else if (!description && date && payee && category && amount) {
				toast.error('Please, description field is required', {
					position: 'top-center',
					autoClose: 2000,
					hideProgressBar: true,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
				return this.setState({ missingDescription: true });
			} else if (!category && date && payee && description && amount) {
				toast.error('Please, category field is required', {
					position: 'top-center',
					autoClose: 2000,
					hideProgressBar: true,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
				return this.setState({ missingCategory: true });
			} else if (!amount && date && payee && description && category) {
				toast.error('Please, amount field is required', {
					position: 'top-center',
					autoClose: 2000,
					hideProgressBar: true,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
				return this.setState({ missingAmount: true });
			} else {
				toast.error('Please, all fields are required', {
					position: 'top-center',
					autoClose: 2000,
					hideProgressBar: true,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
				return this.setState({
					missingDate: true,
					missingPayee: true,
					missingDescription: true,
					missingCategory: true,
					missingAmount: true,
				});
			}
		} else {
			try {
				await transactionsApiClient.createTransaction(this.state);
				console.log('transactionCreated:', this.state);
			} catch (error) {
				console.log(error);
			} finally {
				this.props.history.push('/transactions', this.state);
			}
		}
	};

	render() {
		const { missingDate, missingPayee, missingDescription, missingCategory, missingAmount } = this.state;
		return (
			<>
				<Navbar></Navbar>

				<h2>Add a new transaction </h2>
				<div>
					{missingDate || missingPayee || missingDescription || missingCategory || missingAmount ? (
						<ToastContainer />
					) : (
						''
					)}
				</div>
				<form onSubmit={this.handleSubmitNewTransaction}>
					<label> Date:</label>
					<input
						className="form-control"
						type="date"
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

					<select
						className="form-control"
						name="category"
						value={this.state.category}
						onChange={this.handleChangeInput}
					>
						<option value=" "> </option>
						<option value="Home">Home</option>
						<option value="Restaurant">Restaurant</option>
						<option value="Health">Health</option>
						<option value="Travel">Travel</option>
						<option value="Beauty">Beauty</option>
						<option value="Supermarket">Supermarket</option>
						<option value="Other">Other</option>
					</select>

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
