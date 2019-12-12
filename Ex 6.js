var a= 45;
var b= 26;
var c= 78; 
console.log(a>b && a>c && b>c && c + "," + b + "," + a)
console.log(a>b && a>c && b<c && b + "," + c + "," + a)
console.log(a>b && a<c && c>b && b + "," + a + "," + c)
console.log(a<b && a<c && b>c && a + "," + c + "," + b)
console.log(a<b && a<c && b<c && a + "," + b + "," + c)
console.log(a<b && a>c && b>c && c + "," + a + "," + b)