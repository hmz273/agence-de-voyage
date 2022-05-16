const express = require("express");
const router = express.Router();

const { register, login, deleteUser, getUsers } = require("./auth");
const { adminAuth } = require("../Middleware/auth");

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/:id").delete(adminAuth, deleteUser);
router.route("/Users").get(getUsers);

module.exports = router;
