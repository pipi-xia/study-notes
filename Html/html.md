#  HTML

[TOC]

## 	1. 简介

> HTML是 HyperText Mark-up Language 的首字母简写，意思是超文本标记语言，超文本指的是超链接，标记指的是标签，是一种用来制作网页的语言，这种语言由一个个的标签组成，用这种语言制作的文件保存的是一个文本文件，文件的扩展名为html或者htm。
>

##  2. 基本结构

### 2.1文档类型

两种文xhtml 1.0和html5档的区别

> 1、文档声明和编码声明
>
> 2、html5新增了标签元素以及元素属性

### 2.2注释

<!-- 这是一段注释 -->

```html
<!DOCTYPE html>
<html lang="en">
  <!-- 声明式：lang=“en”’定义网页的语言为英文,
			定义网页的语言为英'lang="zh-CN"' -->
  <head>      
		<!-- 设置网页编码 -->
		<meta charset="utf-8" /> 
		<!-- 关键词： 是否能被搜索引擎搜到 -->
		<meta name="keywords" content="学习html" />
		<!-- 描述：当搜到本网页时，展示的简介内容... -->
		<meta name="description" content="学习html非常的好，好啊啊啊啊啊啊...." />
       	<title>网页标题</title>
  </head>
  <body>
     网页显示内容
  </body>
</html>
```

## 3. 基本标签

### 3.1标签

**块标签**

```
<div>标签 块元素，表示一块内容，没有具体的语义。
<span>标签 行内元素，表示一行中的一小段内容，没有具体的语义。
```

**含样式和语义的标签**

> em 标签 行内元素，表示语气中的强调词
> i 标签 行内元素，表示专业词汇
> b 标签 行内元素，表示文档中的关键字或者产品名
> strong标签 行内元素，表示非常重要的内容

能认识这些标签，理解文档的结构，方便网站的收录。

> - h1标签是表示标题，
> - p标签是表示段落，ul、li标签是表示列表，
> - a标签表示链接，
> - dl、dt、dd表示定义列表等，语义化的标签不多。

### 3.2 段落标签
```html
<p>------ </p> 
```
###  3.3 行标签

```html
<br/> 换行
&nbsp; 空格
```

### 3.4 字符实体

```html
<!--  在段落前想缩进两个文字的空格，使用空格的字符实体：&nbsp;   --><!-- “<” 和 “>” 的字符实体为 &lt; 和 &gt;  -->
<p>
    3 &lt; 5 <br>
    10 &gt; 5
</p>
```

### 3.5 特殊字符

在HTML页面中国呢，一些特殊的符号很难或者不方便直接使用，此时我们就可以使用下面的字符来替代。

| 特殊字符 | 描述           | 字符的代码 |
| -------- | -------------- | ---------- |
| &nbsp;   | 空格符         | \&nbsp;    |
| <        | 小于号         | \&lt;      |
| >        | 大于号         | \&gt;      |
| &        | 和号           | \&amp;     |
| ¥        | 人民币         | \&yen;     |
| ©️        | 版权           | \&copy;    |
| ®️        | 注册商标       | \&reg;     |
| &deg;    | 摄氏度         | \&deg;     |
| &plusm;  | 正负号         | \&plusm;   |
| ✖️        | 乘号           | \&times;   |
| ➗        | 除号           | \&divide;  |
| &sup2;   | 平方2（上标2） | \&sup2;    |
| &sup3;   | 立方3（上标3） | \&sup3;    |

重点记住：**空格、大于号、小于号这三个**，其余的使用很少。



## 4. 图片、路径

### 1.4.1 图像img

<img>标签上插入图片，它的常用属性有：

> -   src属性: 定义图片的引用地址
>
> -   alt属性: 定义图片加载失败时显示的文字，搜索引擎会使用这个文字收录图片、盲人读屏软件会读取这个文字让盲人识别图片，所以此属性非常重要。
>

```html
<img src="images/pic.jpg" alt="产品图片" />
```

### 1.4.2 相对路径

