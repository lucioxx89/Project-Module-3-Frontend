import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Reports extends Component {
	render() {
		return (
			<div>
				<Link to="/transactions" className="btn btn-link">
					Transactions{' '}
				</Link>

				<Link to="/reports" className="btn btn-link">
					Reports
				</Link>

				<Link to="/profile" className="btn btn-link">
					Profile
				</Link>

				<h1>Reports</h1>
			</div>
		);
	}
}

export default Reports;
