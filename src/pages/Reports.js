import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

class Reports extends Component {
	render() {
		return (
			<div>
				{/* <Link to="/transactions" className="btn btn-link">
					Transactions{' '}
				</Link>

				<Link to="/reports" className="btn btn-link">
					Reports
				</Link>

				<Link to="/profile" className="btn btn-link">
					Profile
				</Link> */}

				<Navbar></Navbar>

				<h1>Reports</h1>
			</div>
		);
	}
}

export default Reports;
