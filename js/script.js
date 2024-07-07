document.addEventListener("DOMContentLoaded", function() {
    loadHTML('header', '../include/header.html');
    loadHTML('footer', '../include/footer.html');
    loadHTML('sidebar', '../include/sidebar.html');
});

function loadHTML(elementId, url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error loading the HTML file:', error));
}
