let stipendiAzienda =
{
    pippo: 1000,
    Pluto: 1500
};

function stampaStipendi(stipendiAzienda) {
    let str = "<ul>";
    for (let dipendente in stipendiAzienda) {
        str += "<li>" + dipendente + ": " + stipendiAzienda[dipendente] + "</li>"
    }
    str += "</ul>";
    return str;
}

function totaleStipendi(stipendiAzienda) {
    let totale = 0;
    for (let dipendente in stipendiAzienda) {
        totale += stipendiAzienda[dipendente];
    }
    return totale;
}

function addAttributo() {
    let nomeDipendente = document.getElementById("nomeDipendente").value; // valore inserito nell' input con id "nomeDipendente".
    let stipendioDipendente = parseFloat(document.getElementById("stipendioDipendente").value); //valore inserito nell' input con id "stipendioDipendente".
    stipendiAzienda[nomeDipendente] = stipendioDipendente; //aggiungo all'oggetto
    document.getElementById("dipendenti").innerHTML = stampaStipendi(stipendiAzienda); //aggiorno i valori
    document.getElementById("stipendi").innerHTML = "Totale stipendi: " + totaleStipendi(stipendiAzienda);
    document.getElementById("nomeDipendente").value = ""; //campi di input puliti
    document.getElementById("stipendioDipendente").value = "";
}


document.getElementById("dipendenti").innerHTML = stampaStipendi(stipendiAzienda);
document.getElementById("stipendi").innerHTML = "Totale stipendi: " + totaleStipendi(stipendiAzienda);