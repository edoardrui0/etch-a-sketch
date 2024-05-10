const boxContainer = document.querySelector("#boxContainer");

const controls = document.querySelector(`#controls`);
const inputContainer = document.querySelector("#inputContainer");
const input = document.createElement("input");
const btn = document.createElement("button");
btn.classList.add("btn");
btn.textContent = "Enter";

const btnContainer = document.querySelector("#btnContainer");

inputContainer.appendChild(input);
inputContainer.appendChild(btn);

const redBtn = document.createElement("button");
redBtn.classList.add(`redBtn`);
redBtn.textContent = `Red`;
controls.appendChild(redBtn);

const createBoxes = (value) => {
  const boxes = document.createElement("div");
  let size = 750 / value;
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

    redBtn.addEventListener("click", () => {
      etch_box.addEventListener("mouseover", (event) => {
        event.target.style.background = "red";
      });
    });
  }
};

const createGrid = () => {
  btn.addEventListener("click", () => {
    if (input.value > 100) {
      alert("The input must be 100 or less!");
      input.value = "";
    } else {
      boxContainer.textContent = "";
      let value = parseInt(input.value);
      input.value = "";
      createBoxes(value);
    }
  });
};

const createGridButton = (size) => {
  const gridBtn = document.createElement("button");
  gridBtn.classList.add(`gridBtn${size}x${size}`);
  gridBtn.textContent = `${size}x${size}`;
  gridBtn.value = size;
  btnContainer.appendChild(gridBtn);

  gridBtn.addEventListener("click", () => {
    boxContainer.textContent = "";
    let btnValue = gridBtn.value;
    createBoxes(btnValue);
  });
};

// selectGridColor();

const gridBtnSizes = [2, 4, 8, 16, 32, 64];
gridBtnSizes.forEach((size) => createGridButton(size));

createBoxes(10);
createGrid();
