const carta = prompt("Escribe el nombre de la carta que quieras revisar, tenemos: Pikachu, Venusaur, Blastoise y Charizard");

var precio = 0;
var mensaje = "Debes escoger una carta de la lista";


class Carta{
    constructor(cnombre,cprecioUSD){
        this.nombre = cnombre;
        this.precioUSD = cprecioUSD;
    }
    get precioARG(){
        return this.precioUSD * 98.21;
    }
    get precioCLP(){
        return this.precioUSD * 781.96;;
    }
}
var card = {};

const asignarPrecio = c => {
    switch (c) {
        case 'Pikachu':
            card = new Carta(carta,3.45)
            mensaje = "La carta de " + card.nombre + " tiene un valor de " + card.precioUSD + " USD";
            break;
        case 'Venusaur':
            card = new Carta(carta, 99.48)
            mensaje = "La carta de " + card.nombre + " tiene un valor de " + card.precioUSD + " USD";
            break;
        case 'Blastoise':
            card = new Carta(carta, 143.15)
            mensaje = "La carta de " + card.nombre + " tiene un valor de " + card.precioUSD + " USD";
            break;
        case 'Charizard':
            card = new Carta(carta, 353.11)
            mensaje = "La carta de " + card.nombre + " tiene un valor de " + card.precioUSD + " USD";
            break;
        default:
            break;
    }
    alert(mensaje);
};

asignarPrecio(carta);

const transformar = prompt("Si deseas transformar el valor a pesos argentinos escribe ARG, si deseas transformar a pesos chilenos escribe CLP");

if(transformar == "ARG"){
    alert("El precio de "+ card.nombre +" en pesos argentinos es de $" + card.precioARG.toFixed(2));
}else if(transformar == "CLP"){
    alert("El precio de " + card.nombre + " en pesos chilenos es de $" + card.precioCLP.toFixed(2));
}