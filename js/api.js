const APIdomain = "https://codecyprus.org/th/api/";

async function ListTreasures()
{
    let response = await fetch(APIdomain + "list");

    if (response.ok)
    {
        let reply = await response.json();

        document.getElementById("TH1").innerText = reply.treasureHunts[0].name;
        document.getElementById("TH2").innerText = reply.treasureHunts[1].name;
    }
    else alert("HTTP-Error: " + response.status);
}

ListTreasures();
