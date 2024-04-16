const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const User = require("../models/user.model");
const auth = require("../middlewares/auth.middleware");

router.post("/register", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findByCredentials(username, password);
    const token = jwt.sign({ password: user.password }, "access_token");
    res.send({ user, token });
  } catch (error) {
    res.status(400).send();
  }
});

router.get("/profile", auth, async (req, res) => {
  res.send(req.user);
});

module.exports = router;
