function printMousePos(event) {
    console.log(`X: ${event.clientX}, Y: ${event.clientY}`)
    const answers = document.querySelector(".answers");
    answers.style.display = "block"
    answers.style.left = `${event.clientX}px`;
    answers.style.top = `${event.clientY}px`;
}

document.addEventListener("click", printMousePos)