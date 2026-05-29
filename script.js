// MOBILE MENU

const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// HERO SLIDER

const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(index){

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  slides[index].classList.add("active");
}

function nextSlide(){

  currentSlide++;

  if(currentSlide >= slides.length){
    currentSlide = 0;
  }

  showSlide(currentSlide);
}

setInterval(nextSlide, 4000);

// WHATSAPP FORM

const form = document.getElementById("whatsappForm");

form.addEventListener("submit", function(e){

  e.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const service = document.getElementById("service").value;
  const details = document.getElementById("details").value;

  const message =
`طلب خدمة جديد

الاسم:
${name}

رقم الجوال:
${phone}

الخدمة المطلوبة:
${service}

تفاصيل الطلب:
${details}`;

  const whatsappURL =
`https://wa.me/966563259401?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, "_blank");

});