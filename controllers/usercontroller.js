const router = require("express").Router();
const { UserModel } = require("../models");

router.post("/register", async (req, res) => {

   let{username, passwordhash}  = req.body.user;
   
  UserModel.create({
    username,
    passwordhash
  });
});

module.exports = router;
