const boxContainer = document.querySelector("#boxContainer");

const controls = document.querySelector(`#controls`);
const inputContainer = document.querySelector("#inputContainer");
const input = document.createElement("input");
const btn = document.createElement("button");
btn.classList.add("btn");
btn.textContent = "Enter";

const btnContainer = document.querySelector("#btnContainer");
const colorBtnContainer = document.querySelector(`#colorBtnContainer`);

inputContainer.appendChild(input);
inputContainer.appendChild(btn);

const blackBtn = document.createElement("button");
blackBtn.textContent = `Black`;
colorBtnContainer.appendChild(blackBtn);

const redBtn = document.createElement("button");
redBtn.textContent = `Red`;
colorBtnContainer.appendChild(redBtn);

const blueBtn = document.createElement("button");
blueBtn.textContent = `Blue`;
colorBtnContainer.appendChild(blueBtn);

const pinkBtn = document.createElement("button");
pinkBtn.textContent = `Pink`;
colorBtnContainer.appendChild(pinkBtn);

const rainbowBtn = document.createElement(`button`);
rainbowBtn.textContent = `Rainbow`;
colorBtnContainer.appendChild(rainbowBtn);

const clearBtn = document.createElement(`button`);
clearBtn.textContent = `Clear`;
colorBtnContainer.appendChild(clearBtn);

const createBoxes = (value) => {
  boxContainer.textContent = ""; // Clear existing boxes
  const size = 750 / value;
  for (let i = 0; i < value * value; i++) {
    const etch_box = document.createElement("div");
    etch_box.classList.add("etch-box");
    etch_box.style.height = size + "px";
    etch_box.style.width = size + "px";
    etch_box.style.backgroundColor = "white";
    etch_box.style.border = "0.5px solid black";
    boxContainer.appendChild(etch_box);
  }
};

// credit to https://gist.github.com/bendc/76c48ce53299e6078a76 for this code
const randomColor = (() => {
  "use strict";

  const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return () => {
    var h = randomInt(0, 360);
    var s = randomInt(42, 98);
    var l = randomInt(40, 90);
    return `hsl(${h},${s}%,${l}%)`;
  };
})();

const applyColor = (color) => {
  const boxes = document.querySelectorAll(".etch-box");
  boxes.forEach((box) => {
    if (box.style.backgroundColor !== color) {
      box.style.backgroundColor = "white";
    }
    box.addEventListener("mouseover", () => {
      box.style.backgroundColor = color;
    });
  });
};

blackBtn.addEventListener("click", () => {
  applyColor("black");
});

redBtn.addEventListener("click", () => {
  applyColor("red");
});

blueBtn.addEventListener("click", () => {
  applyColor("blue");
});

pinkBtn.addEventListener("click", () => {
  applyColor("pink");
});

clearBtn.addEventListener("click", () => {
  applyColor("white");
});

rainbowBtn.addEventListener("click", () => {
  const boxes = document.querySelectorAll(".etch-box");
  boxes.forEach((box) => {
    if (box.style.backgroundColor !== "white") {
      box.style.backgroundColor = "white";
    }
    box.addEventListener("mouseover", () => {
      box.style.backgroundColor = randomColor();
    });
  });
});

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

const gridBtnSizes = [2, 4, 8, 16, 32, 64];
gridBtnSizes.forEach((size) => createGridButton(size));

createBoxes(5);
createGrid();
