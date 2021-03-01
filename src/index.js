const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT;
const messagesRouter = require("./routes/messagesRouter");

app.use(cors());
app.use(express.json());
app.use(messagesRouter);

app.listen(port, () => console.log("Server connectes, port:", port));