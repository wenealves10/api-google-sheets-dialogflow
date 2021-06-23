import { json, Request, Response } from "express";
import { ClientServices } from "../services/client.services";
import { IClient } from "../util/clientDTO/client.dto";

class ClientControllers {
	async create(request: Request, response: Response) {
		const dataClient = request.body as IClient;

		const client = new ClientServices();

		await client.create(dataClient);

		return response.json({ message: "created with success" });
	}

	async index(request: Request, response: Response) {
		const client = new ClientServices();

		const results = await client.index();

		await client.data();

		return response.json(results.data);
	}

	async show(request: Request, response: Response) {
		const { phone } = request.params;
		const client = new ClientServices();

		const result = await client.show(phone);

		return response.json(result.data);
	}
}

export { ClientControllers };
