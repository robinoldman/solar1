document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".carousel-image");
  let currentImageIndex = 0;

  function showImage(index) {
    images.forEach((image, i) => {
      if (i === index) {
        image.style.display = "block";
      } else {
        image.style.display = "none";
      }
    });
  }

  function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
  }

  showImage(currentImageIndex);
  setInterval(nextImage, 5000); // Switch images every 5 seconds (5000 milliseconds).
});
