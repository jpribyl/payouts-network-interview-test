// knex requires this file to exist in order to let you do migrations, etc
// Update with your config settings.

module.exports = {
    client: "mysql",
    connection: {
    host : process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user : process.env.MYSQL_USER,
    password : process.env.MYSQL_PASSWORD,
    database : process.env.MYSQL_DATABASE
    }
};