引用地址分为：

> ·    绝对地址：相对于磁盘的位置去定位文件的地址
>
> ·    相对地址：相对于引用文件本身去定位被引用的文件地址
>

绝对地址在整体文件迁移时会因为磁盘和顶层目录的改变而找不到文件，相对路径就没有这个问题。相对路径的定义技巧：

> - “ **./ ” 表示当前文件所在目录下，**比如：“./pic.jpg” 表示当前目录下的pic.jpg的图片，这个使用时可以省略。
>
> - **“ ../ ” 表示当前文件所在目录下的上一级目录，**比如：“../images/pic.jpg” 表示当前目录下的上一级目录下的images文件夹中的pic.jpg的图片。

### 1.4.3 链接a

> <a>标签可以在网页上定义一个链接地址，它的常用属性有：
>
> - href属性：定义跳转的地址
>
> - title属性：定义鼠标悬停时弹出的提示文字框
>
> - target属性 定义链接窗口打开的位置
>
>    target="_self" 缺省值（默认）,新页面替换原来的页面，在原来位置打开。
>
>    target="_blank" 新页面会在新开的一个浏览器窗口打开

```html
<a href="#"></a> <!--  # 表示链接到页面顶部   -->
```

## 5. 列表

### 5.1有序列表

在网页上定义一个有编号的内容列表可以用<ol>、<li>配合使用来实现，

> type=" **1 | a | A | i |I** "  规定在列表中使用的标记类型。

代码如下：

```html
<ol type="A">
    <li>列表文字一</li>
    <li>列表文字二</li>
</ol>
```

在网页上生成的列表，每条项目上会按1、2、3编号。

### 5.2 无序列表

在网页上定义一个无编号的内容列表可以用<ul>、<li>配合使用来实现，

> type="disc | circle | square"  列表图标形状

代码如下：

```html
<ul type="circle"> 
    <li><a href="#">新闻标题一</a></li> 
    <li><a href="#">新闻标题二</a></li>
</ul>
```

每条项目上生成的列表会有一个小图标，小图标在不同浏览器上显示效果不同，所以一般会用样式去掉默认的小图标，如果需要图标，可以用样式自定义图标，从而达到在不同浏览器上显示的效果相同,实际开发中一般用这种列表。

### 5.3定义列表

定义列表通常用于术语的定义。<dl>标签表示列表的整体。<dt>标签定义术语的题目。<dd>标签是术语的解释。一个<dl>中可以有多个题目和解释，代码如下：

```html
<dl>
    <dt>html</dt>
    <dd>负责页面的结构</dd>
    <dt>css</dt>
    <dd>负责页面的表现</dd>
    <dt>javascript</dt>
    <dd>负责页面的行为</dd>
</dl> 
```

## 6. 表单

表单用于搜集不同类型的用户输入，表单由不同类型的标签组成，相关标签及属性

### 6.1form 定义整体的表单区域

```html
<form action="url地址" method="提交方式" name="表单域名称">
    各种表单元素控件
</form>
```

**常用属性**：

| 属性   | 属性值   | 作用                                                 |
| ------ | -------- | ---------------------------------------------------- |
| action | url地址  | 用于指定接受并处理表数据的服务器的URL地址。          |
| method | get/post | 用于设置表单数据的提交方式，其取值为get或post。      |
| name   | 名称     | 用于指定表单的名称，以区分同一个页面中的多个表单域。 |

- 在我们写表单元素之前，应该有个表单域把它们进行包含。
- 表单域是form标签。

### 6.2 表单控件（表单元素）

在表单域中可以定义各种表单元素，这些表单元素就是允许用户在表单出入或者选择的内容控件。

- input输入表单元素
- select下拉表单元素
- textarea文本域元素

### 6.3 input通用表单元素

```
<input type="属性值" />
```

type</strong>属性的属性值及其描述如下：

