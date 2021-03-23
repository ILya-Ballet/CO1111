var replyList;
var replyQuestion;
var session;
var progress = 0;
const appname = "github";
const APIroot = "https://codecyprus.org/th/api/"; // "test-api" or "api"

const commands = {
    LIST: "list",
    START: "start",
    QUESTION: "question",
    ANSWER: "answer",
    LOCATION: "location",
    SKIP: "skip",
    SCORE: "score",
    LEADERBOARD: "leaderboard",

}

function GetCookie(name)
{
    // Split cookie string and get all individual name=value pairs in an array
    var cookieArr = document.cookie.split(";");
    
    for(var i = 0; i < cookieArr.length; i++)
    {
        var cookiePair = cookieArr[i].split("=");

        if(name == cookiePair[0].trim())
        {
            return decodeURIComponent(cookiePair[1]);
        }
    }
    
    return null;
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

    document.getElementById("labelTH0").innerText = replyList.treasureHunts[0].name;
    document.getElementById("labelTH1").innerText = replyList.treasureHunts[1].name;
    document.getElementById("labelTH2").innerText = replyList.treasureHunts[2].name;
}

async function GetQuestion()
{
    let response = await fetch(APIroot + commands.QUESTION + "?session=" + session);

    if (!response.ok)
    {
        alert("HTTP-Error: " + response.status);
        return 0;
    }

    replyQuestion = await response.json();
    document.getElementById("Qtitle").text = replyQuestion.questionText
}

async function StartTreasure(choice, username)
{
    let response = await fetch(APIroot + commands.START + "?player="
    + username + "&app=" + appname + "&treasure-hunt-id="
    + replyList.treasureHunts[choice].uuid);

    if (!response.ok)
    {
        alert("HTTP-Error: " + response.status);
        return 0;
    }

    let replyStart = await response.json();
    session = replyStart.session;
    window.location.pathname = "../html/question.html";
    GetQuestion();
}

async function SendAnswer()
{
    //
}
