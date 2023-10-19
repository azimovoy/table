let box = document.querySelector(".box");
let amount = 2145;

for (let i = 0; i < amount; i++) {
  let item = document.createElement("div");
  item.classList.add("item");
  box.append(item);
  item.addEventListener("mouseover", () => setColor(item));
  item.addEventListener("mouseleave", () => removeColor(item));
}

function setColor(el) {
  el.style.background = `rgb(${randomred()}, ${randomred()}, ${randomred()})`;
}

function removeColor(el) {
  el.style.background = "";
}

function randomred() {
  return Math.floor(Math.random() * 255);
}
