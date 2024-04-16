import Router from "express";
import {
  createPost,
  getPostById,
  updatePost,
  deletePost,
} from "../controllers/postController.js";

const router = Router();

router.post("/", createPost);
router.get("/:postId", getPostById);
router.put("/:postId", updatePost);
router.delete("/:postId", deletePost);

export default router;
