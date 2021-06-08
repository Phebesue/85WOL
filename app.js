const Express = require('express');
const app = Express();

const controllers = require("./controllers");

app.use("/log", controllers.logController);

app.listen(3000, () =>{
    console.log(`[Server]:App is listening on 3000.`);
});