const fs = require('fs');
const express = require('express');
const teamsRouter = express.Router();

// http://localhost:3000/teams
teamsRouter.get('/', (req, res) => {
    res.end(fs.readFileSync(`./data/teams.json`));
});

module.exports = teamsRouter;