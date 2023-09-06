// Get a reference to the CTA button
const ctaButton = document.getElementById('cta-button');

// Attach the onclick event handler
ctaButton.addEventListener('click', function() {
  // Check if we're on a mobile screen size
  if (window.innerWidth <= 768) {
    // Initiate a phone call
    window.location.href = 'tel:+1234567890';
  } else {
    // Scroll to the contact form
    const formElement = document.getElementById('contact-form');
    formElement.scrollIntoView({ behavior: 'smooth' });
  }
});
