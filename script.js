const boxContainer = document.querySelector("#boxContainer");

let boxLoop = (num) => {
  let total = num * num + num + 1;
  for (let i = 1; i < total; i++) {
    const boxes = document.createElement("div");
    boxes.classList.add("boxStyle");
    boxContainer.appendChild(boxes);

    boxes.addEventListener("mouseover", (e) => {
      e.target.style.background = "black";
    });
  }
};

boxLoop(16);
