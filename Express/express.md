# Express

## 1. Express简介

Express 是一个基于 Node.js 平台的极简、灵活的 web 应用开发框架，它提供一系列强大的特性，帮助你快速创建各种 Web 和移动设备应用。Express就是运行在node中的用来搭建服务器的模块。

> npm i express --save  安装express并添加到依赖项

### 1.1 express使用

```javascript
//引入express模块
var express = require('express')
//创建应用对象
var app = express()
//配置静态资源
app.use(express.static('public'))
//开启服务器，监听3000端口
app.listen(3000)
```

## 2. 路由Route

路由是指如何定义应用的端点（URIs）以及如何响应客户端的请求。路由是由一个 URI、HTTP 请求（GET、POST等）和若干个句柄组成的。

将路由定义为三个部分：

> 第一部分：HTTP请求的方法（get或post）
>
> 第二部分：URI路径
>
> 第三部分: 回调函数
>

### 2.1 Route的实现 

Express中提供了一系列函数，可以让我们很方便的实现路由：

> app.<method>(path，callback) 
>
> 语法解析：
>
> method指的是HTTP请求方法，比如：
>
> app.get()
>
> app.post()
>
> path指要通过回调函数来处理的URL地址
>
> callback参数是应该处理该请求并把响应发回客户端的请求处理程序

### 2.2 Route的实例

```javascript
//引入express
var express = require('express')
//创建应用对象
var app = express()
//配置路由
app.get('/index', function (request, response) {
  console.log('路由index收到get请求')
  response.send('这里是路由返回的信息，/hello收到了get请求')
})

app.post('/index', function (request, response) {
  console.log('路由index收到post请求')
  response.send('这里是路由返回的信息，/hello收到了post请求')
})
```

当Express服务器接收到一个HTTP请求时，它会查找已经为适当的HTTP方法和路径定义的路由。
如果存在Request和Response对象会被创建，并被传递给路由的回调函数。可以通过Request对象读取请求，通过Response对象返回响应，Express中还提供了all()方法，可以处理两种请求。

### 2.3 Request对象

> Request对象是路由回调函数中的第一个参数，代表了用户发送给服务器的请求信息
>
> 通过Request对象可以读取用户发送的请求包括URL地址中的查询字符串中的参数，和post请求的请求体中的参数。
>

**Request对象属性和方法**

| **属性方法**      | **描述**                                             |
| ----------------- | ---------------------------------------------------- |
| request.query     | 获取get请求查询字符串的参数，拿到的是一个对象        |
| request.params    | 获取get请求参数路由的参数，拿到的是一个对象          |
| request.body      | 获取post请求体，拿到的是一个对象（要借助一个中间件） |
| request.get(xxxx) | 获取请求头中指定key对应的value                       |

### 2.4 Response

> Response对象是路由回调函数中的第二个参数，代表了服务器发送给用户的响应信息。
>
> 通过Response对象可以设置响应报文中的各个内容，包括响应头和响应体。
>

**Response对象的属性和方法**

