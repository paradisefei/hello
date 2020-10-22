#### 文字阴影

格式：`text-shadow:value`



value的值：

`color lrshadow tbshadow blur`

* color：阴影的颜色。如果不写就是文本颜色。
* lrshadow：`left right shadow`，左右阴影，如果为负数放在文本左侧，如果为正数放在文本右侧。
* tbshadow:`top bottom shadow`，上下阴影，如果为负数放在文本上面，如果为整数放在文本下边。
* blur，可选。模糊度。不写就没有模糊度。



注意：text-shadow可以一次使用多个，这样让多个效果叠加。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        
        /*酷酷的藤*/

        h1{
            text-shadow: red 5px 5px 10px,green 10px 2px 5px;
            /* color:red; */
            font-size:100px;
        }
    </style>
</head>
<body>
    <h1>绝世舞姬</h1>
</body>
</html>
```



#### 圆角属性

元素边框都是直的，现在要把它掰弯。



格式：`border-radius`，同时将角度应用在4个角落上。

单位：px ，像素。可以是`%`，按照元素宽度或高度百分比进行向内弯曲。



有些人理解这个值，它指的横向离着是多少，竖向离着是多少。



格式2：`border-radius：左上、右下     左下、右上`。

格式3：`border-radius:左上  右上、左下  右下`

格式4：`border-radius:左上 右上 右下 左下`

格式5：`border-top-left-radius`

格式5：`border-top-right-radius`

格式5：`border-bottom-left-radius`

格式5：`border-bottom-right-radius`



`border-top-left-radius: 50px;`等价于：`border-top-left-radius:50px 50px;`，第一个50px表示的是水平，第二个50px表示的是垂直。





八个值：`左上水平x 右上水平x 右下水平x  左下水平x / 左上水平y 右上水平y 右下水平y 左下水平y`



#### 盒子阴影

使用`box-shadow`来给盒子添加阴影。

value的值：

`lrshadow tbshadow blur color  [inset]`

`lrshadow`，左右阴影。负数表示在盒子左侧、正数表示在盒子右侧。

`tbshadow`，上下阴影，负数表示放在盒子上面、正数放在盒子下面。

`blur`：模糊度。

color:阴影的颜色。

`[inset]`，可选的如果加上inset的话阴影将投递在盒子内部。



盒子阴影也可以使用多个。



#### 裁剪背景

默认时背景从内容区域开始经过内边距一直延伸到边框的外边界。



`background-clip`，用来控制背景延伸到哪里。

* border-box，默认值，延伸到边框外边界。
* padding-box，延伸到内边距的外边界。
* conten-box，将背景限制元素的内容区域内。
* text，以区块的文字作为裁剪区域向外裁剪。



#### 背景粘附（CSS2）



背景图像随着文档一起滚动。



格式：`background-attachment:value`



* scroll，默认值。背景图是相对于元素自身固定，并且不随着它的内容滚动。

  使用scroll时可以对滚动的元素进行设置，背景三图不会随元素内容的滚动而滚动。

  但是在body上面设置background-attachment:scroll是一种例外。

* fixed，背景图相对于视口固定，所以页面滚动背景不动。



#### 背景图尺寸

背景图的尺寸我们可以使用background-size来进行控制。



`background-size:value`

* px，像素值。
* %，两个值 图片的宽度 图片的高度。
* contain，将背景图像等比例缩放到宽度或高度与容器的宽度高度相等，背景图始终被包含在容器内。
* cover，等比例缩放到完全覆盖容器，背景图有可能超出容器（超出就超出了不要了。）。



#### 背景定位基准

backgorund-position用来定位背景图的位置，默认时相对于padding的外边界来进行定位。



background-origin:value

* padding-box，默认值。图像的定位是在padding的外边界。
* border-box，背景图像定位的基准是在边框的左上角。
* content-box，背景图像的左上角在内容区域的左上角。



#### 滤镜

滤镜，主要用来实现图像的各种特殊效果。

格式：filter:value，任何元素都可以使用滤镜。

* `blur`，值越大越模糊。默认为0，不模糊。可以使用px或em作为单位。

* opacity，透明度。0~1，1为完全不透明。0为完全透明。

* grayscale，灰度，值为0时没有变化，值为1时完全变成灰色图像。

* invert，将元素所有的颜色做反向处理。值为0时没有变化，值为1时进行颜色的反转。

  所谓的反转就是拿255减去颜色的r、g、b的值。

* brightness，调整亮度。如果值为0那么完全为黑色，值越大亮度就会越高。

* sepia，调整元素为红褐色。值为0时没有变化为1时元素变为红褐色。



