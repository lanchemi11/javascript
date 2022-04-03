window.addEventListener('load', pocetak);
var niz;
var forma = document.getElementById('forma');


function pocetak()
{
    var proizvod1 = {
        'naziv' : 'twix',
        'cena' : 60,
        'kolicina' : 3,
        'proizvodjac' : 'marbo',
        'uvoznik' : 'uvoznik doo'
    }

    var proizvod2 = {
        'naziv' : 'mars',
        'cena' : 55,
        'kolicina' : 4,
        'proizvodjac' : 'soko stark',
        'uvoznik' : 'delhaize doo'
    }

    var proizvod3 = {
        'naziv' : 'laptop',
        'cena' : 1000,
        'kolicina' : 1,
        'proizvodjac' : 'hp omen',
        'uvoznik' : 'bcgroup doo'
    }
    niz = [proizvod1,proizvod2,proizvod3];

    // console.log(proizvod1);
    // console.log(proizvod1.cena);
    console.log(niz);
    napravi_tabelu(niz);

    forma.addEventListener('submit', posalji_formu);


}

function posalji_formu(e)
{
    e.preventDefault()
    console.log('Poslata forma');
    var naziv = document.getElementById('naziv').value;
    if(!validiraj_naziv(naziv)) return;
    var cena = document.getElementById('cena').value;
    var kolicina = document.getElementById('kolicina').value;
    var proizvodjac = document.getElementById('proizvodjac').value;
    var uvoznik = document.getElementById('uvoznik').value;
    console.log(naziv,cena,kolicina,proizvodjac,uvoznik);

    console.log(e.target);
    proizvod = {
        'naziv' : naziv,
        'cena' : cena,
        'kolicina' : kolicina,
        'proizvodjac' : proizvodjac,
        'uvoznik ' : uvoznik
    }

    console.log(proizvod);
    niz.push(proizvod);
    console.log(niz);
    var tabela = document.getElementById('moja_tabela');
    console.log(tabela);
    var tr = document.createElement('tr');
    var vrednost = [naziv,cena,kolicina,proizvodjac,uvoznik];
    for(var i = 0; i  < vrednost.length; i++){
        var td = document.createElement('td');
        td.innerText = vrednost[i];
        td.className = 'sa_borderom';
        tr.appendChild(td);
    }
    tabela.appendChild(tr);
}

function napravi_tabelu(niz)
{
    console.log("Logovano iz napravi tabelu: ", niz);
    var tabela = document.createElement('table');
    var red = document.createElement('tr');
    
    
    var imena_kolona = ['Naziv', 'Cena', 'Kolicina', 'Proizvodjac', 'Uvoznik'];

    for (const naziv_kolone of imena_kolona) {
        var novi_th = document.createElement('th');
        novi_th.innerText = naziv_kolone;
        novi_th.className = 'sa_borderom';
        red.appendChild(novi_th);
    }
    tabela.appendChild(red);

    for(var i = 0; i < niz.length; i++){
        console.log('Ponavljanje: ', i);
        var trenutni_red = document.createElement('tr');
        vrednosti = [niz[i].naziv, niz[i].cena, niz[i].kolicina, niz[i].proizvodjac, niz[i].uvoznik];
        for(var j = 0; j < vrednosti.length; j++){
            var novi_td = document.createElement('td');
            novi_td.innerText = vrednosti[j];
            novi_td.className = 'sa_borderom';
            trenutni_red.appendChild(novi_td);
        }
        trenutni_red.addEventListener('click', promeni_boju);
        tabela.appendChild(trenutni_red);        
    }
    tabela.className = 'sa_borderom';
    tabela.id = 'moja_tabela';
    document.body.appendChild(tabela);
}

function promeni_boju(e)
{
    var meta = e.target;
    meta.style.backgroundColor = 'red';
}

function validiraj_naziv(naziv)
{
    var username_greska = document.getElementById('username_greska');
    if(naziv.length < 3)
    {
        username_greska.innerText = 'Ne sme biti naziv manji od 3 karaktera';
        return false;
    }
    return true;
}