
document.getElementById('openDoorsButton').addEventListener('click', function() {
    var linkContainer = document.getElementById('linkContainer');
    var openDoorsButton = document.getElementById('openDoorsButton');
    var backButton = document.getElementById('backButton');

    if (linkContainer.style.display === 'none') {
        linkContainer.style.display = 'flex';
        openDoorsButton.style.display = 'none';
        backButton.style.display = 'block';
    } else {
        linkContainer.style.display = 'none';
        openDoorsButton.style.display = 'block';
        backButton.style.display = 'none';
    }
});

document.getElementById('backButton').addEventListener('click', function() {
    var linkContainer = document.getElementById('linkContainer');
    var openDoorsButton = document.getElementById('openDoorsButton');
    var backButton = document.getElementById('backButton');

    linkContainer.style.display = 'none';
    openDoorsButton.style.display = 'block';
    backButton.style.display = 'none';
});

