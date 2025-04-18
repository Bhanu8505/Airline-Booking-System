import express from "express";
import {PORT} from "./config/index.js";
import apiRoutes from "./routes/index.js";

const app = express();

app.use('/api',apiRoutes);

app.listen(PORT,()=>{
    console.log(`Successfully started the server on PORT : ${PORT}`);
}); 