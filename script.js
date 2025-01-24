// Select form and navigation elements
const form = document.querySelector("form");
const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");

// Form validation logic
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name && email && message) {
      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }
      alert("Message sent successfully!");
      form.reset();
    } else {
      alert("Please fill in all fields.");
    }
  });
}

// Mobile menu toggle logic
if (mobileMenu && navLinks) {
  mobileMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// Scroll-based active navigation link highlighting with debouncing
let scrollTimeout;
document.addEventListener("scroll", () => {
  if (scrollTimeout) clearTimeout(scrollTimeout);

  scrollTimeout = setTimeout(() => {
    const sections = document.querySelectorAll("section");
    const navLinksArray = document.querySelectorAll(".nav-links a");
    let currentSectionId = "";

    // Determine the current section in view
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
        currentSectionId = section.getAttribute("id");
      }
    });

    // Update active navigation link styles
    navLinksArray.forEach((link) => {
      link.classList.remove("text-blue-500"); // Remove active style
      if (link.getAttribute("href").includes(currentSectionId)) {
        link.classList.add("text-blue-500"); // Add active style
      }
    });
  }, 100); // Debounce timeout of 100ms
});

// Smooth scrolling for navigation links
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const targetId = link.getAttribute("href").replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  });
});
