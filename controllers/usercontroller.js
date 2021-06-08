const router = require("express").Router();
const { UserModel } = require("../models");

router.post("/register", async (req, res) => {

   let{username, passwordhash}  = req.body.user;

  await UserModel.create({
    username,
    passwordhash
  });

  res.send("This is our user/register endpoint!");
});

module.exports = router;
