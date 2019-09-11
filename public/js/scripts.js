$(function() {
    let leaguePath = "leagues";
    let teamPath = "teams";

    $("#btnDataLeagues").on("click", function() {
        getLeagueData(leaguePath);
    });
    $("#btnDataTeams").on("click", function() {
        getTeamData(teamPath);
    });
});

function getLeagueData(path) {
    $.getJSON(`http://localhost:3000/${path}`, function() {})
        .done(function(data) {
            console.log(data);
            orgs = data;
            $("#listDiv").append("Organization Names");
            for (let i = 0; i < orgs.length; i++) {
                let listOption = $("<li>", { text: orgs[i].Name + ' - ' + orgs[i].Description });
                $("#listDiv").append(listOption);
            } // end of for
        })
        .fail(function() {
            console.log('Error connecting to Server.');
        });
}

function getTeamData(path) {
    $.getJSON(`http://localhost:3000/${path}`, function() {})
        .done(function(data) {
            console.log(data);
            orgs = data;
            $("#listDiv").append("Team Names");
            for (let i = 0; i < orgs.length; i++) {
                let listOption = $("<li>", { text: orgs[i].TeamName + ' - ' + orgs[i].TeamType });
                $("#listDiv").append(listOption);
            } // end of for
        })
        .fail(function() {
            console.log('Error connecting to Server.');
        });
}