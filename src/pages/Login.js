import React, { Component } from 'react';
import { withAuth } from '../providers/AuthProvider';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
		};
	}

	handleFormSubmit = event => {
		event.preventDefault();
		const { username, password } = this.state;
		this.props.login({
			username,
			password,
		});
	};

	handleChange = event => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		const { username, password } = this.state;
		return (
			<>
				{/* <h1>Smart Pocket</h1> */}
				<br></br>
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

					<input className=" btn btn-outline-primary" type="submit" value="Login" />
				</form>
			</>
		);
	}
}

export default withAuth(Login);
