const AuthorController = require("../controllers/author.controller");

module.exports = function (app) {
    app.get('/authors-api', AuthorController.findAllAuthors);
    app.post("/authors-api", AuthorController.createNewAuthor);
    app.get('/authors-api/:id', AuthorController.findAuthorById);
    app.put('/authors-api/:id', AuthorController.updateAuthorById);
    app.delete("/authors-api/:id", AuthorController.deleteAuthorById);
}