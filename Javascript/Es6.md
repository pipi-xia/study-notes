# JavaScript



javaScript包含三个部分ECMAScript，DOM，BOM。



## 1. ECMAScript

### 1.1 基数据类型

> - string: 任意字符串
>
> - number: 任意数字
>
> - boolean: true/false
>
> - undefined: undefined
>
> - null: null
>
>   引用数据类型：
>
>   - object: 基本对象类型
>   - function: 特殊对象, 可以执行
>   - array: 特殊对象, 可通过下标执行, 内部有序

### 1.2 注解

单行注释：//注释内容

多行注释：/*注释内容*/

### 1.3 变量



Java语言是强类型语言，而JavaScript是弱类型语言。

强类型：在开辟变量存储空间时，定义了空间将来存储的数据的数据类型。只能存储固定类型的数据

弱类型：在开辟变量存储空间时，不定义空间将来的存储数据类型，可以存放任意类型的数据。



> - typeof
>   返回数据类型的字符串表达
>
>   可以判断数值, 字符串, undefined, boolean, function
>
>   不能判断null与object与array, 返回都是Object
>
> - instanceof 返回boolean值, 只能判断对象的具体类型, 即是普通对象, 函数还是基本类型
>
> - ===(全等) 可以判断undefined与null, 由于它们的值只有1个

### 1.4运算符











闭包,原型链,异步IO，ES6新特性