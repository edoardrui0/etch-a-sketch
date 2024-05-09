const boxContainer = document.querySelector("#boxContainer");

const inputContainer = document.querySelector("#inputContainer");
const input = document.createElement("input");
const btn = document.createElement("button");
btn.classList.add("btn");

inputContainer.appendChild(input);
inputContainer.appendChild(btn);

let createBoxes = (value) => {
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
  }
};

let createGrid = () => {
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

// let gridBtn = () => {
//   const gridBtn2x2 = document.createElement("button");
//   gridBtn2x2.classList.add("gridBtn2x2");
//   gridBtn2x2.textContent = "2x2";
//   gridBtn2x2.value = 2;
//   inputContainer.appendChild(gridBtn2x2);

//   gridBtn2x2.addEventListener("click", () => {
//     boxContainer.textContent = "";
//     let btnValue = gridBtn2x2.value;

//     createBoxes(btnValue);
//   });

//   const gridBtn4x4 = document.createElement("button");
//   gridBtn4x4.classList.add("gridBtn4x4");
//   gridBtn4x4.textContent = "4x4";
//   gridBtn4x4.value = 4;
//   inputContainer.appendChild(gridBtn4x4);

//   gridBtn4x4.addEventListener("click", () => {
//     boxContainer.textContent = "";
//     let btnValue = gridBtn4x4.value;

//     createBoxes(btnValue);
//   });

//   const gridBtn8x8 = document.createElement("button");
//   gridBtn8x8.classList.add("gridBtn8x8");
//   gridBtn8x8.textContent = "8x8";
//   gridBtn8x8.value = 8;
//   inputContainer.appendChild(gridBtn8x8);

//   gridBtn8x8.addEventListener("click", () => {
//     boxContainer.textContent = "";
//     let btnValue = gridBtn8x8.value;

//     createBoxes(btnValue);
//   });

//   const gridBtn16x16 = document.createElement("button");
//   gridBtn16x16.classList.add("gridBtn16x16");
//   gridBtn16x16.textContent = "16x16";
//   gridBtn16x16.value = 16;
//   inputContainer.appendChild(gridBtn16x16);

//   gridBtn16x16.addEventListener("click", () => {
//     boxContainer.textContent = "";
//     let btnValue = gridBtn16x16.value;

//     createBoxes(btnValue);
//   });

//   const gridBtn32x32 = document.createElement("button");
//   gridBtn32x32.classList.add("gridBtn32x32");
//   gridBtn32x32.textContent = "32x32";
//   gridBtn32x32.value = 32;
//   inputContainer.appendChild(gridBtn32x32);

//   gridBtn32x32.addEventListener("click", () => {
//     boxContainer.textContent = "";
//     let btnValue = gridBtn32x32.value;

//     createBoxes(btnValue);
//   });

//   const gridBtn64x64 = document.createElement("button");
//   gridBtn64x64.classList.add("gridBtn64x64");
//   gridBtn64x64.textContent = "64x64";
//   gridBtn64x64.value = 64;
//   inputContainer.appendChild(gridBtn64x64);

//   gridBtn64x64.addEventListener("click", () => {
//     boxContainer.textContent = "";
//     let btnValue = gridBtn64x64.value;

//     createBoxes(btnValue);
//   });
// };

const createGridButton = (size) => {
  const gridBtn = document.createElement("button");
  gridBtn.classList.add(`gridBtn${size}x${size}`);
  gridBtn.textContent = `${size}x${size}`;
  gridBtn.value = size;
  inputContainer.appendChild(gridBtn);

  gridBtn.addEventListener("click", () => {
    boxContainer.textContent = "";
    let btnValue = gridBtn.value;
    createBoxes(btnValue);
  });
};

const gridBtnSizes = [2, 4, 8, 16, 32, 64];
gridBtnSizes.forEach((size) => createGridButton(size));

createBoxes(10);
createGrid();
// gridBtn();
