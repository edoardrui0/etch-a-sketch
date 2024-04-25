const boxContainer = document.querySelector("#boxContainer");

let boxLoop = (num) => {
  let total = num * num;
  for (let i = 0; i < total; i++) {
    const boxes = document.createElement("div");
    boxes.classList.add("boxStyle");
    boxContainer.appendChild(boxes);
  }
};

boxLoop(16);
