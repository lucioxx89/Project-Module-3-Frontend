import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
	render() {
		return (
			<div>
				<Link to="/home" className="btn btn-link">
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
				</Link>
			</div>
		);
	}
}

export default Navbar;