| 属性值   | 描述                                                         |
| -------- | ------------------------------------------------------------ |
| button   | 定义可点击按钮（多数情况下，用于通过javaScript启动脚本）。   |
| checkbox | 定义复选框。选中状态checked="checked"                        |
| file     | 定义输入字段和“浏览”按钮，供文件上传。                       |
| hidden   | 定义隐藏的输入字段。                                         |
| image    | 定义图像形式的提交按钮。                                     |
| password | 定义密码字段，该字段中的字符被掩码。                         |
| radio    | 定义单选按钮。                                               |
| reset    | 定义重置按钮。重置按钮会清除表单中的所有数据。               |
| submit   | 定义提交按钮。提交按钮会把表单数据发送到服务器。             |
| text     | 定义单行的输入字段，用户可以在其中输入文本。默认宽度为20个字符。 |


除type属性外，`<input>`标签还有其他很多属性，其常用属性如下：

| 属性      | 属性值       | 描述                                                  |
| --------- | ------------ | ----------------------------------------------------- |
| name      | 由用户自定义 | 定义input元素的名称，提交数据时的键名。               |
| value     | 由用户自定义 | 规定input元素的值。                                   |
| checkbox  | checked      | 规定此input元素首次加载时应被选中。                   |
| maxlength | 正整数       | 规定输入字段中的字符的最大长度。maxlength="n"限制个数 |

- name和value是每个表单元素都有的属性值主要给后台人员使用。
- name表单元素的名字，要求**单选按钮和复选框要有相同的name值**。
- **checked属性主要针对单选按钮和复选框**，主要作用一打开页面，就要可以默认选中某个表单元素。
- maxlength是用户可以在表单元素输入的最大字符 一般较少使用。

### 6.4 lable标签

<strong>`<label>`</strong>标签为input元素定义标注（**标签**）。
`<label>`标签用于绑定一个表单元素，当点击`<label>`标签内的文本时，浏览器就会自动将焦点（光标）转到或者选择对应的表单元素上，用来增加用户体验。
**语法**：

```
<label for="sex">男</label>
<input type="radio" name="sex" id="sex"/>
```

核心：`<label>`标签的**for属性**对应与相关元素的**id属性相同**。

### 6.5 select下拉表单元素

使用场景：在页面中，如果有多个选项让用户选择，并且想要节约页面控件时，我们可以使用`<select>`标签控件定义**下拉列表**。

语法：

```
<select>
<option>选项1</option>
    <option>选项2</option>
    <option>选项3</option>    
</select>
```

- `<select>`中至少包含一对`<option>`。
- 在`<option>`中定义selected="selected"时，当前项即为默认选中项。

### 6.6 textarea文本域元素

使用场景：当用户输入内容较多的情况下，我们就不能使用文本框表单了，此时我们可以使用`<textarea>`标签。
在表单元素中，`<textarea`标签是用于定义多行文本输入的控件。
使用多行文本输入控件，可以输入更多的文字，该控件常见于留言板，评论。
语法：

```
<textarea rows="3" cols="20">
    文本内容cols="x" ，rows="y" 行数和列数
</textarea>
```

- 通过`<textarea>`标签可以轻松地创建多行文本输入框。
- cols="每行地字符数"，rows=“显示的行数”，**实际开发不会使用，都是CSS来改变大小**。

注册表单实例：

```html
<form action="http://www..." method="get">
    <label>姓名：</label><input type="text" name="username" />
</p>
<!-- 语义化表单-->
	<fieldset>
	  <legend>用户信息</legend>
		Helo<input />
		Helo<input />
	</fieldset>
<p>
<label>密码：</label><input type="password" name="password" />
</p>
<p>
<label>性别：</label>
<input type="radio" name="gender" value="0" /> 男
<input type="radio" name="gender" value="1" /> 女
</p>
<p>
<label>爱好：</label>
<input type="checkbox" name="like" value="sing" /> 唱歌
<input type="checkbox" name="like" value="run" /> 跑步
<input type="checkbox" name="like" value="swiming" /> 游泳
</p>
<p>
<label>照片：</label>
<input type="file" name="person_pic">
</p>
<p>
    <label>个人描述：</label   
    <textarea name="about"></textarea>
 </p>
<label>籍贯：</label>
<select name="site">
    <option value="0">北京</option>
      <option value="1">上海</option>
      <option value="2">广州</option>
      <option value="3">深圳</option>
    </select>
</p>
<p>
<input type="submit" name="" value="提交">
    <!-- input类型为submit定义提交按钮 
   还可以用图片控件代替submit按钮提交，一般会导致提交两次，不建议使用。如：
   <input type="image" src="xxx.gif">-->
<input type="reset" name="" value="重置">
</p>
</form></p>
```

