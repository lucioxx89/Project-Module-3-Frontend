import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { withAuth } from '../providers/AuthProvider';
import LogoApp from '../Logo/LogoApp2.png';

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
						<div className="logoApp">
							<img className="logoAppDetails" src={LogoApp} alt="logo" />
						</div>
						<br></br>

						<div className="signInButtons">
							<Link className="btn btn-outline-primary loginBtn" to="/login">
								Login
							</Link>
							<br></br>

							<Link className="btn btn-outline-primary signupBtn" to="/signup">
								Signup
							</Link>
						</div>
					</>
				)}
			</div>
		);
	}
}

export default withAuth(AuthBar);
