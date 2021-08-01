import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../AddTransactionButton.css';

class Navbar extends Component {
	render() {
		return (
			<div className="navIcon">
				{/* <Link to="/home" className="btn btn-link">
					Home
				</Link> */}
				<ul id="menu">
					<li>
						<i>
							<Link to="/home" className="fa fa-home"></Link>
						</i>
					</li>

					{/* <Link to="/transactions" className="btn btn-link">
					Transactions
				</Link> */}
					<li>
						<i>
							<Link to="/transactions" className="fa fa-credit-card"></Link>
						</i>
					</li>

					{/* <Link to="/reports" className="btn btn-link">
					Reports
				</Link> */}
					<li>
						<i>
							<Link to="/reports" className="fa fa-pie-chart"></Link>
						</i>
					</li>

					{/* <Link to="/profile" className="btn btn-link">
					Profile
				</Link> */}
					<li>
						<i>
							<Link to="/profile" className="fa fa-user"></Link>
						</i>
					</li>
				</ul>
			</div>
		);
	}
}

export default Navbar;
