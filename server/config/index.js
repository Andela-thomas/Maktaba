var envVars = {
  port: process.env.PORT || 8080,
  secretKey: process.env.EXPRESS_SESSION_KEY,
  db: process.env.DATABASE_URL
};

module.exports = {
  development: envVars,
  staging: envVars,
  production: envVars,
  test: envVars
};
