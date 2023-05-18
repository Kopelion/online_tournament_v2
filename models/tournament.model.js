module.exports = (sequelize, Sequelize) => {
    const Tournament = sequelize.define("tournament", {
        name_tournament: {
            type: Sequelize.STRING
        },
        date_start: {
            type: Sequelize.DATEONLY
        },
        date_end: {
            type: Sequelize.DATEONLY
        },
        prize_fund: {
            type: Sequelize.STRING
        },
        sponsor: {
            type: Sequelize.STRING
        }
    });

    return Tournament;
};