const config = {
    db: {
      /* don't expose password or any sensitive info, done only for demo */
      host: "ab2-db-instance1.c9xwmclqrhfi.eu-central-1.rds.amazonaws.com",
      user: "admin",
      password: "12345678",
      database: "ab2db",
    },
    listPerPage: 10,
  };
  module.exports = config;