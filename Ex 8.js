var a = 5;
var b = -13;
var c = 6;
var root1 = null;
var root2 = null;
var discriminant = Math.pow(b,2) - 4 * a * c ;
if ( a == 0) {
  console.log("Enter valid constans");
} else if (a !==0 , discriminant > 0) {
        root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
          console.log("Solutions are " + root1 +" and " + root2);   
} else if (a !==0, discriminant == 0) {
        root1 = root2 = -b / (2 * a)
         console.log( "Solution is " + root1);
} else if (a !==0, discriminant < 0) {
        console.log("Solution does not exists");
} else {
  console.log("undefined");
}
