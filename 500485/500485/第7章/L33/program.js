tblock = [
    [
        [0, 0, 0, 0],
        [1, 1, 1, 0],
        [0, 1, 0, 0],
        [0, 0, 0, 0]
    ],
    [
        [0, 1, 0, 0],
        [0, 1, 1, 0],
        [0, 1, 0, 0],
        [0, 0, 0, 0]
    ],
    [
        [0, 1, 0, 0],
        [1, 1, 1, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ],
    [
        [0, 1, 0, 0],
        [1, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 0, 0, 0]
    ]
];

function ugokasu(e) {
    // 描く先のCanvasを取得
    gamegamen = document.getElementById('game');
    cg = gamegamen.getContext('2d');

    // いまのブロックを消す
    kesu(cg, ix, iy, imuki);

    // ［→］キーが押されたかどうか
    if (e.keyCode == 39) {
        // 右に移動
        ix = ix + 1;
        // 音を鳴らす
        document.getElementById('kaiten').play();
    }

    // ［←］キーが押されたかどうか
    if (e.keyCode == 37) {
        // 左に移動
        ix = ix - 1;
        // 音を鳴らす
        document.getElementById('kaiten').play();
    }

    // ［↑］キーが押されたかどうか
    if (e.keyCode == 38) {
        // 回転する
        imuki = imuki + 1;
        if (imuki > 3) {
            imuki = 0;
        }
        // 音を鳴らす
        document.getElementById('kaiten').play();
    }

    // 新しい場所にブロックを描く
    kaku(cg, ix, iy, imuki);
}

function kesu(c, bx, by, imuki) {
    // 消す処理にする
    c.globalCompositeOperation = 'destination-out';
    // 描く（実際は消える）
    kaku(c, bx, by, imuki);
    // 元の描く処理に戻す
    c.globalCompositeOperation = 'source-over';
}

function kaku(c, bx, by, muki){
    // ブロックの色と線
    c.fillStyle = '#CC00CC';
    c.strokeStyle = '#333333';
    c.lineWidth = 3; 

    // パターンを決める
    p = tblock[muki];
    
    // パターン通りに描く
    for (n = 0; n < 4; n++) {
        for (m = 0; m < 4; m++) {
            // 描くかどうか
            if (p[n][m] == 1) {
                // ここに描く
                c.fillRect((bx + m) * 20, (by + n) * 20, 20, 20);
                c.strokeRect((bx + m) * 20, (by + n) * 20, 20, 20);
            }
        }
    }
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
    imuki = 0;

    kaku(cg, ix, iy, imuki);
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