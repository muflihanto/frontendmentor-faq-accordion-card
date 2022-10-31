const express = require("express");
const livereload = require("livereload");
const connectLiveReload = require("connect-livereload");
const app = express();

const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 50);
});

app.use(connectLiveReload());
app.use("/", express.static(__dirname));

const server = app.listen(5500, () => {
  console.log(`The application started on port ${server.address().port}`);
});

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "/index.html"));
// });
