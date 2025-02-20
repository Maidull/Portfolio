document.querySelectorAll('.overlay').forEach(img => {
    img.addEventListener('click', function () {
        window.open(this.getAttribute('data-link'), '_blank'); 
    });
});

document.querySelectorAll('.mobile-img').forEach(img => {
    img.addEventListener('click', function () {
        window.open(this.getAttribute('data-link'), '_blank'); 
    });
});

const slide = document.querySelector(".slide");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let index = 0;
const totalSlides = document.querySelectorAll(".slide img").length;

nextBtn.addEventListener("click", () => {
    index = (index + 1) % totalSlides; // Chuyển sang ảnh tiếp theo (vòng lặp)
    slide.style.transform = `translateX(-${index * 100}%)`;
});

prevBtn.addEventListener("click", () => {
    index = (index - 1 + totalSlides) % totalSlides; // Quay lại ảnh trước
    slide.style.transform = `translateX(-${index * 100}%)`;
});

