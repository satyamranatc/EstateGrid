import express from "express";
import cors from "cors";
import "dotenv/config"

import ConnectDB from "./Config/db.js";

import StateRoutes from "./Routes/State.routes.js";
// import CityRoutes from "./Routes/CityRoutes.js";
// import PropertyRoutes from "./Routes/PropertyRoutes.js";

const app = express();
let PORT = process.env.PORT || 5500;

// ? Middleware
app.use(cors());
app.use(express.json());

//? Connect to DB:
ConnectDB();


// ? Routes

app.get("/", (req,res)=>{
    res.send("Hello from EstateGrid")
});


app.use("/api/state", StateRoutes);
// app.use("/api/cities", CityRoutes);
// app.use("/api/properties", PropertyRoutes);


//? Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