## 7. 表格

> ​										**table 》tr  》 td（td头单元）** 
>
> 1、<table>标签：声明一个表格，它的常用属性如下：
>
> -   border="1px",设置表格的边框。
>
> -   cellpadding，设置单元格内容与边框的距离。
>
> -   cellspacing，设置单元格与单元格之间的距离。
>
> - align：设置整体表格相对于浏览器窗口的水平对齐方式,
>
>   ​			设置值有：left | center | right
>
> 2、<tr>标签：定义表格中的一行
>
> 3、<td>标签：定义一行中的一个单元格，th表示表头单元格，td代表普通单元格，它们的常用属性如下：
>
> - align ：水平移动，设置单元格中内容的水平对齐方式, 
>
>   ​			align=left | center | right
>
> - valign ：垂直移动，设置单元格中内容的垂直对齐方式，
>
>   ​			valign="top | middle | bottom"
>
> -    colspan ：跨行，设置单元格水平合并，设置值colspan="n"
>
> -    rowspan ：跨列，设置单元格垂直合并，设置值rowspan="n"
>

```html
<table border="1px" >
    <!--表格table，行tr  ，列 td -->
    <tr align="right">
        <td rowspan="2">1-1</td>
        <td colspan="2" align="center">a</td>			
    </tr>		
    <tr>
        <td valign="middle">2-2</td>
        <td>2-3</td>
    </tr>
    <tr>
        <td>3-1</td>
        <td>3-2</td>
        <td  align="center">c</td>				
    </tr>	
</table>
```



## 8.页面布局

布局也可以叫做排版，它指的是把文字和图片等元素按照我们的意愿有机地排列在页面上，布局的方式分为两种：

> 1、table布局：通过table元素将页面空间划分成若干个单元格，将文字或图片等元素放入单元格中，隐藏表格的边框，从而实现布局。这种布局方式也叫传统布局，目前主要使用在EDM(广告邮件中的页面)中，主流的布局方式不用这种。
>
> 2、HTML+CSS布局(DIV+CSS)：主要通过CSS样式设置来布局文字或图片等元素，需要用到CSS盒子模型、盒子类型、CSS浮动、CSS定位、CSS背景图定位等知识来布局，它比传统布局要复杂，目前是主流的布局方式。

table来做整体页面的布局，布局的技巧归纳为如下几点：

> 1、按照设计图的尺寸设置表格的宽高以及单元格的宽高。
>
> 2、将表格border、cellpadding、cellspacing全部设置为0，表格的边框和间距就不占有页面空间，它只起到划分空间的作用。
>
> 3、针对局部复杂的布局，在单元格里面再嵌套表格，嵌套表格划分局部的空间。
>
> 4、单元格中的元素或者嵌套的表格用align和valign设置对齐方式
>
> 5、通过属性或者css样式设置单元格中元素的样式

## 9. 新增标签

### 9.1 音频audio

**audio常用的控制函数：**

> 1. `load()：加载`
> 2. `play()：播放`
> 3. `pause()：暂停`
> 4. canPlayType(obj)：测试是否支持给定的Mini类型的文件
> 5. canplay() 当异步视频加载完毕时

**只读的媒体属性：**

