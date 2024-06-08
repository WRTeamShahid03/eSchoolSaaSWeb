// swiper script 
document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".swiper-container", {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    // Close the modal when clicking outside of it
    window.addEventListener("click", function (event) {
        if (event.target == document.getElementById("eventModal")) {
            const modal = document.getElementById("eventModal");
            modal.style.display = "none";
            // Enable scrolling
            document.body.classList.remove("modal-open");
        }
    });
});



  // Get the modal
  var modal = document.getElementById("announcementModal");

  // Get the span that closes the modal
  var spanClose = document.getElementsByClassName("closeBtn")[0];

  // Get all the spans with the rightArr class
  var rightArrs = document.querySelectorAll(".rightArr");

  // Loop through each rightArr span and add a click event listener
  rightArrs.forEach(function(rightArr) {
    rightArr.addEventListener("click", function() {
      modal.style.display = "block";
      document.body.classList.add("modal-open"); // Disable body scroll
    });
  });

  // When the user clicks on <span> (x), close the modal
  spanClose.onclick = function() {
    modal.style.display = "none";
    document.body.classList.remove("modal-open"); // Enable body scroll
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      document.body.classList.remove("modal-open"); // Enable body scroll
    }
  }
