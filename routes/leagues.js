const fs = require('fs');
const express = require('express');
const leaguesRouter = express.Router();

// http://localhost:3000/leagues
leaguesRouter.get('/', (req, res) => {
    res.end(fs.readFileSync(`./data/leagues.json`));
});

module.exports = leaguesRouter;