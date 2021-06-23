import { Router } from "express";
import { ClientControllers } from "../controllers/client.controllers";

const router = Router();

const clientController = new ClientControllers();

router.post("/client", clientController.create);
router.get("/client", clientController.index);
router.get("/client/:phone", clientController.show);

export { router };
