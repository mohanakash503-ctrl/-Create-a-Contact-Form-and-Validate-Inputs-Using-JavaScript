document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); // prevent actual submission

    // Get inputs
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    // Error placeholders
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let messageError = document.getElementById("messageError");
    let successMsg = document.getElementById("successMsg");

    // Reset errors
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successMsg.textContent = "";

    // Validation flags
    let valid = true;

    // Name validation
    if (name === "") {
        nameError.textContent = "Name is required";
        valid = false;
    }

    // Email validation with regex
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
    if (email === "") {
        emailError.textContent = "Email is required";
        valid = false;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = "Enter a valid email address";
        valid = false;
    }

    // Message validation
    if (message === "") {
        messageError.textContent = "Message cannot be empty";
        valid = false;
    }

    // If all valid
    if (valid) {
        successMsg.textContent = "Form submitted successfully ✅";
        document.getElementById("contactForm").reset();
    }
});