| **属性/****方法**          | **描述**                                   |
| -------------------------- | ------------------------------------------ |
| response.send()            | 给浏览器做出一个响应                       |
| response.end()             | 给浏览器做出一个响应（不会自动追加响应头） |
| response.download()        | 告诉浏览器下载一个文件                     |
| response.sendFile()        | 给浏览器发送一个文件                       |
| response.redirect()        | 重定向到一个新的地址（url）                |
| response.set(header,value) | 自定义响应头内容                           |
| response.get()             | 获取响应头指定key对应的value               |
| res.status(code)           | 设置响应状态码                             |

## 3. 中间件简介

Express 是一个自身功能极简，完全是由路由和中间件构成一个的 web 开发框架：从本质上来说，一个 Express 应用就是在调用各种中间件。

中间件（Middleware） 是一个函数，它可以访问请求对象（request）, 响应对象（response）, 和 web 应用中处于请求-响应循环流程中的中间件，一般被命名为 next 的变量。

中间件功能

> - 执行任何代码。
>
> - 修改请求和响应对象。
>
> - 终结请求-响应循环。
>
> - 调用堆栈中的下一个中间件。
>

中间件的分类

> - 应用级中间件（过滤非法的请求，例如防盗链）
> - 第三方中间件（通过npm下载的中间件，例如body-parser）
>
> - 内置中间件（express内部封装好的中间件）
>
> - 路由器中间件 （Router）

中间件实例

```javascript
//引入express
var express = require('express')
//创建应用对象
var app = express()
//配置静态资源
app.use(express.static('public'))
//中间件，没有挂载路径，应用的每个请求都会执行该中间件
app.use(function (req, res, next) {
  console.log('这是中间件的响应~~~')
  //如果不调用next方法，下面路由将不起作用
  next()
})
//配置路由
app.get('/index', function (req, res) {
  console.log('路由index收到get请求')
  res.send('这里是路由返回的信息，/hello收到了get请求')
})

app.post('/index', function (req, res) {
  console.log('路由index收到post请求')
  res.send('这里是路由返回的信息，/hello收到了post请求')
})

//启动服务器
app.listen(3000, function () {
  console.log('服务器启动成功，监听3000端口')
})
```

### 3.1 Router

Router 是一个完整的中间件和路由系统，也可以看做是一个小型的app对象。

Router的使用

```javascript
//引入express模块
var express = require('express');
//引入body-parser模块
var bodyParser = require('body-parser');
//引入Users模型对象
var Users = require('../models/Users');
//创建router对象
var router = express.Router();
//解析请求体，将参数挂在到req.body
router.use(bodyParser.urlencoded({extended: false}));
router.post('/login', function (req, res) {
  var username = req.body.username;
  var password = req.body.password;
  Users.findOne({username: username}, function (err, data) {
    if (!err && data && data.password === password) {
      res.send('恭喜您登录成功~~~');
    } else {
      res.send('用户名或密码错误~~~');
    }
  })
})
router.post('/regist', function (req, res) {
  //获取用户提交的参数
  var username = req.body.username;
  var password = req.body.password;
  var rePassword = req.body.rePassword;
  var email = req.body.email;
  /*
    1. 正则验证(-)
    2. 密码和确认密码是否一致
    3. 去数据库中查找有无此用户名
    4. 插入数据
   */
  //判断密码和确认密码是否一致
  if (password !== rePassword) {
    res.send('两次密码输入不一致，请重新输入~~');
    return
  }
  //去数据库中查找有无此用户名
  Users.findOne({username: username}, function (err, data) {
    if (!err) {
      /*
        data
          如果查到了  返回文档对象
          如果没找到  返回null
       */
      if (data) {
        // 查到了指定用户名
        res.send(data.username + '用户名已被注册~~请重新输入');
      } else {
        // 没有找到指定有户名，将用户信息插入到数据库中
        Users.create({
          username: username,
          password: password,
          email: email
        }, function (err) {
          if (!err) {
            res.send('恭喜您，注册成功了~~');
          } else {
            res.send('error');
          }
        })
      }
    } else {
      res.send('error');
    }
  })
})
//暴露路由器对象
module.exports = router

```

### 3.2 EJS

> EJS是一个高效的 JavaScript 模板引擎。
>
> 模板引擎是为了使用户界面与业务数据（内容）分离而产生的。
>
> 简单来说，使用EJS模板引擎就能动态渲染数据。
>

#### 3.2.1 EJS的使用

下载安装

> npm i ejs --save
>

配置模板引擎

> app.set("view engine" , "ejs");
>

配置模板的存放目录

> app.set("views","./views")
>

在views目录下创建模板文件

> xxx.ejs
>

使用模板，通过response来渲染模板

> response(‘模板名称’, 数据对象)
>

#### 3.2.2 EJS语法

以下是一个ejs文件：

```
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>

<h1>Hello EJS，这是我的第一个EJS</h1>
    //<% code %> 执行其中的JS代码
    <%   console.log("Hello EJS");
      	 var a = 30;        
     %>

    //<%=username%> 输出转义的数据到模板上
<h2>用户名 : <%=username%></h2>
    //<%-username%> 输出非转义的数据到模板上
<h2>用户名 : <%-username%></h2>

//<% %> 可以包含JS代码与下面拼接在一起
    <%
        if(a==20){
    %>

<h3>a的值是20</h3>
    <%
        }
    %>

    <%
    for(var i=0 ; i<3 ; i++){
    %>
<h3>老师真帅啊！！！！！</h3>
    <%
    }
    %>
