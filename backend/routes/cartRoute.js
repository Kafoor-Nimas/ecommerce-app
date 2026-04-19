import express from "express";
import {
  addToCart,
  getUserCart,
  updateCart,
} from "../controller/cartController.js";
import authUser from "../middleware/userAuth.js";

const cartRouter = express.Router();

cartRouter.post("/add",authUser, addToCart);
cartRouter.post("/update",authUser, updateCart);
cartRouter.post("/get",authUser, getUserCart);

export default cartRouter;
