import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Private extends Component {
	render() {
		return (
			<div>
				<h1>Welcome username</h1>
				<button className="border border-grey-md rounded-md m-3 p-4">
					<Link to="/transactions">Transactions</Link>
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

export default Private;
