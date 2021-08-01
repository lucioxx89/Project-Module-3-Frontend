import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { withAuth } from '../providers/AuthProvider';

class AuthBar extends Component {
	render() {
		const { user, isLoggedIn, logout } = this.props;
		return (
			<div>
				{isLoggedIn ? (
					<>
						<h3>Welcome {user.username}</h3>
						<button onClick={logout} className="btn btn-outline-primary">
							Logout
						</button>
					</>
				) : (
					<>
						<h1>Expense Tracking</h1>
						<Link className="btn btn-outline-primary loginBtn" to="/login">
							Login
						</Link>
						<br></br>

						<Link className="btn btn-outline-primary" to="/signup">
							Signup
						</Link>
					</>
				)}
			</div>
		);
	}
}

export default withAuth(AuthBar);
