console.log("js added")


let bottleColor = "Transparent";
var waterContainer = 1;
const waterAvailable = true;

console.log(bottleColor, waterAvailable, waterContainer);



let pcComponent = ["laptop", "mouse", "monitor", "ups", "keyboard", "CPU", "speaker"];

console.log(pcComponent);
console.log(pcComponent[1]);
pcComponent[1] = "wireless mouse";
console.log(pcComponent[1]);
pcComponent.push("cable");
console.log(pcComponent);
pcComponent.pop();
console.log(pcComponent);

pcComponent.shift();
console.log(pcComponent);

pcComponent.unshift("multiplug");
console.log(pcComponent);
console.log(pcComponent.indexOf("ups"));

/*

    
Operator	Description
+	Addition
-	Subtraction
*	Multiplication
**	Exponentiation (ES2016)
/	Division
%	Modulus (Division Remainder)
++	Increment
--	Decrement

*/


let x = 5;
let y = 10;

let addition = x + y;
let subtraction = y - x;
let multiplication = x * y;
let division = y / x;
let remainder = y % x;

console.log("addition: ", addition, "subtraction: ", subtraction, "multiplication: ", multiplication, "division: ", division, "remainder", remainder);

let text1 = "A";
let text2 = "B";
let result = text1 > text2;
console.log(result);



/*

    JavaScript Assignment Operators
Assignment operators assign values to JavaScript variables.

Operator	Example	Same As
=	x = y	x = y
+=	x += y	x = x + y
-=	x -= y	x = x - y
*=	x *= y	x = x * y
/=	x /= y	x = x / y
%=	x %= y	x = x % y
**=	x **= y	x = x ** y
Shift Assignment Operators
Operator	Example	Same As
<<=	x <<= y	x = x << y
>>=	x >>= y	x = x >> y
>>>=	x >>>= y	x = x >>> y
Bitwise Assignment Operators
Operator	Example	Same As
&=	x &= y	x = x & y
^=	x ^= y	x = x ^ y
|=	x |= y	x = x | y
Logical Assignment Operators
Operator	Example	Same As
&&=	x &&= y	x = x && (x = y)
||=	x ||= y	x = x || (x = y)
??=	x ??= y	x = x ?? (x = y)

*/


let value1 = 5;
let value2 = 10;

let additionOfValue = value1 + value2;
console.log(additionOfValue);