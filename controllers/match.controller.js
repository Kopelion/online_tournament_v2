const db = require("../models");
const Match = db.matches;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.date_match) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const match = {
        date_match: req.body.date_match,
        time_match: req.body.time_match,
        id_player1: req.body.id_player1,
        id_player2: req.body.id_player2,
        id_player3: req.body.id_player3,
        id_player4: req.body.id_player4,
        id_player5: req.body.id_player5,
    };

    Match.create(match)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Match."
            });
        });
};

exports.findAll = (req, res) => {
    const date_match = req.query.date_match;
    var condition = date_match ? { date_match: { [Op.iLike]: `%${date_match}%` } } : null;

    Match.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Matches."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Match.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Match with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Match with id=" + id
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Match.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Match was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Match with id=${id}. Maybe Match was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Match with id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Match.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Match was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Match with id=${id}. Maybe Match was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Match with id=" + id
            });
        });
};

exports.deleteAll = (req, res) => {
    Match.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Matches were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Matches."
            });
        });
};