document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple form validation
    if (name && email && message) {
        alert("Thank you, " + name + "! Your message has been received.");
        document.getElementById('contact-form').reset(); // Clear the form
    } else {
        alert("Please fill out all fields.");
    }
});
