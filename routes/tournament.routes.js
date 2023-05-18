const tournaments = require("../controllers/tournament.controller");
module.exports = app => {
    const tournaments = require("../controllers/tournament.controller");

    var router = require("express").Router();

    router.post("/", tournaments.create);
    router.get("/", tournaments.findAll);
    router.get("/:id", tournaments.findOne);
    router.put("/:id", tournaments.update);
    router.delete("/:id", tournaments.delete);
    router.delete("/", tournaments.deleteAll);
    app.use('/api/tournaments', router);
};