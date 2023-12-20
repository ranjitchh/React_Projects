import app from "./app.js";
import dotevn from "dotenv";
const port = process.env.PORT | 8000;


app.listen(port, () => {
  console.log(`app running on http://localhost:${port}`);
});
