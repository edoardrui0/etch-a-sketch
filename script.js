const boxContainer = document.querySelector("#boxContainer");

const inputContainer = document.querySelector("#inputContainer");
const input = document.createElement("input");
const btn = document.createElement("button");
btn.classList.add("btn");

inputContainer.appendChild(input);
inputContainer.appendChild(btn);

let createBoxes = (value) => {
  const boxes = document.createElement("div");
  let size = 500 / value;
  boxes.style.height = size + "px";
  boxes.style.width = size + "px";
  boxes.style.backgroundColor = "white";
  boxes.style.border = "0.5px solid black";
  // boxes.style.opacity = "0";

  for (let i = 0; i < value * value; i++) {
    const etch_box = boxes.cloneNode(true);
    etch_box.addEventListener("mouseover", (event) => {
      event.target.style.background = "black";
    });
    boxContainer.appendChild(etch_box);
  }
};

let createGrid = () => {
  btn.addEventListener("click", () => {
    boxContainer.textContent = "";
    let value = parseInt(input.value);
    input.value = "";
    createBoxes(value);
    console.log(boxContainer);
  });
};

createBoxes(16);
createGrid();
