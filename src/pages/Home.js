import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { withAuth } from '../providers/AuthProvider';

class Home extends Component {
	render() {
		return (
			<div>
				<Navbar></Navbar>

				<h1>Welcome {this.props.user.username}</h1>
				<p>Go to transactons and check what you have spent so far</p>

				{/* <button>
					<Link to="/transactions">Transactions</Link>
				</button>
				<button>
					<Link to="/reports">Reports</Link>
				</button>
				<button>
					<Link to="/profile">Profile</Link>
				</button> */}
			</div>
		);
	}
}

export default withAuth(Home);
