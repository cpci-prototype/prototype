const { config } = require('dotenv')

config({
      path: `./env-files/${process.env.NODE_ENV || 'development'}.env`,
})
const env = {
      NODE_ENV: process.env.NODE_ENV || 'development',
      HTTP_HOST: process.env.HTTP_HOST || '0.0.0.0',
      PORT: Number(process.env.PORT) || 3000,
      COOKIE_EXPIRATION_MS: process.env.COOKIE_EXPIRATION_MS || 300000,
      SESSION_COOKIE_NAME: process.env.SESSION_COOKIE_NAME || 'argon.sid',

      // Database connection via credentials
      DATABASE_HOST: process.env.DATABASE_HOST || '127.0.0.1',
      DATABASE_PORT: Number(process.env.DATABASE_PORT) || 1433,
      DATABASE_NAME: process.env.DATABASE_NAME || 'test',
      DATABASE_USER: process.env.DATABASE_USER || 'sa',
      DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || '123',

      DATABASE_DIALECT: process.env.DATABASE_DIALECT || 'mssql',
      DATABASE_INSTANCE: 'MSSQLSERVER',
}

module.exports = env
