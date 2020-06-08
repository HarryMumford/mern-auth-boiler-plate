export default {
  port: process.env.PORT,
  dbHost: process.env.MONGODB_URI,
  jwtSecret: process.env.JWT_SECRET,
  logging: true,
}