> 1. duration：获取媒体文件的播放时长，以s为单位，如果无法获取，则为NaN
>
> 2. paused：如果媒体文件被暂停，则返回true，否则返回false
>
> 3. ended ：当结束播放时，则返回true
>
> 4. startTime：返回起始播放时间
>
> 5. error：发生了错误时，返回错误代码
>
>    - `1 = MEDIA_ERR_ABORTED 取回过程被用户终止`
>    - `2= MEDIA_ERR_NETWORK当下载时发生错误`
>    - `3 = MEDIA_ERR_decode 当解码时发生错误`
>    - `4 = MEDIA_ERR_src_not_supported 媒体不可用或者不支持音频、视频`
>
> 6. currentSrc：以字符串形式返回正在播放或已加载的文件
>
> 7. NetworkState属性返回视频当前的网络状态（activity）
>
>    4种错误状态：
>
>    - `0 = NETWORK_EMPTY 视频尚未初始化`
>    - `1 = NETWORK_IDLE 视频是活动的且以选取资源，但并未使用网络`
>    - `2 = NETWORK_loading 浏览器正在下载数据`
>    - `3 = NETWORK_NO_SOURCE 未找到视频来源`

**可脚本控制的属性值：**

> 1. src：指定音频的文件位置
> 2. autoplay:是否自动播放
> 3. loop: 是否循环播放
> 4. preload：是否预加载
> 5. currentTime：从开始播放到目前所花的时间（秒s）
> 6. controls：显示或者隐藏用户控制界面
> 7. `volume`：音量大小,从0.0至1.0之间
> 8. muted：设置是否静音
> 9. autobuffer：是否进行缓冲加载

使用方法：

```html
<audio src=''  controls='controls'  loop="loop" preload="auto"></audio>
```

```html
<audio controls autoplay ><!-- controls='controls’进度条-->
    <source src="resources/恭喜发财.mp3" type="audio/mpeg" />
    <source src="resources/恭喜发财.ogg" type="audio/ogg" />
</audio>
```

### 9.2 视频video

常见属性：

> - controls：设置或返回音频/视频是否显示控件（比如播放/暂停等）
> - autoplay：视频在就绪后马上播放
> - muted：设置值后，，音频会初始化为静音
> - poster：一个海波帧的url,用于用于在视频或者调帧之前展示
> - webkit-playsinline=”true” playsinline=”true” 视频初始化播放是否全屏播放

```html
<video>:每一个<video>对应一个视频文件； 
    如果考虑浏览器兼容问题，则可以编写多个视频资源，然后嵌套在一个<video>中
    <video controls >  
        <source src="resources/4.第一个MQ案例.webm"  type="video/webm"/>
        <source src="resources/4.第一个MQ案例.mp4" type="webm/mp4" />			
    </video>	
```

### 9.3 画板canvas

