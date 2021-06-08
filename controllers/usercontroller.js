const router = require("express").Router();
const { UserModel } = require("../models");

router.post("/register", async (req, res) => {
    
  UserModel.create({
    username: "username",
    passwordhash: "password",
  });
});

module.exports = router;
