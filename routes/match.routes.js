const matches = require("../controllers/match.controller");
module.exports = app => {
    const matches = require("../controllers/match.controller");

    var router = require("express").Router();

    router.post("/", matches.create);
    router.get("/", matches.findAll);
    router.get("/:id", matches.findOne);
    router.put("/:id", matches.update);
    router.delete("/:id", matches.delete);
    router.delete("/", matches.deleteAll);
    app.use('/api/matches', router);
};