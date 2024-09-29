function openMenu(){
    const nav = document.querySelector('nav');
    nav.classList.toggle('open');
}
function closeMenu(){
    const nav = document.querySelector('nav');
    nav.classList.toggle('close');
}

// Function to redirect to home
function redirectToHome() {
    window.location.href = 'http://127.0.0.1:5500/Portfolio/index.html#home';  // Adjust the path to your home page if necessary
}

// Add event listener for beforeunload to set a flag in localStorage
window.addEventListener('beforeunload', function (event) {
    localStorage.setItem('pageReloaded', 'true');
});

// Check the flag in localStorage when the page loads
window.addEventListener('pageshow', function (event) {
    if (localStorage.getItem('pageReloaded') === 'true') {
        localStorage.removeItem('pageReloaded');  // Clear the flag
        redirectToHome();  // Redirect to the home page
    }
});