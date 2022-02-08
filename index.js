const express = require("express");
const app = express();
const mongoose = require("mongoose");

const { MONGO_URI } = require("./config/keys");
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/users',require('./routes/users'));
app.use('/posts',require('./routes/posts'));


mongoose
  .connect(MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log("conectado a mongoDB con éxito"))
  .catch((err) => console.error(err));

app.listen(PORT, console.log(`Server started on port ${PORT}`));