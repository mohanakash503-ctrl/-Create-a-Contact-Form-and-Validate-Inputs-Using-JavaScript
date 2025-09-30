document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); 

    // Get inputs
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();


    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let messageError = document.getElementById("messageError");
    let successMsg = document.getElementById("successMsg");

    
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successMsg.textContent = "";

    
    let valid = true;

    
    if (name === "") {
        nameError.textContent = "Name is required";
        valid = false;
    }

    
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
    if (email === "") {
        emailError.textContent = "Email is required";
        valid = false;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = "Enter a valid email address";
        valid = false;
    }

    
    if (message === "") {
        messageError.textContent = "Message cannot be empty";
        valid = false;
    }


    if (valid) {
        successMsg.textContent = "Form submitted successfully ✅";
        document.getElementById("contactForm").reset();
    }
});

