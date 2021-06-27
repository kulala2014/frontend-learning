const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

let balls = [];
let count = 90;

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

//random num function
function random(min, max) {
    const num = Math.floor(Math.random() * (max - min)) + min;
    return num;
}

function randomColor() {
    const color = 'rgb(' +
        random(0, 255) + ',' +
        random(0, 255) + ',' +
        random(0, 255) + ')';
    return color;
}

//x  和y坐标--小球在屏幕上最开始的坐标。
//velX和velY 水平和垂直的速度。当我们让小球开始运动时候，没过一帧都会小球x 和y坐标加一次值。
//color：每个小球会有自己的颜色
// size:每个小球会有自己的大小---也就是小球的半径，以小苏为单位。
function Ball(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
}

//beginPath:用来声明我们现在要开始在纸上画一个图形了
//fillStyle: 定义图形的颜色－－－这个值就是小球的颜色属性
//arc:在纸上画一个圆弧。有以下参数：x 和　y是圆弧中心的坐标，小球的中心坐标；圆弧的半径：也就是小球的半径；最后的参数是开始和结束，就是圆弧对应的夹角，单位以弧度表示。这里我们用的是 0 和 2 * PI，也就是 360 度
//fill:声明我们结束了ｂｅｇｉｎｐａｔｈ开始的绘画，并且使用我们设置的颜色填充。
Ball.prototype.draw = function() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
};

Ball.prototype.update = function() {
    if ((this.x + this.size) >= width) {
        this.velX = -(this.velX);
    }

    if ((this.x - this.size) <= 0) {
        this.velX = -(this.velX);
    }

    if ((this.y + this.size) >= height) {
        this.velY = -(this.velY);
    }

    if ((this.y - this.size) <= 0) {
        this.velY = -(this.velY);
    }

    this.x += this.velX;
    this.y += this.velY;
};

Ball.prototype.collisionDetect = function() {
    for (let j = 0; j < balls.length; j++) {
        if (this !== balls[j]) {
            const dx = this.x - balls[j].x;
            const dy = this.y - balls[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < this.size + balls[j].size) {
                balls[j].color = this.color = randomColor();
            }
        }
    }
};

function initBall() {
    while (balls.length < count) {
        const size = random(10, 20);
        let ball = new Ball(
            // 为避免绘制错误，球至少离画布边缘球本身一倍宽度的距离
            random(0 + size, width - size),
            random(0 + size, height - size),
            random(-7, 7),
            random(-7, 7),
            randomColor(),
            size
        );
        balls.push(ball);
    };
}

//几乎所有的动画效果都会用到一个运动循环，也就是每一帧都自动更新视图。这是大多数游戏或者其他类似项目的基础。
//loop函数做了一下事情：
//1.将整个画布的颜色设置成半透明的黑色。然后使用fillRect()画出一个填充满整个画布的矩形（四个参数：起始坐标，和矩形的宽和高）。这是在下一个属兔画出来时用来遮住之前的试图。
//  如果不这样做的话，我们会看到一条蛇的形状而不是小球的运动。
//  用来填充的颜色设置成半透明的rgba(0,0,0,0.25)，也就是让之前的试图留下来一点点，从而让我们可以看到小球运动时的轨迹，如果将0.25修改成1，就完全看不到了
//2.遍历数组中的所有小球，并且让每一个小球都调用draw() 和update()函数来自己画出来，并且在接下来每一帧都按照其速度进行位置的更新。
//3.requestAnimationFrame()方法在运行一次函数---当一个函数正在运行时传递相同的函数名，从而每个一小段时间都会运行一次这个函数，这样我们就可以得到一个平滑的动画效果。
//主要是通过递归来完成的。
function loop() {
    ctx.fillStyle = 'rgba(0,0,0,0.25)';
    ctx.fillRect(0, 0, width, height);

    for (let i = 0; i < balls.length; i++) {
        balls[i].draw();
        balls[i].update();
        balls[i].collisionDetect();
    }

    requestAnimationFrame(loop);
}

initBall();
loop();