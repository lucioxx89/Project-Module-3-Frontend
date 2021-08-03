import { Doughnut } from 'react-chartjs-2';

import React, { Component } from 'react';

// this.props.transaction.map((item, index) => {
// 	console.log('category', item);
// 	return item.category;
// });

class CategorySpendingChart extends Component {
	constructor(props) {
		super(props);

		console.log('lalalala', props.transactions);

		this.state = {
			chartData: this.computeChartData(props.transactions),
		};
	}

	computeChartData(transactions) {
		const categories = this.categoriesFromTransactions(transactions);
		const categoryExpenses = this.categoryExpenses(categories, transactions);

		return {
			labels: categories,
			datasets: [
				{
					label: 'Amount',
					data: categoryExpenses,
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
		};
	}

	categoryExpenses(categories, transactions) {
		return categories.map((category, _index) => {
			let totalAmount = 0;

			transactions.forEach((transaction, _index) => {
				if (category === transaction.category) {
					totalAmount = totalAmount + Math.abs(transaction.amount);
				}
			});

			return totalAmount;
		});
	}

	categoriesFromTransactions(transactions) {
		// list of categories, make sure not duplicated
		const duplicatedArray = transactions.map((item, index) => {
			return item.category;
		});
		return duplicatedArray.filter((value, index) => duplicatedArray.indexOf(value) === index);
	}

	render() {
		return <Doughnut data={this.state.chartData} />;
	}
}

export default CategorySpendingChart;

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
