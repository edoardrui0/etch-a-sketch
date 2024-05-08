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
  // boxes.style.opacity = "0";

  for (let i = 0; i < value * value; i++) {
    const etch_box = boxes.cloneNode(true);
    etch_box.addEventListener("mouseover", (event) => {
      event.target.style.background = "black";
    });
    boxContainer.appendChild(etch_box);
  }
};

createBoxes(16);

// function boxLoop(num) {
//   const total = num * num + num;
//   const mod = num + 1;

//   for (let i = 1; i < total; i++) {
//     const boxes = document.createElement("div");
//     boxes.classList.add("boxStyle");

//     if (i % mod === 0) {
//       boxes.style.cssText = "border: 0; height: 0; width: 100%";
//     } else {
//       boxes.style.cssText =
//         "border: 1px solid black; height: 25px; width: 25px; flex: 1";
//     }

//     boxContainer.appendChild(boxes);

// boxes.addEventListener("mouseover", (event) => {
//   event.target.style.background = "black";
// });

//     btn.addEventListener("click", () => {
//       boxes.remove();
//       boxLoop(parseInt(input.value));
//       input.value = "";
//     });
//   }
// }

// boxLoop(16);
