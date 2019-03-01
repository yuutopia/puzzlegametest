
var t;
function oshita(){
    youso = document.getElementById('text01'); 
    t = youso.value;

    hyouji='こんにちは'+t+'さん'

    gamenyouso = document.getElementById('gamen');
    gamenyouso.innerHTML = hyouji;
    
}

function oshit01(){
    youso = document.getElementById('checkbox01');
    a = youso.value;
    alert(a);

}