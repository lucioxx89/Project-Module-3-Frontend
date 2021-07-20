import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Reports extends Component {
	render() {
		return (
			<div>
				<h1>Reports</h1>
				<button>
					<Link to="/expenses">Expenses</Link>
				</button>
				<button>
					<Link to="/reports">Reports</Link>
				</button>
				<button>
					<Link to="/profile">Profile</Link>
				</button>
			</div>
		);
	}
}

export default Reports;
