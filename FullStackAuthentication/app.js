import morgan from "morgan";
import express from "express"
import Routes from "../FullStackAuthentication/routes/index.js";

const app = express();
const cors = require("cors");

// middlewares
app.use(cors());
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({extended:false}));

// routes
app.use("api/v1",Routes)

export default app;
