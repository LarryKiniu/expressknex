module.exports ={
    client: 'mysql2', // your database driver
    connection: {
      host : 'localhost', //your database server
      user : 'root', //your database user
      password : 'root123#@!', //your database password
      database : 'expess-knex', // your database name
      charset: 'utf8',
      port: 3306, // your database port
      ssl: false
    },
    migrations: {
      tableName: 'migrations', //the table name to keep track of your migrations
    }
  };