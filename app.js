const Express = require('express');
const app = Express();

app.use('/test', (req, res) =>{
    res.send('This is a message from the test endpoint on the server!')
});

const controllers = require("./controllers");

app.use("/log", controllers.logController);



app.listen(3000, () =>{
    console.log(`[Server]:App is listening on 3000.`);
});