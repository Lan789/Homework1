var m=null;
var n=null;
var name1 = "Tringle 6,7";
var name2= "Rectangle 8,5";
var name3 = "Tringle 0,5";
switch (name3) {
  case "Tringle 6,7": 
   m=6; 
   n=7;
  if( m > 0 && n > 0){
  console.log("Square of the triangle is "  + (m * n )/2);
  }  else if (m<=0 || n<=0) {
    console.log("Please enter only positives");
  } else {
    console.log("");
  } break;
  case "Rectangle 8,5":
  m=8; 
  n=5;
  if(m > 0 && n > 0){
  console.log("Square of the rectangle is " +  m * n);
   } else if (m<=0 || n<=0) {
    console.log("Please enter only positives");
  } else {
    console.log("");
  } break;
  case "Tringle 0,5":
  m=0;
  n=5;
  if( m>0 && n>0){
  console.log("Square of the triangle is "  + (m * n)/2);
  } else if (m <=0 || n<=0) {
    console.log("Please enter only positives");
  } else {
    console.log("");
  } break;
  default:
  console.log("")
}
