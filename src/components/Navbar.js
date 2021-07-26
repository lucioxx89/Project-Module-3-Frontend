import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { withAuth } from '../providers/AuthProvider';

class Navbar extends Component {
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
						<Link to="/login">Login</Link>

						<Link to="/signup">Signup</Link>
					</>
				)}
			</div>
		);
	}
}

export default withAuth(Navbar);
