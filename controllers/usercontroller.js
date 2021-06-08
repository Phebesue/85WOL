const router = require("express").Router();
const sequelize = require("../db");
const { UserModel } = require("../models");
const {UniqueConstraintError}= require("sequelize/lib/errors");

router.post("/register", async (req, res) => {
  let { username, passwordhash } = req.body.user;
  try {
    const User = await UserModel.create({
      username,
      passwordhash,
    });

    res.status(201).json({
      message: "User sucessfully registered",
      user: User,
    });
  } catch (err) {
    if (err instanceof UniqueConstraintError) {
      res.status(409).json({
        message: "Email already in use",
      });
    } else {
      res.sendStatus(500).json({
        message: "Failed to register user",
      });
    }
  }
});

module.exports = router;
