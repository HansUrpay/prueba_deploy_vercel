import express from "express";

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (_req, res) => {
    res.send("Hola mundo por fin desplegó el proyecto")
})

app.listen(port);

console.log(`Listen in port ${port}`);