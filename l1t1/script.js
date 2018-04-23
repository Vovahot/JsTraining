// x^2 -2x - 3 = 0

var a = 1;
var b = 12;
var c = 36;
var descriminant;
var x1 = 0;
var x2 = 0;

descriminant = b*b-(4*a*c);

console.log("Descriminant = ", descriminant);

if(descriminant > 0)
 {
 	x1=(-b + Math.sqrt(descriminant))/(2*a);
 	x2=(-b - Math.sqrt(descriminant))/(2*a);

 	console.log("x1 = ", x1);
 	console.log("x2 = ", x2);
 } else if(descriminant == 0)
 {
 	x1 = (-b + Math.sqrt(descriminant))/(2*a);
 	console.log("x1 = ", x1);

 } else if(descriminant < 0) {
 	console.log("descriminant < 0");
 }
