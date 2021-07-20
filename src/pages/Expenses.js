import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Expenses extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
		};
	}

	render() {
		return (
			<div>
				<h1>Recent Transactions</h1>
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

export default Expenses;
