import { Router } from "express";

import { createUser } from "../controllers/authControllers.js";

const router = Router();

router.post('/', createUser);

export default router