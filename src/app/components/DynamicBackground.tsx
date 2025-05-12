

// Variables
var i = 0;
var images = [];
var credit = [];
var slideTime = 15000; //15 Seconds

function changePicture() {
  document.body.style.backgroundImage = "url(" + images[i] + ")";

  if (i < images.length - 1) {
      i++;
  } else {
        i = 0;
  }
  setTimeout(changePicture, slideTime);
  }

  window.onload = changePicture;
