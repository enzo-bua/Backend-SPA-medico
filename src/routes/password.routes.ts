import { Router } from "express";
import { createPassword, getPassword } from "../controllers/password.controllers";
const router = Router()

router.get('/password', getPassword)
router.post('/addPassword', createPassword)

export default router;