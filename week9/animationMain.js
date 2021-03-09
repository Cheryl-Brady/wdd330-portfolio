const squareElement = document.getElementById('square');
let angle = 0;

// *** NEW WAY OF DOING ANIMATION (window.requestAnimationFrame())
function rotate() {
    angle = (angle +2) % 360;
    squareElement.style.transform = `rotate(${angle}deg)`
    window.requestAnimationFrame(rotate);
}

const id = requestAnimationFrame(rotate);


// *** OLD WAY OF DOING ANIMATION ***
// setInterval( () => {
//     angle = (angle +2) % 360;
//     squareElement.style.transform = `rotate(${angle}deg)`}, 1000/60);