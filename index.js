import express from "express";
import connectWithDB from "./mongo.js";
import configure from "./Controllers/index.js";
import { handleError } from "./middlewares/handleError.js";
const app = express()
const port = 3000
app.use(express.json())

connectWithDB();
configure(app)
app.use(handleError)
app.listen(port, () => {
console.log("test server port - " + port)
})
