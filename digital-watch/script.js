function formatTime(time) {

    return time < 10 ? "0" + time : time

    /* a expressão: time < 10 ? "0" + time : time  significa:
    time é menor que 10? se sim o retorno será: "0" + time : senão o retorno será somente o time 
    (time é o parametro que representa as variáveis horas, minutos e segundos) */
    
}


function VerHoras() {
    var data = new Date()
    var horas = data.getHours()
    var minutos = data.getMinutes()
    var segundos = data.getSeconds()
    var divH = document.getElementById("h")
    var divM = document.getElementById("min")
    var divS = document.getElementById("seg")
    divH.innerHTML = `${formatTime(horas)}`
    divM.innerHTML = `${formatTime(minutos)}`
    divS.innerHTML = `${formatTime(segundos)}`
  
}
/*   O setInterval serve para executar uma função ou instrução 
    várias vezes em um determinado intervalo de tempo.

         A sua sintaxe é:

     setInterval(funcao, tempo)

    Isto significa que a função "funcao" será executada assim cada vez que se atingir o determinado tempo. 
    O tempo padrão é dado por milésimos por segundo, ou seja, 1 segundo equivale a 1000 milésimos. */

setInterval(VerHoras, 1000)

   