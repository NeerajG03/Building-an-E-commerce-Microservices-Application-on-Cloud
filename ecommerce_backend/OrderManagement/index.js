const express = require("express");
const Order = require("./order");

// Constants
const PORT = 8003;
const HOST = "0.0.0.0";

// App
const app = express();
const routes = require("./routes");

app.use("/", routes);

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
