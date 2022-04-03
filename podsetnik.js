
function funkcija()
{
    console.log("Desila se funkcija");
}

var dugme1 = document.getElementById('dugme1');
var paragraf_koji_menjam = document.getElementById('paragraf_koji_menjam');
window.addEventListener('load', pocetna_funkcija);

function pocetna_funkcija()
{
    dugme1.addEventListener('click', dabl_klik);
    var paragrafi_todo = document.getElementsByClassName('todo');
    console.log(paragrafi_todo);

    for(var i = 0; i < paragrafi_todo.length; i++){
        paragrafi_todo[i].addEventListener('click', tooglePrecrtaj);
    }
}

function tooglePrecrtaj(e)
{
    // console.log('Kliknuto na paragraf tood');
    var meta_dogadjaja = e.target;
    console.log(meta_dogadjaja);
    console.log(meta_dogadjaja.style.textDecoration);
    if(meta_dogadjaja.style.textDecoration == 'none')
    {
        meta_dogadjaja.style.textDecoration = 'overline';
    }
    else{
        meta_dogadjaja.style.textDecoration = 'none';
    }
}


function dabl_klik()
{
    // alert("Desio se dabl klik");
    paragraf_koji_menjam.className = 'dodatna_klasa';
}