import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../providers/AuthProvider';

class Signup extends Component {
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
		this.props.signup({ username, password });
	};

	handleChange = event => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		const { username, password } = this.state;
		return (
			<div>
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
						required
					/>
					<br></br>

					<input className="btn btn-outline-primary" type="submit" value="Signup" required />
				</form>
				<br></br>
				<p>
					Already have account?
					<Link to={'/login'}> Login</Link>
				</p>
			</div>
		);
	}
}

export default withAuth(Signup);
