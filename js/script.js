/const canvas = document.getElementById('stick-figure-canvas');
const ctx = canvas.getContext('2d');

let xPosition = -100; // Initial position of the stick figure

// Function to draw the stick figure
function drawStickFigure(x) {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

  // Head
  ctx.beginPath();
  ctx.arc(x + 40, 30, 10, 0, Math.PI * 2);
  ctx.fill();

  // Body
  ctx.moveTo(x + 40, 40);
  ctx.lineTo(x + 40, 80);

  // Arms
  ctx.moveTo(x + 40, 50);
  ctx.lineTo(x + 70, 60);
  ctx.moveTo(x + 40, 50);
  ctx.lineTo(x + 10, 60);

  // Legs
  ctx.moveTo(x + 40, 80);
  ctx.lineTo(x + 70, 100);
  ctx.moveTo(x + 40, 80);
  ctx.lineTo(x + 10, 100);

  ctx.stroke();
}

// Function to animate the stick figure
function animate() {
  requestAnimationFrame(animate);
  drawStickFigure(xPosition);
  xPosition += 1; // Adjust speed by changing this value
  if (xPosition > canvas.width + 100) {
    xPosition = -100; // Reset position to restart animation
  }
}

animate(); // Start the animation