> HTML5 的 canvas 元素使用 JavaScript 在网页上绘制图像。画布是一个矩形区域，您可以控制其每一像素。canvas 拥有多种绘制路径、矩形、圆形、字符以及添加图像的方法。---- [canvas介绍](https://blog.csdn.net/u012468376/article/details/73350998?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522160584170019724839224861%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=160584170019724839224861&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~top_click~default-2-73350998.pc_first_rank_v2_rank_v28&utm_term=canvas&spm=1018.2118.3001.4449)--------

如何通过 canvas 元素来显示一个红色的矩形：

```html
<canvas id="myCanvas"></canvas>
<script type="text/javascript">
    var canvas=document.getElementById('myCanvas');
    var ctx=canvas.getContext('2d');
    ctx.fillStyle='#FF0000';
    ctx.fillRect(0,0,80,100);
</script>
```

### 9.4. 内联框架iframe

常用属性：

> 1.  src     -- 引用链接地址
> 2. width   -- 框架的宽度
> 3.  height  -- 框架的高度
> 4.  frameborder   -- 定义了内容页的边框,取值为(1|0),缺省值为1
> 5.  marginwidth   -- 定义了框架中HTML文件显示的左右边界的宽度,缺省值由浏览器决定
> 6.  marginheight   -- 定义了框架中HTML文件显示的上下边界的矿度,缺省值由浏览器决定
> 7.  scrolling   -- 设置或获取框架是否可被滚动。
>    - auto＝自动调整
>    - yes ＝有滚动条
>    -  no ＝无滚动条

```html
<a href="https://www.baidu.com"  target="my_iframe">点我进百度</a>
<a href="https://www.163.com"  target="my_iframe">点我进网易</a>
<a href="resources/b.html"  target="my_iframe">点我进b.html</a>
---
<iframe src="https://www.baidu.com" name="my_iframe" scrolling="0" marginheight="0" frameborder="0" scrolling="no" vspace="0" ></iframe> 
<!--  iframe的name值：把当前a的href值赋值给 iframe的src值  -->
```

## 10. 新增

###  10.1语义标签

> 1、<header> 页面头部、页眉
>  2、<nav> 页面导航
>  3、<article> 一篇文章
>  4、<section> 文章中的章节
>  5、<aside> 侧边栏
>  6、<footer> 页面底部、页脚

###  10.2 新增表单控件

新增类型：网址 邮箱 日期 时间 星期 数量 范围 电话 颜色 搜索

```HTML
<form action="resources/b.html">
    用户名（必填）：<input type="text"  required /><br/>
    电话（必填）：<input type="text" required pattern="^1[358]\d{9}$" /> <br/>
    <!--type="email"会初步校验 内容是否为邮箱，如果不是 就会终止提交 -->
    邮箱（必填）：<input type="email" required /><br/>
    网址：<input type="url" /><br/>
    数量：<input type="number" min="0" max="100" step="10"/><br/>
    范围：<input type="range" min="0" max="100" step="10"/><br/>
    搜索：<input type="search" placeholder="请输入商品名" /><br/>

    提交：<input type="submit" value="提交">
</form>
<label>颜色:</label><input type="color" name=""><br><br>
<label>电话:</label><input type="tel" name=""><br><br> 
<label>日期:</label><input type="date" name=""><br><br> 
<label>时间:</label><input type="time" name=""><br><br> 
<label>星期:</label><input type="week" name=""><br><br> 

```

> 新增常用表单控件属性：
>  1、placeholder 设置文本框默认提示文字
>  2、autofocus 自动获得焦点
>  3、autocomplete 联想关键词

### 10.4常见标签

> div    《行》
> a        <base>
> span   
> header    《行》
> footer    《行》
> section   板块    《行》
> nav        导航   《行》
> article    《行》
> aside     侧边栏  广告      《行》
>
> time     时间 日期
> p   段落     《行   padding》
> h1~h6  标题         《行   padding》
> strong   强调  加粗
> em         强调   斜体
>
> 层级
> ul         无序列表      《padding  margin》
>      li      列表项        《行》
>
> ol         有序列表    《padding  margin》
>       li     列表项   《行》
>
> dl     自定义列表      《padding》
>       dt    标题（1个）《行》
>        dd  列表项（n个）《margin》
>
>
> mark    标记
>
>
> 块元素：
>         独占一行
>         没有宽度的时候撑满一整行
>         支持所有css命令
>
> 内联元素的特征：
>     同排可以继续跟同类型的标签
>     宽度由内容撑开
>     不支持宽高
>     不支持上下margin值
>     代码换行被解析成一个空格
>
>     解决空格问题：
>         1，利用宋体 宋体在字体大小小于20px的情况下，空格大小就是文字大小的一半
>         2，简单粗暴，直接给父级font-size:0; 这时候需要重新指定子级的font-size
>
>
> 内联块元素
>      代码换行被解析
>      让内联支持宽高
>      让块元素可以横向排列
>      没有设置宽度的时候，由内容撑开宽度
>
> 要注意的几个原则：
>     1，尽量不要在内联元素身上设置行高
>     2，注意内联元素的对齐方式
>    
> 元素类型转换
> 	内联元素可以转换成块元素： display:block;
> 	其他类型的元素可以转换成内联元素： display:inline
> 	 display:inline-block  转换成内联块元素