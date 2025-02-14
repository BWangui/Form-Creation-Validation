<script>
        function initializeValidation() {
            document.addEventListener("DOMContentLoaded", function() {
                // Select the form and feedback div
                const form = document.getElementById("registration-form");
                const feedbackDiv = document.getElementById("form-feedback");

                // Define a function for form validation logic
                function validateForm(event) {
                    event.preventDefault(); // Prevent default form submission

                    // Retrieve and trim user inputs
                    const username = document.getElementById("username").value.trim();
                    const email = document.getElementById("email").value.trim();
                    const password = document.getElementById("password").value.trim();

                    // Initialize validation variables
                    let isValid = true;
                    const messages = [];

                    // Username validation: Must be at least 3 characters long
                    if (username.length < 3) {
                        isValid = false;
                        messages.push("Username must be at least 3 characters long.");
                    }

                    // Email validation: Must contain '@' and '.'
                    if (!email.includes("@") || !email.includes(".")) {
                        isValid = false;
                        messages.push("Email must include both '@' and a domain (e.g., '.com').");
                    }

                    // Password validation: Must be at least 8 characters long
                    if (password.length < 8) {
                        isValid = false;
                        messages.push("Password must be at least 8 characters long.");
                    }

                    // Display feedback
                    feedbackDiv.style.display = "block"; // Make feedback div visible

                    if (isValid) {
                        // Success: Display success message
                        feedbackDiv.textContent = "Registration successful!";
                        feedbackDiv.style.color = "#28a745"; // Green color
                    } else {
                        // Failure: Display error messages
                        feedbackDiv.innerHTML = messages.join("<br>"); // Format messages with line breaks
                        feedbackDiv.style.color = "#dc3545"; // Red color
                    }
                }

                // Attach the validation function to the form's submit event
                form.addEventListener("submit", validateForm);
            });
        }

        // Call the function to initialize the validation
        initializeValidation();
    </script>