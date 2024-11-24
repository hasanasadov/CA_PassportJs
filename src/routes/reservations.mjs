import { Router } from "express";
import { authorize } from "../middlewares/auth.mjs";
const router = Router();

router.get('/', authorize({}), async (req, res) => {
  res.json({ message: 'This is the reservations page' });
});

export default router;