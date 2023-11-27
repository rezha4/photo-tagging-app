function printMousePos(event) {
    console.log(`X: ${event.screenX}, Y: ${event.screenY}`)
}

document.addEventListener("click", printMousePos)