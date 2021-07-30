import React, { Component } from 'react';
import { Switch } from 'react-router-dom';

import AuthBar from './components/AuthBar';
import PrivateRoute from './components/PrivateRoute';
import AnonRoute from './components/AnonRoute';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Transactions from './pages/Transactions';
import Reports from './pages/Reports';
import Profile from './pages/Profile';
import AddTransaction from './pages/AddTransaction';
import EditTransaction from './pages/EditTransaction';
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

				<Switch>
					<AuthBar exact path="/" component={AuthBar} />
					<AnonRoute path="/signup" component={Signup} />
					<AnonRoute path="/login" component={Login} />
					<PrivateRoute path="/home" component={Home} />
					<PrivateRoute path="/transactions" component={Transactions} />
					<PrivateRoute path="/reports" component={Reports} />
					<PrivateRoute path="/profile" component={Profile} />
					<PrivateRoute path="/addTransaction" component={AddTransaction} />
					<PrivateRoute path="/editTransaction/:id" component={EditTransaction} />
				</Switch>
			</div>
		);
	}
}

export default withAuth(App);
