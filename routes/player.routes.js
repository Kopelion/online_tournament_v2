const players = require("../controllers/player.controller");
module.exports = app => {
    const players = require("../controllers/player.controller");

    var router = require("express").Router();

    router.post("/", players.create);
    router.get("/", players.findAll);
    router.get("/:id", players.findOne);
    router.put("/:id", players.update);
    router.delete("/:id", players.delete);
    router.delete("/", players.deleteAll);
    app.use('/api/players', router);
};