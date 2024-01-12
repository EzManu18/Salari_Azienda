let stipendi_azienda =
{
    Pippo: 1000,
    Pluto: 1500,

    stipendi: function(){
        let somma = 0;
        for(let valore in stipendi_azienda){
            somma+=stipendi_azienda[valore];
        }
        return somma;
    }
};

document.write(stipendi_azienda.stipendi());