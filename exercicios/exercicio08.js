cont = 1

while(cont<=50){
    if (cont==2 || cont==3|| cont==5||cont==7||cont%1==0 && cont%cont==0 && cont%2!=0 && cont%3!=0 && cont%5!=0 && cont%7!=0){
        alert(cont)
    }
    cont = cont + 1
}