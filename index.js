window.addEventListener('scroll', function() {
    const header = document.getElementById('myHeader');
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    const scrollThreshold = windowHeight / 4;

    if (scrollPosition < scrollThreshold) {
        header.style.transition = 'background-color 1s ease';
        header.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    } else {
        header.style.transition = 'background-color 1s ease';
        header.style.backgroundColor = 'rgba(0, 0, 0, 1)';
    }
});





function openIframe() {
    document.getElementById('iframeContainer').style.display = 'block';
}

function closeIframe() {
    const iframeContainer = document.getElementById('iframeContainer');
    iframeContainer.style.display = 'none';
}
