numeroEscolhido = parseInt(prompt('digite a quantidade de numeros que deseja'))

primeiroNumero=1 
segundoNumero=1
cont = 1

while(cont <=numeroEscolhido){
    if(cont==1 || cont ==2){
        console.log(1)
    }
    else{
        terceiroNumero = primeiroNumero + segundoNumero
        alert(terceiroNumero)
        primeiroNumero=segundoNumero
        segundoNumero=terceiroNumero
    }
    cont = cont + 1
}