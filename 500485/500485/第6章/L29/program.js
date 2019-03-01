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