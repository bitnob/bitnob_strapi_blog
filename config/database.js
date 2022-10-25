const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', ''),
      user: env('DATABASE_USERNAME', ''),
      password: env('DATABASE_PASSWORD', ''),
      charset: 'utf8mb4'
      
    },
    debug: false,
    pool: {
      min: 0,
      max: 10,
      idleTimeoutMillis: 30000000,
      createTimeoutMillis: 30000000,
      acquireTimeoutMillis: 30000000,
      propagateCreateError: false,
    },
  },
});
