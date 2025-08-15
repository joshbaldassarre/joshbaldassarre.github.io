// This is style-script.js


console.log("Running style-script.js");

function toggleMenu() {
  const div = document.getElementById("navigation-menu-toggle");
  const divcontent = document.getElementById("content-toggle");
  div.classList.toggle("close-navigation");
  divcontent.classList.toggle("hide-page-contents");
}

////////////////////////////////////////////////////////////////////

// This function runs when the page loads.
document.addEventListener('DOMContentLoaded', (event) => {
  const welcomeMessage = document.getElementById('welcome-message');

  // Check if a 'dismissed' key exists in sessionStorage for this tab.
  if (sessionStorage.getItem('dismissed') === 'true') {
    // If it exists, hide the message.
    welcomeMessage.classList.add('hidden');
  } else {
    // If it doesn't exist, show the message by removing the 'hidden' class.
    welcomeMessage.classList.remove('hidden');
  }
});

// This function is called when the user clicks the "Got it!" button.
function hideWelcomeMessage() {
  const welcomeMessage = document.getElementById('welcome-message');
  welcomeMessage.classList.add('hidden');

  // Set the 'dismissed' key in sessionStorage to 'true'.
  // This will persist for the current tab session.
  sessionStorage.setItem('dismissed', 'true');
}