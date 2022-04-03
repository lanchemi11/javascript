window.addEventListener('load', init);
var brojac = 0;
var interval;
function init()
{
    interval = setInterval(otkucaj, 500);
}

function otkucaj()
{
    console.log(brojac);
    brojac++;
    prikazi_vreme(brojac);
}

function prikazi_vreme(vreme_u_sekundama)
{
    var sati = parseInt(vreme_u_sekundama / 3600);
    console.log(sati);
    var minuti = parseInt(vreme_u_sekundama % 3600 / 60);
    var sekunde = parseInt(vreme_u_sekundama % 3600 % 60);
    var vreme = `${sati}:${minuti}:${sekunde}`;
    var s = document.getElementById('sat');
    s.innerText = sati; 
    var m = document.getElementById('minut');
    m.innerText = minuti;
    var sek = document.getElementById('sekund');
    sek.innerText = sekunde;
    console.log(vreme);
}

function ugasi_stopericu()
{
    clearInterval(interval)
}

var brojac_klikova = 0;
function toggle_stoperice()
{
    if(brojac_klikova % 2 == 0)
    {
        clearInterval(interval);
    }
    else{
        interval = setInterval(otkucaj, 500);
    }
    brojac_klikova++;
}