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
}

const transactionsApiClient = new TransactionsApiClient();

export default transactionsApiClient;

// process.env.REACT_APP_API_URI,
