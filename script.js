// This function updates the status based on the selected option
document.getElementById("status-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the selected status
    const selectedStatus = document.getElementById("status-select").value;
    const statusElement = document.getElementById("status");

    // Set the status text and color based on selection
    if (selectedStatus === "green") {
        statusElement.textContent = "Website is Up!";
        statusElement.className = "status green"; // Green class for "Up"
    } else if (selectedStatus === "yellow") {
        statusElement.textContent = "Website is Under Maintenance";
        statusElement.className = "status yellow"; // Yellow class for "Maintenance"
    } else if (selectedStatus === "red") {
        statusElement.textContent = "Website is Down!";
        statusElement.className = "status red"; // Red class for "Down"
    }

    // Change the link dynamically based on status
    const websiteLink = document.getElementById("website-link");
    if (selectedStatus === "green") {
        websiteLink.href = "https://www.example.com"; // Link to the actual website when up
    } else {
        websiteLink.href = "#"; // Disable the link when the site is down or under maintenance
    }
});
