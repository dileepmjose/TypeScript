function val(char: string): string {
    if (char.length !== 1) {
        return "Please enter a single character.";
    }
    return `Unicode: U+${char.charCodeAt(0).toString(16).toUpperCase()}`;
}

const inp = document.getElementById("char") as HTMLInputElement;
const display = document.getElementById("unicodeValue") as HTMLParagraphElement;
const btn = document.getElementById("getUnicode") as HTMLButtonElement;

btn.addEventListener("click", () => {
    const char = inp.value;
    const unicode = val(char);
    display.textContent = unicode;
});