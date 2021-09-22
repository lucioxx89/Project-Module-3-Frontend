import { Bar } from 'react-chartjs-2';

import React, { Component } from 'react';

class YearSpendingChart extends Component {
	constructor(props) {
		super(props);

		this.categoryColors = {
			Home: 'rgba(255, 99, 132, 0.6)',
			Restaurant: 'rgba(54, 162, 235, 0.6)',
			Health: 'rgba(255, 206, 86, 0.6)',
			Travel: 'rgba(75, 192, 192, 0.6)',
			Beauty: 'rgba(153, 102, 255, 0.6)',
			Supermarket: 'rgba(255, 159, 64, 0.6)',
			Other: 'rgba(255, 99, 132, 0.6)',
		};

		const startDate = new Date(new Date().getFullYear(), 0, 1);
		const endDate = new Date(new Date().getFullYear() + 1, 0, 1);
		const thisYearTransactions = props.transactions.filter((transaction, _index) => {
			const transactionDate = new Date(transaction.date);
			return transactionDate > startDate && transactionDate < endDate;
		});

		this.state = {
			chartData: this.computeChartData(thisYearTransactions),
		};
	}

	computeChartData(transactions) {
		const months = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'Oktober',
			'November',
			'December',
		];

		const categories = this.categoriesFromTransactions(transactions);
		const datasets = categories.map((category, _index) => {
			return {
				label: category,
				data: this.categoryExpensesByMonth(category, transactions),
				backgroundColor: this.categoryColors[category],
			};
		});

		return {
			labels: months,
			datasets: datasets,
		};
	}

	categoryExpensesByMonth(category, transactions) {
		const monthlyExpenses = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

		transactions.forEach((transaction, _index) => {
			if (category === transaction.category) {
				const monthIndex = new Date(transaction.date).getMonth();
				monthlyExpenses[monthIndex] = monthlyExpenses[monthIndex] + Math.abs(transaction.amount);
			}
		});

		return monthlyExpenses;
	}

	categoriesFromTransactions(transactions) {
		// list of categories, make sure not duplicated
		const duplicatedArray = transactions.map((item, index) => {
			return item.category;
		});
		return duplicatedArray.filter((value, index) => duplicatedArray.indexOf(value) === index);
	}

	render() {
		const options = {
			responsive: true,
			scales: {
				x: {
					stacked: true,
				},
				y: {
					stacked: true,
				},
			},
		};

		return <Bar data={this.state.chartData} options={options} />;
	}
}

export default YearSpendingChart;
