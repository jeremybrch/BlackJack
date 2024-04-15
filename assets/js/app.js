
let deck         = [];
const tipos      = ['C', 'D', 'H', 'S', ];
const especiales = ['A', 'J', 'Q', 'K'];
// esta funcion crea una nueva baraja
const crearDeck  = () => {

    for(let i = 2; i <= 10; i++){
        for( let tipo of tipos ){
            deck.push( i + tipo)
        }
    }
    for(let tipo of tipos){
        for(let esp of especiales)
        deck.push( esp + tipo )
    }



    // console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );
    return deck
}

crearDeck( )


// esta funcion permite tomar una carta

const pedirCarta = () => {
    if (deck.length === 0 ) {
        throw 'No hay cartas en el mazo'
    }
    const carta = deck.pop();
    return carta; 
}

// for( let i = 0; i< 1000 ; i++ ) {
    // pedirCarta()
//}

//pedir una carta();
const valorCarta = ( carta ) => {

    
    const valor = carta.subtraing(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;

}

const valor = valorCarta(pedirCarta);
valorCarta({ valor });