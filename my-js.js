var c = 3+4;
console.log ("The value of c is ", +c);
 var x = 2;
 var y = 3;
 var z = x - y; 
 console.log ("The value of z is ", +z);
    var m = x * y; // Multiplication operation on variables.
    console.log ("The value of m is ", +m);
    var n = x / y; // Division operation on variables.
    console.log ("The value of n is ", +n);
    var w = (x * y + 20) - 10 // Arithmetic operation on an expression.
    console.log ("The value of w is ", +w);
    var myVariable = "Bolt IOT";
    document.getElementById("demo").innerHTML = myVariable;

function myFunction(myName) {
    var elem = document.getElementById("hello");
    elem.innerHTML = elem.innerHTML + myName;
}
function say_hello(){
    setTimeout(function(){ alert("Hello");}, 3000 )
}

var counter = 0;
function start_timer(){
    setInterval(increment_counter, 1000);
}

function increment_counter(){
    let counter_element = document.getElementById("counter");
    counter_element.innerHTML = counter;
    counter = counter+1;
}