const Sequelize = require("sequelize"),
  db = new Sequelize(process.env.DATABASE_URL || "postgres://localhost/to_do_react");

const Task = db.define("todo", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  }
});

db.sync({ force: true })
.then(() => {
  return Promise.all([
    Task.create({ name: "Study React" }),
    Task.create({ name: "Buy apples" })
  ])
})
.catch(err => {
  console.log(err)
});

module.exports = {
  db, 
  Task
}