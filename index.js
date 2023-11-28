let xCoordinate = 0;
let yCoordinate = 0;

function printMousePos(event) {
    xCoordinate = event.clientX;
    yCoordinate = event.clientY;
    console.log(`X: ${xCoordinate}, Y: ${yCoordinate}`)
    const answerDialog = document.querySelector(".answers");
    answerDialog.removeAttribute("hidden")
    answerDialog.style.left = `${xCoordinate}px`;
    answerDialog.style.top = `${yCoordinate}px`;
}

const image = document.querySelector("img");

image.addEventListener("click", printMousePos);

const answers = document.querySelectorAll("button");

answers.forEach(button => {
    button.addEventListener("mousedown", () => {
        console.log(button.textContent);
        if (button.textContent === "X") {
            document.querySelector(".answers").setAttribute("hidden", "false")
        } else {
            
        }
    })
})
