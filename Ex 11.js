

var a = 13;
var b= a%10;
var c = (a-(a%10))/10;
console.log(c)
console.log (b+""+c)


var a = 895796;
var b = a%10;
console.log(b)
var c=(a-(a%10))/1000000
var d = Math.floor((a-(a%10))/1000000)
var f= Math.floor ((c-d)*10)
console.log(f)
var j= (a%100000)
var k= (j-b)/10
console.log(k)
console.log(b+""+k+""+f)
