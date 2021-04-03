const botonNumeros = document.getElementsByName('data-number');
//console.log(botonNumeros);

const botonOperaciones = document.getElementsByName('operaciones');
const botonIgual = document.getElementsByName('igual') [0];
const botonEliminar = document.getElementsByName('eliminar') [0];
//console.log (botonIgual);
var result = document.getElementById('result');

var operActual = '';
var operAnterior = '';
var operacion = undefined;

botonNumeros.forEach(function(boton){
     boton.addEventListener('click', function(){
        // alert(boton.innerText);
        agregarNumero(boton.innerText)
     })
});

botonOperaciones.forEach(function(boton){
    boton.addEventListener('click', function(){
        seleccionarOperacion(boton.innerText)

    })
});

botonIgual.addEventListener ('click', function(){
        calcular();
        actualizarDisplay();
});

botonEliminar.addEventListener('click', function(){
    limpiar();
    actualizarDisplay();

});

function seleccionarOperacion(op){
    if(operActual === '') return;
    if(operAnterior !== ''){
        calcular()
    }

    operacion = op.toString();
    operAnterior = operActual;
    operActual = '';
}

function calcular(){
    var calculo;
    const anterior = parseFloat(operAnterior);
    const actual = parseFloat(operActual);
    if(isNaN(anterior) || isNaN(actual)) return;
    
    switch(operacion){
        case '+':
            calculo = anterior + actual;
            break;
        case '-':
            calculo = anterior - actual;
            break;
        case 'x':
            calculo = anterior * actual;
            break;
        case '/':
            calculo = anterior / actual;
            break;
        default:
            return;

    }
    operActual = calculo;
    operacion = undefined;
    operAnterior = '';

}

function agregarNumero(num){
    operActual = operActual.toString() + num.toString();
    actualizarDisplay();
}

function limpiar(){
    operActual = '';
    operAnterior = '';
    operacion = undefined;

}

function actualizarDisplay(){
    result.value = operActual;

}

limpiar();