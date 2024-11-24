import { Router } from "express";
import { authorize } from "../middlewares/auth.mjs";
import User from "../mongoose/schemas/user.mjs";
import usersController from "../controllers/users.mjs";

const router = Router();

router.get('/', authorize({ isAdmin: true }), usersController.getAll);
router.post('/:id/block', authorize({ isAdmin: true }), usersController.blockUser);
router.post('/:id/unblock', authorize({ isAdmin: true }), usersController.unblockUser);
router.delete('/:id', authorize({ isSuperAdmin: true }), usersController.remove);


export default router;