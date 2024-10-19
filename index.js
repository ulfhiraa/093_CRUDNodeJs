import express from "express";
import bodyParser from "body-parser";
import mobilRoute from "./mobil.js";
import userRoute from "./user.js";

const app = express();
const PORT = 8000;

app.use(bodyParser.json());

app.use("/mobil", mobilRoute);
app.use("/user", userRoute);


app.get("/", (req, res) => { // request dan respon
    console.log(["GET ROUTE"]);
    res.send("Good Morning <3")
});

app.use(bodyParser.json());
app.listen(PORT, () => 
    console.log(
        `Server berjalan di port : http://localhost:${PORT}`)
);