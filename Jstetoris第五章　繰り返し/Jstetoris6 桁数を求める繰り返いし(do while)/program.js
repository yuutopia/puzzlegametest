
function keisan(){
    
    text01 = document.getElementById('text01');
    x = parseInt(text01.value);
    
    kekka = 0;

    do{
    x = x / 10;
    x = Math.floor(x);

    kekka = kekka + 1;


    } while ( x!= 0);
    
    
    alert(kekka);
    
}

