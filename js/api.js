async function APIlist()
{
    const response = await fetch("https://codecyprus.org/th/api/list");
    const reply = await response.text();
    document.getElementById("list").innerText = reply;
}

APIlist();
