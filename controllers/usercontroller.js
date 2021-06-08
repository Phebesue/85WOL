const router = require("express").Router();
const { UserModel } = require("../models");

router.post("/register", async (req, res) => {
  
  let { username, passwordhash } = req.body.user;

  let User = await UserModel.create({
    username,
    passwordhash,
  });

  res.status(201).json({
    message: "User sucessfully registered",
    user: User,
  });
});

module.exports = router;
