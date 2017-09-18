const express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  path = require("path"),
  db = require("./models"),
  Task = db.Task;

app.use("/", express.static(path.join(__dirname)));
app.use("/bootstrap", express.static(path.join(__dirname, "node_modules/bootstrap")));
app.use(bodyParser.json());

app.get("/", (req, res, next) => {
  res.sendFile("index.html");
});

app.get("/api/todo", (req, res, next) => {
  Task.findAll()
  .then(result => { res.send(result) })
  .catch(next);
});

app.post("/api/todo", (req, res, next) => {
  Task.create(req.body)
  .then(result => { res.send(result) })
  .catch(next);
});

app.delete("/api/todo/:id", (req, res, next) => {
  Task.destroy({ where: { id: req.params.id }})
  .then((result) => {
    console.log("deleting...", result)
    res.sendStatus(204)
  })
  .catch(next);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server listening on port ${port}...`);
});
