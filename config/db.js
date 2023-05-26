module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "",
    DB: "online_tournament_v2",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
