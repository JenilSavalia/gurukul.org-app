function animateGauge(targetPercentage) {
    const canvas = document.getElementById("gauge");
    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;
    const radius = Math.min(width, height) / 2 - 15;
    let currentPercentage = 0;
    const textElement = document.getElementById("percentageText");

    function drawGauge(percentage) {
        const angle = (percentage / 100) * 2 * Math.PI;

        // Clear the canvas for each frame
        ctx.clearRect(0, 0, width, height);

        // Draw background circle
        ctx.beginPath();
        ctx.arc(width / 2, height / 2, radius, 0, 2 * Math.PI);
        ctx.lineWidth = 20;
        ctx.strokeStyle = "#ddd";
        ctx.stroke();

        // Draw animated arc for percentage
        ctx.beginPath();
        ctx.arc(width / 2, height / 2, radius, -Math.PI / 2, -Math.PI / 2 + angle, false);
        ctx.lineWidth = 20;
        ctx.strokeStyle = "#CC0000";
        ctx.stroke();

        // Display percentage text in the center
        textElement.textContent = `${Math.floor(percentage)}%`;
    }

    // Animation function to increment percentage
    function animate() {
        if (currentPercentage <= targetPercentage) {
            drawGauge(currentPercentage);
            currentPercentage += 1; // Increment for smooth animation
            requestAnimationFrame(animate); // Recursively call for each frame
        }
    }

    animate(); // Start animation
}

// Example usage with a student percentage
const studentPercentage = 85; // Replace with the student's overall percentage
animateGauge(studentPercentage);
