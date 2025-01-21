document.addEventListener("DOMContentLoaded", () => {
    // Form and feedback div selection
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");

    // Form submission event listener
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form submission

        // Retrieve user inputs and trim values
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // Validation logic
        let isValid = true;
        const messages = [];

        // Validate username
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        // Validate email
        if (!email.includes("@") || !email.includes(".")) {
            isValid = false;
            messages.push("Email must include both '@' and a domain (e.g., '.com').");
        }

        // Validate password
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        // Display feedback
        feedbackDiv.style.display = "block";
        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745"; // Success color
        } else {
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545"; // Error color
        }
    });
});