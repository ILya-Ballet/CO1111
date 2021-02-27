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

function GetNickname()
{
    //
}

async function ListTreasures()
{
    let response = await fetch(APIroot + commands.LIST);

    if (!response.ok)
    {
        alert("HTTP-Error: " + response.status);
        return 0;
    }

    let reply = await response.json();

    document.getElementById("TH1").innerText = reply.treasureHunts[0].name;
    document.getElementById("TH2").innerText = reply.treasureHunts[1].name;
}

async function StartTreasure()
{
    let response = await fetch(APIroot + commands.START);

    if (!response.ok)
    {
        alert("HTTP-Error: " + response.status);
        return 0;
    }
}

ListTreasures();
