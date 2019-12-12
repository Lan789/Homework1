var n = +promt();
var i = 0;
var j = 0;
if (n%2 === 0 || !Math.floor(n/10) && (i+=1)){
  console.log("if1")
} else if (n%3 === 0 || n%10 === 1 && (j+=1)) {
  console.log("if2")
}

