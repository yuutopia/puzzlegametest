function gamekaishi() {
    gamegamen = document.getElementById('game');
    cg = gamegamen.getContext('2d');

    // 画面を消す
    cg.clearRect(0, 0, 239, 439);

    // 仮のT型のブロックを置く
    // 左上の座標
    ix = 4;
    iy = 0;

    // ブロックの色
    cg.fillStyle = '#CC00CC';
    cg.strokeStyle = '#333333';
    cg.lineWidth = 3;

    // 1つ目
    cg.fillRect(ix * 20, (iy + 1) * 20, 20, 20);
    cg.strokeRect(ix * 20, (iy + 1) * 20, 20, 20);

    // 2つ目
    cg.fillRect((ix + 1) * 20, (iy + 1) * 20, 20, 20);
    cg.strokeRect((ix + 1)* 20, (iy + 1) * 20, 20, 20);

    // 3つ目
    cg.fillRect((ix + 2) * 20, (iy + 1) * 20, 20, 20);
    cg.strokeRect((ix + 2)* 20, (iy + 1) * 20, 20, 20);
    
    // 4つ目
    cg.fillRect((ix + 1) * 20, (iy + 2) * 20, 20, 20);
    cg.strokeRect((ix + 1)* 20, (iy + 2) * 20, 20, 20);
}

function hajime() {
    // 背景のCanvasを取得
    backgamen = document.getElementById('back');
    cb = backgamen.getContext('2d');

    // 塗りを設定
    cb.fillStyle = '#CCCCCC';

    // 線を設定
    cb.strokeStyle = '#333333';
    cb.lineWidth = 3;

    // 四角形を塗る
    cb.fillRect(0, 0, 20, 20);

    // 四角形の枠線を描く
    cb.strokeRect(0, 0, 20, 20);

    // 左壁を描く
    x = 0;
    y = 0;

    for (i = 0; i < 22; i++) {
        cb.fillRect(x, y, 20, 20);
        cb.strokeRect(x, y, 20, 20);
        y = y + 20;
    }

    // 右壁を描く
    x = 220;
    y = 0;

    for (i = 0; i < 22; i++) {
        cb.fillRect(x, y, 20, 20);
        cb.strokeRect(x, y, 20, 20);
        y = y + 20;
    }

    // 下壁を描く
    x = 0;
    y = 420;

    for (i = 0; i < 22; i++) {
        cb.fillRect(x, y, 20, 20);
        cb.strokeRect(x, y, 20, 20);
        x = x + 20;
    }
}