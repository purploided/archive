// this code uploads a file or photo to local storage
// written in JavaScript
document.getElementById('fileInput').addEventListener('change', function() { // when the file input changes
    const reader = new FileReader(); // create a new file reader

    reader.addEventListener('load', function() { // when the file is loaded
      localStorage.setItem('image', reader.result); // store the file in local storage
    });

    reader.readAsDataURL(this.files[0]); // read file as data url
});

document.getElementById('buttonClick').addEventListener('click', function() { // when the button is clicked
  const recentImage = localStorage.getItem('image'); // get the image from local storage
  if (recentImage) { // if there is an image
    document.querySelector('#imgPreview').src = recentImage; // display the image
  }
});