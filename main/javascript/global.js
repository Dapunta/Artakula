// Viewport

window.visualViewport.addEventListener('resize', function() {
    if (window.innerHeight < window.visualViewport.height) {
        document.body.style.height = `${window.visualViewport.height}px`;
    }
    else {
        document.body.style.height = '100vh';
    }
});

// Disable All Action

document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

document.addEventListener('DOMContentLoaded', function() {
    var elements = document.querySelectorAll('*');
    elements.forEach(function(element) {
        element.addEventListener('selectstart', function(event) {
            event.preventDefault();
        });
    });
});