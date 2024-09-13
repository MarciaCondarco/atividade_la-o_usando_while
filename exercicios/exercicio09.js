resultado=0
while(true){
    numeroEscolhido=parseInt(prompt("digite um numero"))
    if(numeroEscolhido==0){
        break
    }
    resultado = resultado + parseInt(numeroEscolhido)    
}
alert(resultado)
