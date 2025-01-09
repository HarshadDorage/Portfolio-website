// Basic form validation example
const form = document.querySelector("form");
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name && email && message) {
    alert("Message sent successfully!");
    form.reset();
  } else {
    alert("Please fill in all fields.");
  }
});

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
  

