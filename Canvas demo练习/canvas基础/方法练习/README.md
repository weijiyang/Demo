#基本用法

        var canvas = document.getElementById("canvas")
        var ctx = canvas.getContext("2d")
        
        fillRect(x, y, width, height)
        绘制一个填充的矩形
        
        strokeRect(x, y, width, height)
        绘制一个矩形的边框
        
        clearRect(x, y, width, height)
        清除指定矩形区域，让清除部分完全透明。
        
        beginPath()
        新建一条路径，生成之后，图形绘制命令被指向到路径上生成路径。
        
        closePath()
        闭合路径之后图形绘制命令又重新指向到上下文中。
        
        stroke()
        通过线条来绘制图形轮廓。
        
        fill()
        通过填充路径的内容区域生成实心的图形。
        
        绘制形状
        moveTo(x, y)
        将笔触移动到指定的坐标x以及y上。
        
        lineTo(x, y)
        绘制一条从当前位置到指定x以及y位置的直线。
        
        arc(x, y, radius, startAngle, endAngle, anticlockwise)
        画一个以（x,y）为圆心的以radius为半径的圆弧（圆），从startAngle开始到endAngle结       束，按照anticlockwise给定的方向（默认为顺时针）来生成。
        
        arcTo(x1, y1, x2, y2, radius)
        根据给定的控制点和半径画一段圆弧，再以直线连接两个控制点。
        
        quadraticCurveTo(cp1x, cp1y, x, y)
        绘制二次贝塞尔曲线，cp1x,cp1y为一个控制点，x,y为结束点。
        
        bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
        绘制三次贝塞尔曲线，cp1x,cp1y为控制点一，cp2x,cp2y为控制点二，x,y为结束点。
        
        rect(x, y, width, height)
        绘制一个左上角坐标为（x,y），宽高为width以及height的矩形。
        
        Path2D()
        Path2D()会返回一个新初始化的Path2D对象（可能将某一个路径作为变量——创建一个它的     副本，或者将一个包含SVG path数据的字符串作为变量）。
        
        Path2D.addPath(path [, transform])​
        
        添加了一条路径到当前路径（可能添加了一个变换矩阵）。
        
        fillStyle = color
        设置图形的填充颜色。
        
        strokeStyle = color
        设置图形轮廓的颜色。
        
        注意: 一旦您设置了 strokeStyle 或者 fillStyle 的值，那么这个新值就会成为新绘制        的图形的默认值。如果你要给每个图形上不同的颜色，你需要重新设置 fillStyle 或         strokeStyle 的值。
        
        globalAlpha = transparencyValue
        这个属性影响到 canvas 里所有图形的透明度，有效的值范围是 0.0 （完全透明）到        1.0（完全不透明），默认是 1.0。
        
        globalAlpha 属性在需要绘制大量拥有相同透明度的图形时候相当高效。不过，我认为下       面的方法可操作性更强一点。
        
        lineWidth = value
        设置线条宽度。
        
        lineCap = type
        设置线条末端样式。
        
        lineJoin = type
        设定线条与线条间接合处的样式。
        
        miterLimit = value
        限制当两条线相交时交接处最大长度；所谓交接处长度（斜接长度）是指线条交接处内角     顶点到外角顶点的长度。
        
        getLineDash()
        返回一个包含当前虚线样式，长度为非负偶数的数组。
        
        setLineDash(segments)
        设置当前虚线样式。
        
        lineDashOffset = value
        设置虚线样式的起始偏移量。
        
        createLinearGradient(x1, y1, x2, y2)
        createLinearGradient 方法接受 4 个参数，表示渐变的起点 (x1,y1) 与终点 (x2,y2)。
        
        createRadialGradient(x1, y1, r1, x2, y2, r2)
        createRadialGradient 方法接受 6 个参数，前三个定义一个以 (x1,y1)        为原点，半径为 r1 的圆，后三个参数则定义另一个以 (x2,y2) 为原点，半径为 r2   的圆。
        
        gradient.addColorStop(position, color)
        addColorStop 方法接受 2 个参数，position 参数必须是一个 0.0 与 1.0      之间的数值，表示渐变中颜色所在的相对位置。例如，0.5     表示颜色会出现在正中间。color 参数必须是一个有效的 CSS 颜色值（如 #FFF， rgba(     0,0,0,1)，等等）。
        
        createPattern(image, type)
        该方法接受两个参数。Image 可以是一个 Image 对象的引用，或者另一个 canvas      对象。Type 必须是下面的字符串值之一：repeat，repeat-x，repeat-y 和 no-repeat。
        
        shadowOffsetX = float
        
        shadowOffsetX 和 shadowOffsetY 用来设定阴影在 X 和 Y 轴的延伸距离，它们是不受变       换矩阵所影响的。负值表示阴影会往上或左延伸，正值则表示会往下或右延伸，它们默认     都为 0。
        
        shadowOffsetY = float
        shadowOffsetX 和 shadowOffsetY 用来设定阴影在 X 和 Y 轴的延伸距离，它们是不受变       换矩阵所影响的。负值表示阴影会往上或左延伸，正值则表示会往下或右延伸，它们默认     都为 0。
        
        shadowBlur = float
        shadowBlur      用于设定阴影的模糊程度，其数值并不跟像素数量挂钩，也不受变换矩阵的影响，默认为     0。
        
        shadowColor = color
        shadowColor 是标准的 CSS 颜色值，用于设定阴影颜色效果，默认是全透明的黑色。
        
        fill（或者 clip和isPointinPath ）
        两个可能的值：
        -  "nonzero": non-zero winding rule, 默认值.
        -  "evenodd":  even-odd winding rule.
        
        绘制文本
        fillText(text, x, y [, maxWidth])
        在指定的(x,y)位置填充指定的文本，绘制的最大宽度是可选的.
        
        strokeText(text, x, y [, maxWidth])
        在指定的(x,y)位置绘制文本边框，绘制的最大宽度是可选的.
        
        font = value
        当前我们用来绘制文本的样式. 这个字符串使用和 CSS font 属性相同的语法.       默认的字体是 10px sans-serif。
        textAlign = value
        文本对齐选项. 可选的值包括：start, end, left, right or center. 默认值是 start。
        textBaseline = value
        基线对齐选项. 可选的值包括：top, hanging, middle, alphabetic, ideographic,       bottom。默认值是 alphabetic。
        direction = value
        文本方向。可能的值包括：ltr, rtl, inherit。默认值是 inherit。
        measureText()
        将返回一个 TextMetrics对象的宽度、所在像素，这些体现文本特性的属性。
        HTMLImageElement
        这些图片是由Image()函数构造出来的，或者任何的<img>元素
        HTMLVideoElement
        用一个HTML的 <video>元素作为你的图片源，可以从视频中抓取当前帧作为一个图像
        HTMLCanvasElement
        可以使用另一个 <canvas> 元素作为你的图片源。
        ImageBitmap
        这是一个高性能的位图，可以低延迟地绘制，它可以从上述的所有源以及其它几种源中生     成。
        drawImage(image, x, y, width, height)
        这个方法多了2个参数：width 和 height，这两个参数用来控制         当向canvas画入时应该缩放的大小
        save()restore()
        save 和 restore 方法是用来保存和恢复 canvas 状态的，都没有参数。Canvas       的状态就是当前画面应用的所有样式和变形的一个快照。
        translate(x, y)
        translate 方法接受两个参数。x 是左右偏移量，y 是上下偏移量，如右图所示。
        transform(m11, m12, m21, m22, dx, dy)       这个方法是将当前的变形矩阵乘上一个基于自身参数的矩阵，在这里我们用下面的矩阵：
        m11 m21 dx
        m12 m22 dy
        0       0       1
        如果任意一个参数是无限大，变形矩阵也必须被标记为无限大，否则会抛出异常。
        这个函数的参数各自代表如下：
        m11：水平方向的缩放
        m12：水平方向的偏移
        m21：竖直方向的偏移
        m22：竖直方向的缩放
        dx：水平方向的移动
        dy：竖直方向的移动
        setTransform(m11, m12, m21, m22, dx, dy)
        这个方法会将当前的变形矩阵重置为单位矩阵，然后用相同的参数调用 transform 方法。       如果任意一个参数是无限大，那么变形矩阵也必须被标记为无限大，否则会抛出异常。从     根本上来说，该方法是取消了当前变形,然后设置为指定的变形,一步完成。
        resetTransform()
        重置当前变形为单位矩阵，它和调用以下语句是一样的：
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        
        clip()Turns the path currently being built into the current clipping path.
        我们使用 clip() 方法来创建一个新的裁切路径。
        