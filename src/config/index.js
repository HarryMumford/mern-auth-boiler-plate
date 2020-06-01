export default {
  PORT: process.env.PORT || 8000,
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost/bar-dice-db',
  JWT_SECRET: process.env.JWT_SECRET || 'myJwtSecret',
}
