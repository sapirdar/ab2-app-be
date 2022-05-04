const express = require('express');
const router = express.Router();
const transactions = require('../services/transactions');

/* GET programming languages. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await transactions.getTransactions());
  } catch (err) {
    console.error(`Error while getting transactions `, err.message);
    next(err);
  }
});

module.exports = router;