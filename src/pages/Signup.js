import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Signup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			missingUsername: false,
			missingPassword: false,
		};
	}

	handleFormSubmit = event => {
		event.preventDefault();
		const { username, password } = this.state;
		this.setState({ missingUsername: false, missingPassword: false });

		// Validation starting here
		if (!username || !password) {
			if (!username && password) {
				toast.error('Please username is required', {
					position: 'top-center',
					autoClose: 2000,
					hideProgressBar: true,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
				return this.setState({ missingUsername: true });
			} else if (!password && username) {
				toast.error('Please password is required', {
					position: 'top-center',
					autoClose: 2000,
					hideProgressBar: true,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
				return this.setState({ missingPassword: true });
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
				return this.setState({ missingUsername: true, missingPassword: true });
			}
		} else {
			this.props.signup({ username, password });
		}
	};

	handleChange = event => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		const { username, password, missingUsername, missingPassword } = this.state;

		return (
			<>
				<br></br>
				<br></br>

				<div>{missingUsername || missingPassword ? <ToastContainer /> : ''}</div>

				<form onSubmit={this.handleFormSubmit}>
					<label>Username:</label>
					<input className="form-control" type="text" name="username" value={username} onChange={this.handleChange} />

					<br></br>

					<label>Password:</label>
					<input
						className="form-control"
						type="password"
						name="password"
						value={password}
						onChange={this.handleChange}
					/>

					<br></br>

					<input className="btn btn-outline-primary" type="submit" value="Signup" />
				</form>
				<br></br>
				<p>
					Already have an account?
					<Link to={'/login'}> Login</Link>
				</p>
			</>
		);
	}
}

export default withAuth(Signup);
