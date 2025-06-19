function sayHello(): void {
  const input = document.getElementById("nameInput") as HTMLInputElement;
  const output = document.getElementById("output") as HTMLParagraphElement;

  if (input.value.trim()) {
    output.textContent = `Hello java..., ${input.value}!`;
  } else {
    output.textContent = "Please enter your name....";
  }
}