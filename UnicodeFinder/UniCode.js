function val(char) {
    if (char.length !== 1) {
        return "Please enter a single character.";
    }
    return "Unicode: U+".concat(char.charCodeAt(0).toString(16).toUpperCase());
}
var inp = document.getElementById("char");
var display = document.getElementById("unicodeValue");
var btn = document.getElementById("getUnicode");
btn.addEventListener("click", function () {
    var char = inp.value;
    var unicode = val(char);
    display.textContent = unicode;
});
