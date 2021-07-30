import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { withAuth } from '../providers/AuthProvider';

class Home extends Component {
	render() {
		return (
			<div>
				<h1>Welcome {this.props.user.username}</h1>
				{/* <button>
					<Link to="/transactions">Transactions</Link>
				</button>
				<button>
					<Link to="/reports">Reports</Link>
				</button>
				<button>
					<Link to="/profile">Profile</Link>
				</button> */}
				<Navbar></Navbar>
			</div>
		);
	}
}

export default withAuth(Home);
