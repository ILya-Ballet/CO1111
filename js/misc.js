var username;

function StoreCookies()
{
    username = document.getElementById("username").value;
    document.cookie = "username=" + username;
}

function GetTHChoice()
{
    const btn0 = document.getElementById('TH0');
    const btn1 = document.getElementById('TH1');
    const btn2 = document.getElementById('TH2');

    btn0.addEventListener('click', StartTreasure(btn0.value, username));
    btn1.addEventListener('click', StartTreasure(btn1.value, username));
    btn2.addEventListener('click', StartTreasure(btn2.value, username));
}
