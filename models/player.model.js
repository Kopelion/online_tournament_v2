module.exports = (sequelize, Sequelize) => {
    const Player = sequelize.define("player", {
        lastname: {
            type: Sequelize.STRING
        },
        firstname: {
            type: Sequelize.STRING
        },
        patronymic: {
            type: Sequelize.STRING
        },
        age: {
            type: Sequelize.INTEGER
        },
        game_nickname: {
            type: Sequelize.STRING
        }
    });

    return Player;
};