const db = require("../models");
const Player = db.players;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.game_nickname) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const player = {
        lastname: req.body.lastname,
        firstname: req.body.firstname,
        patronymic: req.body.patronymic,
        age: req.body.age,
        game_nickname: req.body.game_nickname
    };

    Player.create(player)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Player."
            });
        });
};

exports.findAll = (req, res) => {
    const game_nickname = req.query.game_nickname;
    var condition = game_nickname ? { game_nickname: { [Op.iLike]: `%${game_nickname}%` } } : null;

    Player.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Players."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Player.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Player with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Player with id=" + id
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Player.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Player was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Player with id=${id}. Maybe Player was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Player with id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Player.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Player was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Player with id=${id}. Maybe Player was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Player with id=" + id
            });
        });
};

exports.deleteAll = (req, res) => {
    Player.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Players were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Players."
            });
        });
};