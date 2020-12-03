## 1. canvas基础

canvas应用

> 1. 绘制文本，<canvas>支持文本的绘制，同时可以增加色彩和动画；
> 2. 绘制图像，<canvas>支持绘制各种图和表；
> 3. 动画，<canvas>支持动画效果；
> 4. 交互，<canvas>能够对JavaScript的事件进行响应，例如用户的点击、鼠标移动，甚至触控设备上的手指移动等；
> 5. 游戏，由于<canvas>支持动画和交互，所以它能够用于游戏的开发。

Canvas绘图步骤

> 1.找到<canvas>元素:
>  var canvas = document.getElementById("myCanvas");
>
> 2.创建一个用于绘制的对象（绘图上下文）：
>  var ctx = canvas.getContext("2d");
>
> 3.描述要绘制的图形:
>  ctx.fillStyle = "#FF0000";
>
> 4.下笔：函数fillRect()会在<canvas>上绘制一个矩形，
>  ctx.fillRect(0,0,150,75);