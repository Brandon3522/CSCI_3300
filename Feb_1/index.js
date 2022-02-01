

// let name = prompt("What is your name?");
// alert("Hello, " + name);

function sayHello() {
    let name = document.hello.firstname.value;
    document.getElementById("greeting").innerHTML = 
    "Hello, <b>" + name + "</b>!";
}