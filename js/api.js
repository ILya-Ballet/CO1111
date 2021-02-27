let replyList;
let replyStart;
let nickname = "";
const appname = "github";
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

    replyList = await response.json();

    document.getElementById("TH1").innerText = replyList.treasureHunts[0].name;
    document.getElementById("TH2").innerText = replyList.treasureHunts[1].name;
}

async function StartTreasure(nickname, choice)
{
    let response = await fetch(APIroot + commands.START + "?player=" + nickname
        + "&app=" + appname + "&treasure-hunt-id=" + replyList.treasureHunts[choice].uuid);

    if (!response.ok)
    {
        alert("HTTP-Error: " + response.status);
        return 0;
    }

    replyStart = await response.json();
}

ListTreasures();
