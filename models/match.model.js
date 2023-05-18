module.exports = (sequelize, Sequelize) => {
    const Match = sequelize.define("match", {
        date_match: {
            type: Sequelize.DATEONLY
        },
        time_match: {
            type: Sequelize.TIME
        },
        id_player1: {
            type: Sequelize.INTEGER
        },
        id_player2: {
            type: Sequelize.INTEGER
        },
        id_player3: {
            type: Sequelize.INTEGER
        },
        id_player4: {
            type: Sequelize.INTEGER
        },
        id_player5: {
            type: Sequelize.INTEGER
        }
    });

    return Match;
};