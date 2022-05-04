const db = require('../services/db');

async function getTransactions(){
  const transacions = await db.query(
    'SELECT * FROM transactions'
  );

  return transacions
}

module.exports = {
    getTransactions
}