</body>
</html>
```

## 4. 会话控制

HTTP协议是一个无状态的协议，它无法区分多次请求是否发送自同一客户端。

而我们在实际的使用中，却又大量的这种需求，我们需要通过会话的控制来解决该问题。

### 4.1 cookie

cookie本质是一个存储在浏览器的文本，随着http请求自动传递给服务器。

也可以说cookie是一个头（请求头/响应头）：

服务器以响应头的形式将Cookie发送给浏览器

浏览器收到以后会自动将Cookie保存

浏览器再次访问服务器时，会以请求头的形式将Cookie发回

服务器就可以通过检查浏览器发回的Cookie来识别出不同的浏览器

#### 4.1.1 cookie的不足

各个浏览器对cookie的数量和大小都有不同的限制，这样就导致我们不能在Cookie中保存过多的信息。一般数量不超过50个，单个大小不超过4kb。

cookie是由服务器发送给浏览器，再由浏览器将cookie发回，如果cookie较大会导致发送速度非常慢，降低用户的体验。

#### 4.1.2 cookie的使用

通过配置cookie-parser中间件，可以将cookie解析为一个对象，并且添加为req的cookies属性，使用步骤：

1. 下载安装

   > npm i cookie-parser --save
   >

2. 引入

   > var cookieParser = require("cookie-parser");
   >

3. 设置为中间件

   > app.use( cookieParser() );
   >

4. 创建Cookie

   > res.cookie("username","sunwukong" , {maxAge:15000});
   >

   > //设置一个有效期为1天的cookie
   >
   > res.cookie("username","sunwukong" , {maxAge:1000*60*60*24});

   > //设置一个永久有效的cookie
   >
   > res.cookie("username","sunwukong" , {maxAge:1000*60*60*24*365*10});

5. 修改Cookie

   >  //Cookie一旦发送给浏览器，就不能再修改了
   >
   >  //但是我们可以使用同名的cookie来替换已有cookie
   >
   > res.cookie("username","zhubajie");
   >

6. 删除Cookie

   > //可以通过通过使用一个立即失效的cookie来替换cookie的形式来删除cookie
   >
   > res.cookie("username","11",{maxAge:0});
   >

7. //用来删除一个cookie

   > res.clearCookie(“username”)用来删除一个指定cookie
   >

### 4.2 session

Session 是一个对象，存储特定用户会话所需的属性及配置信息。

#### 4.2.1session运作流程

我们可以在服务器中为每一次会话创建一个对象，然后每个对象都设置一个唯一的id，并将该id以cookie的形式发送给浏览器，然后将会话中产生的数据统一保存到这个对象中，这样我们就可以将用户的数据全都保存到服务器中，而不需要保存到客户端，客户端只需要保存一个id即可。

#### 4.2.2 session的使用

1. 下载安装

   > npm i connect-mongo express-session --save

2. 引入模块

   > var session = require("express-session");

3. 将其配置为express-session的默认的持久化仓库

   > var MongoStore = require('connect-mongo')(session);

4. 设置为中间件

```javascript
app.use(session({
  name: 'id22',   //设置cookie的name，默认值是：connect.sid
  secret: 'atguigu', //参与加密的字符串（又称签名）
  saveUninitialized: false, //是否为每次请求都设置一个cookie用来存储session的id
  resave: true ,//是否在每次请求时重新保存session
  store: new MongoStore({
    url: 'mongodb://localhost:27017/test-app',
    touchAfter: 24 * 3600 // 24小时之内只修改一次
  }),
  cookie: {
    httpOnly: true, // 开启后前端无法通过 JS 操作
    maxAge: 1000*30 // 这一条 是控制 sessionID 的过期时间的！！！
  },
}));
```

###  4.3 cookie和session的区别

1. 存在的位置：

> cookie 存在于客户端，临时文件夹中
>
> session 存在于服务器的内存中，一个session域对象为一个用户浏览器服务
>

2. 安全性：

> cookie是以明文的方式存放在客户端的，安全性低，可以通过一个加密算法进行加密后存放
>
> session存放于服务器的内存中，所以安全性好
>

3. 网络传输量：

> cookie会传递消息给服务器
>
> session本身存放于服务器，但是通过cookie传递id，会有少量的传送流量
>

4. 生命周期(以20分钟为例)：

> cookie的生命周期是累计的，从创建时，就开始计时，20分钟后，cookie生命周期结束
>
> session的生命周期是间隔的，从创建时，开始计时如在20分钟，没有访问session，那么session生命周期被销毁；但是，如果在20分钟内（如在第19分钟时）访问过session，那么，将重新计算session的生命周期；关机会造成session生命周期的结束，但是对cookie没有影响
>

5. 访问范围：

> session为一个用户浏览器独享
>
> cookie为多个用户浏览器共享
>

6. 大小：

> cookie 保存的数据不能超过4K，很多浏览器都限制一个站点最多保存50个cookie
>
> session 保存数据理论上没有任何限制（内存有多大就能有多大）
>

 

 