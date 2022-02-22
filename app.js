const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const colorText = document.getElementById("color");

btn.addEventListener("click", function () {
  let out = "";
  for (let i = 0; i < 6; i++) {
    let randomNumber = Math.floor(Math.random() * hex.length);
    out += hex[randomNumber];
  }
  document.body.style.backgroundColor = "#" + out;
  colorText.textContent = " #" + out;
  colorText.style.color = "#" + out;
});
