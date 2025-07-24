const express = require("express");
const app = express();
// const logger = require("./middlewares/middleware.js")
const { connection } = require("./configs/db.js");
// const { connection } = require("mongoose");
const {userRoute} = require("./routes/user.routes.js");
const { productsRoute } = require("./routes/products.route.js");


app.use(express.json())
// app.use(logger); //middleware
app.get("/", (req,res)=>{
     res.send(`<h2 style="color;blue;background-color:yellow>"Welcome to RBIENT`);
})//routes
app.use(userRoute);
app.use(productsRoute);

const PORT = 8080;

app.listen(PORT, async () => {
     try {
          console.log("DAtabase is connecting...")
          await connection
          console.log("Database is connected")
     }
     catch (error) {
          // console.log(error);
     }
     console.log(`server is running at http://localhost:${PORT}`);
})                          