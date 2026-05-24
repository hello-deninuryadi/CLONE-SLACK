import express from "express";
import {ENV} from "./config/env.js";
import {connectDB} from "./config/db.js";
import {clerkMiddleware} from "@clerk/express";
import {inngest, functions} from "./config/inngest.js";
import {serve} from "inngest/express";


import dns from "node:dns/promises";
dns.setServers(["8.8.8.8", "1.1.1.1"]);



const app = express();


//req.auth will be available in all routes after this middleware
app.use(express.json());
app.use(clerkMiddleware());


app.use("/api/inngest", serve({ client: inngest, functions }));



app.get("/", (req, res) => {
    res.send("Hello  World");
});


const startServer = async () => {
    try{
        await connectDB();
        if (ENV.NODE_ENV !== "production") {
            app.listen(ENV.PORT, () => {
                console.log(`Server is running on port ${ENV.PORT}`);
            });
        }
    }catch(err){
        console.error("Error starting server:", err);
        process.exit(1);
    }
}

startServer();

export default app;