"use strict";
function sayHello() {
    var input = document.getElementById("nameInput");
    var output = document.getElementById("output");
    if (input.value.trim()) {
        output.textContent = "Hello java..., ".concat(input.value, "!");
    }
    else {
        output.textContent = "Please enter your name....";
    }
}
