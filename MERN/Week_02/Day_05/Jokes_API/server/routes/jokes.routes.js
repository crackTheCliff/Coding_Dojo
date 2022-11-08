const jokeController = require("../controllers/jokes.controller");

module.exports = app => {
    app.get("/api/jokes", jokeController.getAll);
    app.get("/api/joke/random", jokeController.getRandom);
    app.get("/api/joke/:id", jokeController.getOne);
    app.post("/api/joke/new", jokeController.create);
    app.put("/api/joke/update/:id", jokeController.update);
    app.delete("/api/joke/delete/:id", jokeController.delete);
};