//boolean
var flag = true;
console.log("Value assigned to flag is: " + flag);
//number
var num = 6;
console.log("Value assigned to num is: " + num);
//String
var hello = "Hello World!!!";
console.log("Value assigned to hello is: " + hello);
//Array
var array = [1, 2, 3];
console.log("Value assinged to array is:" + array);
//Tuple
var x;
x = ["I am", 21];
console.log(x[0].substr(1));
//Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Blue;
