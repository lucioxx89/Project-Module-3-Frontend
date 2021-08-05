import { Pie } from 'react-chartjs-2';

import React, { Component } from 'react';

class CategoryChart extends Component {
	constructor(props) {
		super(props);

		console.log('props.transactions', props.transactions);

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
		// map through categories variable and check through all transaction.categories. If category have same name, sum it then  pass function to categoryExpenses
		return categories.map((category, _index) => {
			let totalAmount = 0;

			transactions.forEach((transaction, _index) => {
				if (category === transaction.category) {
					totalAmount = totalAmount + Math.abs(transaction.amount); // Math.abs makes negative number positive to sum it in chart, usefull for future budgeting app
				}
			});

			return totalAmount;
		});
	}

	categoriesFromTransactions(transactions) {
		// list of categories. the filter it to remove duplicate
		const duplicatedArray = transactions.map((item, index) => {
			return item.category;
		});
		return duplicatedArray.filter((value, index) => duplicatedArray.indexOf(value) === index);
		// filter => if value(category) has different index of a category with the same name, false and will not add it
	}

	render() {
		return <Pie data={this.state.chartData} />;
	}
}

export default CategoryChart;
