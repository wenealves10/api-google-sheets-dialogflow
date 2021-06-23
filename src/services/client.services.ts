import axios from "axios";
import { IClient } from "../util/clientDTO/client.dto";

class ClientServices {
	async create(client: IClient) {
		const data = { client };

		await axios.post(String(process.env.BASE_URL), data, {
			auth: {
				username: String(process.env.API_SHEET_USER),
				password: String(process.env.API_SHEET_PASSWORD),
			},
		});
	}

	async index() {
		const clients = await axios.get(String(process.env.BASE_URL), {
			auth: {
				username: String(process.env.API_SHEET_USER),
				password: String(process.env.API_SHEET_PASSWORD),
			},
		});
		return clients;
	}

	async show(phone: string) {
		const client = await axios.get(`${process.env.BASE_URL}/search`, {
			params: {
				phone,
			},
			auth: {
				username: String(process.env.API_SHEET_USER),
				password: String(process.env.API_SHEET_PASSWORD),
			},
		});

		return client;
	}
}

export { ClientServices };
