// this script listens to the "fileInput" tag and then prints out once the button has been pressed
// written in JavaScript

//alert('Welcome to the upload page! This page will upload a file or photo to local storage.'); // welcome message

// on page start

console.log('Page loaded!'); // print to console
console.log('') // print a blank line

// other

document.querySelector('#fileInput').addEventListener('click', function() { // when the file input changes
        console.warn('File Input has been clicked'); // print out to console
        console.log('')
});

document.querySelector('#buttonClick').addEventListener('click', function() { // when the button is clicked
        console.warn('Load Button has been clicked'); // print out to console
        console.log('')
});