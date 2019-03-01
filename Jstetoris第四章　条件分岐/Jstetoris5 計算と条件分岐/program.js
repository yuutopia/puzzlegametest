
var t;
function keisan(){
    text01 = document.getElementById('atai1');
    text02 = document.getElementById('atai2');

    gamenhyouji = document.getElementById('gamen');
    kekka = document.getElementById('kekka');

    x = parseInt(text01.value);
    y = parseInt(text02.value);

    if (text01.value == ''){
        alert('1つ目の数値が入力されていません');
        return;

    }

    if (text02.value == ''){
        alert('2つ目の数値が入力されていません');
        return;
    
    }

    z = x + y;

    gamenhyouji.innerHTML = z;
    kekka.innerHTML = z;

    if (z > 100) {
        kekka.style.color = 'red';
    }else{
        kekka.style.color = 'green';
    }
    
}

