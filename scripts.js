// Initial state
let lastScrollTop = 0; // Tracks the last scroll position
const navbar = document.querySelector('.sticky-header'); // Reference to your navbar
const navbarHeight = navbar.offsetHeight; // Height of your navbar

window.onscroll = function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop && currentScroll > 300) {
        // Scroll Down
        navbar.style.top = `-${navbarHeight}px`; // Slide up
    } else {
        // Scroll Up
        navbar.style.top = '0'; // Slide down
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
};
