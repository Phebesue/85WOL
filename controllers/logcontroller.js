const Express = require("express");
const router = Express.Router();
let validateJWT = require("../middleware/validate-jwt");

const { LogModel } = require("../models");

router.get("/practice", (req, res) => {
  res.send("Hey! ! This is a practice route!");
});

/*
=========================
Log Create
=========================
*/
router.post('/create', validateJWT, async (req, res) =>{
    const {description, definition, result }= req.body.log;
    const {id}= req.user;
    const logEntry = {
        description,
        definition,
        result,
        owner: id
    }
    try {
        const newLog = await LogModel.create(logEntry);
        res.status(200).json(newLog);
    }catch (err){
        res.status(500).json({error:err});
    }
    LogModel.create(logEntry)

});

router.get("/about", (req, res)=> {
    res.send("This is the about route!")
});

module.exports = router;