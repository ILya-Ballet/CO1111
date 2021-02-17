const APIdomain = "https://codecyprus.org/th/api/";

async function ListTreasures()
{
    let response = await fetch(APIdomain + "list");

    if (response.ok)
    {
        let reply = await response.json();
        document.getElementById("list").innerText = "The list of Treasure Hunts:" + "\n\n"
        + reply.treasureHunts[0].name + "\n"
        + reply.treasureHunts[1].name + "\n\n";
    }
    else alert("HTTP-Error: " + response.status);
}

ListTreasures();
