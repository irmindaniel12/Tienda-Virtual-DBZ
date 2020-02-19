function comprar(precio){
    if(precio==450){
        simplificar(1,precio,1);
    }
    if(precio==350){
        simplificar(2,precio,1);
    }
    if(precio==150){
        simplificar(3,precio,1);
    }
}

function tirar(precio){
    if(precio==450){
        simplificar(1,precio,2);
    }
    if(precio==350){
        simplificar(2,precio,2);
    }
    if(precio==150){
        simplificar(3,precio,2);
    }
}

function simplificar(objeto,precio,bandera){
    if(bandera==1){
        var cont = document.getElementById('Contador'+objeto).value = document.getElementById('Contador'+objeto).innerHTML; 
        var suma=parseInt(cont)+1;
        document.getElementById('Contador'+objeto).innerText=suma;
    
        var Costo=document.getElementById('Costo'+objeto);
        Costo.innerText="$"+precio*suma;
    }else{
        var cont = document.getElementById('Contador'+objeto).value = document.getElementById('Contador'+objeto).innerHTML; 
        var Costo=document.getElementById('Costo'+objeto);
        if(cont<=0){
        }else{ 
        var suma=parseInt(cont)-1; 
            document.getElementById('Contador'+objeto).innerText=suma;
            Costo.innerText="$"+precio*suma;
         if(suma==0){
            Costo.innerText="$0.00";
         }
        }
    }
}

