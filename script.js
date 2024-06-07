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
