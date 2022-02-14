document.getElementById('fileInput').addEventListener('click', function() { // when the button is clicked
    const scoreContent = document.getElementById('score').innerHTML;
    localStorage.setItem('score', scoreContent); // store the score in local storage
});


document.getElementById('buttonClick').addEventListener('click', function() { // when the button is clicked
    const grabScore = localStorage.getItem('score'); // get the score from local storage
    if (grabScore) { // if there is an score
        document.getElementById('score').innerHTML = grabScore; // display the score
    }
});