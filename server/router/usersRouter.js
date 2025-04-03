import { Router } from "express";

import { fetchUsers } from "../controllers/userControllers.js";

const router = Router();

router.get('/', fetchUsers);

export default router