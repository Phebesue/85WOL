const router = require("express").Router();
const { UserModel } = require("../models");
const { UniqueConstraintError } = require("sequelize/lib/errors");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  let { username, passwordhash } = req.body.user;
  try {
    const User = await UserModel.create({
      username,
      passwordhash,
    });

    let token = jwt.sign({ id: User.id }, "i_am_secret", {expiresIn: 60 * 60 * 24});

    res.status(201).json({
      message: "User sucessfully registered",
      user: User,
      sessionToken: token,
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

router.post("/login", async (req, res) => {
  let { username, passwordhash } = req.body.user;

  try {
    let loginUser = await UserModel.findOne({
      where: {
        username: username,
      },
    });

    if (loginUser) {

      let token = jwt.sign({ id: loginUser.id }, process.env.JWT_SECRET, {expiresIn: 60 * 60 * 24});

      res.status(200).json({
        user: loginUser,
        message: "User successfully logged in!",
        sessionToken: token
      });
    } else {
      res.status(4.1).json({
        message: "Login failed",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Failed to log user in",
    });
  }
});

module.exports = router;
