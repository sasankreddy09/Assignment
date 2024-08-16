// Get the toggle button element by its ID
const toggleButton = document.getElementById('toggleButton');

// Get the body element of the document
const body = document.body;

// Get the icon element inside the button by its ID
const icon = document.getElementById('icon');

// Add a click event listener to the toggle button
toggleButton.addEventListener('click', function () {
    // Toggle the 'light-mode' class on the body element
    body.classList.toggle('light-mode');

    // Check if the body element has the 'light-mode' class
    if (body.classList.contains('light-mode')) {
        // If 'light-mode' is present, change the icon to a sun (for light mode)
        icon.classList.remove('fa-moon'); // Remove the moon icon class
        icon.classList.add('fa-sun');    // Add the sun icon class
    } else {
        // If 'light-mode' is not present, change the icon to a moon (for dark mode)
        icon.classList.remove('fa-sun'); // Remove the sun icon class
        icon.classList.add('fa-moon');    // Add the moon icon class
    }
});
