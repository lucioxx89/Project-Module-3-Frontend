import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../providers/AuthProvider';

class Signup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			validUsername: null,
			password: '',
			validPassword: null,
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
		if (name === 'username') {
			const editvalue = name.replace(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);
			if (editvalue === 'undefined') {
				return this.setState({ username: name, validUsername: true });
			}
			return this.setState({ username: name, validUsername: false });
		} else if (name === 'password') {
			const editvalue = name.replace(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/);
			if (editvalue === 'undefined') {
				return this.setState({ password: name, validPassword: true });
			}
			return this.setState({ password: name, validPassword: false });
		}
	};

	//  if (id === "email") {
	//     const editvalue = value.replace(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);
	//     if (editvalue === "undefined") {
	//       return this.setState({ email: value, validEmail: true });
	//     }
	//     return this.setState({ email: value, validEmail: false });
	//   } else if (id === "password") {
	//     const editvalue = value.replace(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/);
	//     if (editvalue === "undefined") {
	//       return this.setState({ password: value, validPassword: true });
	//     }
	//     return this.setState({ password: value, validPassword: false });
	//   } else {
	//     const editvalue = value.replace(/^[a-zA-Z]([-']?[a-zA-Z]+)*( [a-zA-Z]([-']?[a-zA-Z]+)*)+$/);
	//     if (editvalue === "undefined") {
	//       return this.setState({ name: value, validName: true });
	//     }
	//     return this.setState({ name: value, validName: false });
	//   }

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
					{this.state.validPassword === false ? <div>8 characters long, 1 number and 1 uppercase letter</div> : ''}

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
