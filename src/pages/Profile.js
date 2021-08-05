import React, { Component } from 'react';
import AuthBar from '../components/AuthBar';
import Navbar from '../components/Navbar';

class Profile extends Component {
	render() {
		return (
			<div>
				<Navbar></Navbar>

				<AuthBar></AuthBar>
			</div>
		);
	}
}

export default Profile;
