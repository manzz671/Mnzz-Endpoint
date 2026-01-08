import express from "express"
const app = express()
app.use(express.json())
import response from "./api/quotes.js"
app.get("/", (req, res) => {
     res.send("ini bukan endpoint ya bang. tanyain deh ke developernya")
})
app.get("/api", (req, res) => {
     response(req, res, 200, "Manzz")
})
export default app;

