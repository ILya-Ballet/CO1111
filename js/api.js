const APIroot = "https://codecyprus.org/th/api/";

const commands = {
    LIST: "list",
    START: "start",
    QUESTION: "qusestion",
    ANSWER: "answer",
    LOCATION: "location",
    SKIP: "skip",
    SCORE: "score",
    LEADERBOARD: "leaderboard",

}

async function ListTreasures()
{
    let response = await fetch(APIroot + commands.LIST);

    if (response.ok)
    {
        let reply = await response.json();

        document.getElementById("TH1").innerText = reply.treasureHunts[0].name;
        document.getElementById("TH2").innerText = reply.treasureHunts[1].name;
    }
    else alert("HTTP-Error: " + response.status);
}

function GetQuestion()
{
    //
}

ListTreasures();
