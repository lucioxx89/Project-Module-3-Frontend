import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import AuthBar from '../components/AuthBar';
import Navbar from '../components/Navbar';

class Profile extends Component {
	render() {
		return (
			<div>
				{/* <Link to="/private" className="btn btn-link">
					Home
				</Link>

				<Link to="/transactions" className="btn btn-link">
					Transactions
				</Link>

				<Link to="/reports" className="btn btn-link">
					Reports
				</Link>

				<Link to="/profile" className="btn btn-link">
					Profile
				</Link> */}
				<Navbar></Navbar>

				<h1>Profile</h1>

				<AuthBar></AuthBar>
			</div>
		);
	}
}

export default Profile;
