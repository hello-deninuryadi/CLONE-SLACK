import exppress from "express";
import {ENV} from "./config/env.js";
import {connectDB} from "./config/db.js";

import dns from "node:dns/promises";
dns.setServers(["8.8.8.8", "1.1.1.1"]);



const app = exppress();


app.get("/", (req, res) => {
    res.send("Hello  World");
});



app.listen(ENV.PORT, () => {
    console.log(`Server is running on port ${ENV.PORT}`);
    connectDB();
});
