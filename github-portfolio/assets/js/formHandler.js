// formHandler.js

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission

            // Provide feedback to the user
            alert('Thank you for your message! We will get back to you soon.');

            // Optionally clear the form fields
            contactForm.reset();
        });
    }
});
