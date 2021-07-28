import axios from 'axios';

class TransactionsApiClient {
	constructor() {
		this.transactionsApiClient = axios.create({
			baseURL: process.env.REACT_APP_API_URI,
			withCredentials: true,
		});
	}

	getAllTransactions() {
		return this.transactionsApiClient.get('/transactions').then(response => response.data);
	}

	getOneTransaction(id) {
		return this.transactionsApiClient.get(`/transactions/${id}`).then(response => response.data);
	}

	createTransaction(body) {
		const { date, payee, description, category, amount } = body;
		return this.transactionsApiClient
			.post('/transactions', { date, payee, description, category, amount })
			.then(response => response.data);
	}

	deleteTransaction(id) {
		return this.transactionsApiClient.delete(`/transactions/${id}`).then(response => response.data);
	}

	editTransaction(id, body) {
		const { date, payee, description, category, amount } = body;
		return this.transactionsApiClient
			.put(`/transactions/${id}`, { date, payee, description, category, amount })
			.then(response => response.data);
	}
}

const transactionsApiClient = new TransactionsApiClient();

export default transactionsApiClient;
