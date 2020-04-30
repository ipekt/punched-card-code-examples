import express from "express";
import morgan from "morgan";
import path from "path";

const PORT = 8082;
const HOST = "0.0.0.0";

// App
const app = express();

// Middlewares
app.use(morgan("combined"));

// Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
