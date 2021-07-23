import React, { Component } from 'react';
import { Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import AnonRoute from './components/AnonRoute';
import Private from './pages/Private';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Transactions from './pages/Transactions';
import Reports from './pages/Reports';
import Profile from './pages/Profile';
import AddTransaction from './pages/AddTransaction';
import { withAuth } from './providers/AuthProvider';

class App extends Component {
	render() {
		const { isLoading } = this.props;
		if (isLoading) {
			return <div>loading ... </div>;
		}
		return (
			<div className="container">
				<h1>Expense Tracker</h1>

				<Navbar />
				<Switch>
					<AnonRoute path="/signup" component={Signup} />
					<AnonRoute path="/login" component={Login} />
					<PrivateRoute path="/private" component={Private} />
					<PrivateRoute path="/transactions" component={Transactions} />
					<PrivateRoute path="/reports" component={Reports} />
					<PrivateRoute path="/profile" component={Profile} />
					<PrivateRoute path="/addTransaction" component={AddTransaction} />
				</Switch>
			</div>
		);
	}
}

export default withAuth(App);
