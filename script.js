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
  const boxes = document.createElement("div");
  let size = 750 / value;
  boxes.style.height = size + "px";
  boxes.style.width = size + "px";
  boxes.style.backgroundColor = "white";
  boxes.style.border = "0.5px solid black";
  // boxes.style.opacity = "0";

  for (let i = 0; i < value * value; i++) {
    const etch_box = boxes.cloneNode(true);

    // this eventListener creates black boxes
    etch_box.addEventListener("mouseover", (event) => {
      event.target.style.background = "black";
    });
    boxContainer.appendChild(etch_box);

    blackBtn.addEventListener("click", () => {
      if (etch_box.style.backgroundColor !== "black") {
        etch_box.style.backgroundColor = "white";
      }

      etch_box.addEventListener("mouseover", (event) => {
        event.target.style.background = "black";
      });
    });

    // this eventListener clears the current boxes, if not red, and then creates red boxes upon mouseover
    redBtn.addEventListener("click", () => {
      if (etch_box.style.backgroundColor !== "red") {
        etch_box.style.backgroundColor = "white";
      }

      etch_box.addEventListener("mouseover", (event) => {
        event.target.style.background = "red";
      });
    });

    blueBtn.addEventListener("click", () => {
      if (etch_box.style.backgroundColor !== "blue") {
        etch_box.style.backgroundColor = "white";
      }

      etch_box.addEventListener("mouseover", (event) => {
        event.target.style.background = "blue";
      });
    });

    pinkBtn.addEventListener("click", () => {
      if (etch_box.style.backgroundColor !== "pink") {
        etch_box.style.backgroundColor = "white";
      }

      etch_box.addEventListener("mouseover", (event) => {
        event.target.style.background = "pink";
      });
    });

    // this eventListener completely clears the boxes, regardless of color
    clearBtn.addEventListener("click", () => {
      etch_box.style.backgroundColor = "white";
    });

    rainbowBtn.addEventListener(`click`, () => {
      etch_box.style.backgroundColor = "white";
      etch_box.addEventListener(`mouseover`, (event) => {
        event.target.style.background = randomColor();
      });
    });
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
