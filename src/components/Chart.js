import { Pie } from 'react-chartjs-2';

import React, { Component } from 'react';

// this.props.transaction.map((item, index) => {
// 	console.log('category', item);
// 	return item.category;
// });

class Chart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			chartData: {
				labels: ['Home', 'Restaurant', 'Health', 'Travel', 'Beauty', 'Supermarket'],
				datasets: [
					{
						label: 'Amount',
						data: [340, 350, 250, 50, 350, 120],
						backgroundColor: [
							'rgba(255, 99, 132, 0.6)',
							'rgba(54, 162, 235, 0.6)',
							'rgba(255, 206, 86, 0.6)',
							'rgba(75, 192, 192, 0.6)',
							'rgba(153, 102, 255, 0.6)',
							'rgba(255, 159, 64, 0.6)',
							'rgba(255, 99, 132, 0.6)',
						],
					},
				],
			},
		};
	}

	render() {
		console.log('props', this.props.transaction);
		return (
			<div>
				{/* <p>{this.props.transaction}</p> */}
				<Pie data={this.state.chartData} />
			</div>
		);
	}
}

export default Chart;

// options={{
// 	title: {
// 		display: this.props.displayTitle,
// 		text: 'Largest Cities In ' + this.props.location,
// 		fontSize: 25,
// 	},
// 	legend: {
// 		display: this.props.displayLegend,
// 		position: this.props.legendPosition,
// 	},
// }}
