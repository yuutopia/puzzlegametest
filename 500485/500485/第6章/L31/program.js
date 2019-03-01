function kesu(c, bx, by) {
    // 消す処理にする
    c.globalCompositeOperation = 'destination-out';
    // 描く（実際は消える）
    kaku(c, bx, by);
    // 元の描く処理に戻す
    c.globalCompositeOperation = 'source-over';
}

function kaku(c, bx, by){
    // ブロックの色と線
    c.fillStyle = '#CC00CC';
    c.strokeStyle = '#333333';
    c.lineWidth = 3; 

    // ブロックを描く
    // 1つ目
    c.fillRect(bx * 20, (by + 1) * 20, 20, 20);
    c.strokeRect(bx * 20, (by + 1) * 20, 20, 20);

    // 2つ目
    c.fillRect((bx + 1) * 20, (by + 1) * 20, 20, 20);
    c.strokeRect((bx + 1)* 20, (by + 1) * 20, 20, 20);

    // 3つ目
    c.fillRect((bx + 2) * 20, (by + 1) * 20, 20, 20);
    c.strokeRect((bx + 2)* 20, (by + 1) * 20, 20, 20);

    // 4つ目
    c.fillRect((bx + 1) * 20, (by + 2) * 20, 20, 20);
    c.strokeRect((bx + 1)* 20, (by + 2) * 20, 20, 20);
}

function gamekaishi() {
    gamegamen = document.getElementById('game');
    cg = gamegamen.getContext('2d');

    // 画面を消す
    cg.clearRect(0, 0, 239, 439);

    // 仮のT型のブロックを置く
    // 左上の座標
    ix = 4;
    iy = 0;

    kaku(cg, ix, iy);
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