// Secret code to allow updates (only you know this)
const secretCode = "mySecret123"; // Change this to something unique and hard to guess
let currentStatus = "green"; // Default status

// Function to update the status based on the secret code
function updateStatus(code, status) {
    if (code === secretCode) {
        // If the correct code is entered, update the status
        const statusElement = document.getElementById("status");

        if (status === "green") {
            statusElement.textContent = "Website is Up!";
            statusElement.className = "status green"; // Green class for "Up"
        } else if (status === "yellow") {
            statusElement.textContent = "Website is Under Maintenance";
            statusElement.className = "status yellow"; // Yellow class for "Maintenance"
        } else if (status === "red") {
            statusElement.textContent = "Website is Down!";
            statusElement.className = "status red"; // Red class for "Down"
        }

        // Change the link dynamically based on status
        const websiteLink = document.getElementById("website-link");
        if (status === "green") {
            websiteLink.href = "https://www.example.com"; // Link to the actual website when up
        } else {
            websiteLink.href = "#"; // Disable the link when the site is down or under maintenance
        }

        // Update the current status
        currentStatus = status;
    } else {
        console.log("Unauthorized access attempt to update status.");
    }
}

// Example of how to update the status programmatically
// For example, change the status to 'yellow' (Maintenance)
updateStatus("mySecret123", "yellow");  // This line is for testing, remove once deployed

