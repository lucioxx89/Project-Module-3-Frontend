import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import { withAuth } from '../providers/AuthProvider';
import '../SmartPocketStyle.css';
import Background from '../Logo/istockphoto-1214054918-612x612.jpeg';

class Home extends Component {
	render() {
		return (
			<div>
				<Navbar></Navbar>

				<h3>Welcome {this.props.user.username}</h3>
				<h4>Start managing your transactions!!</h4>

				<img className="background" src={Background} alt="Logo" />
			</div>
		);
	}
}

export default withAuth(Home);
