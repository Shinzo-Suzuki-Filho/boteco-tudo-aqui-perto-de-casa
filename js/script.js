const button = document.getElementById("mobile-menu-button");
const menu = document.getElementById("mobile-menu");

// Mobile menu toggle
button.addEventListener("click", () => {
  const isExpanded = button.getAttribute("aria-expanded") === "true" || false;
  button.setAttribute("aria-expanded", !isExpanded);
  menu.classList.toggle("hidden");
});

// Navbar scroll effect - keep fixed at top
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Add scrolled class for background change only
  if (scrollTop > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  });
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-in");
    }
  });
}, observerOptions);

// Enhanced animations with stagger effect
const staggerObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }, index * 200); // Stagger delay
      }
    });
  },
  { threshold: 0.1 }
);

// Observe elements for animation
document.addEventListener("DOMContentLoaded", () => {
  // Add animation classes to elements
  const animateElements = document.querySelectorAll(
    ".timeline-item, .card-hover, .blog-card, .feedback-card"
  );
  animateElements.forEach((el) => observer.observe(el));

  // Add fade-in animation to sections with stagger
  const sections = document.querySelectorAll("section");
  sections.forEach((section, index) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    section.style.transitionDelay = `${index * 0.1}s`;

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionObserver.observe(section);
  });

  // Add hover effects for interactive elements
  const interactiveElements = document.querySelectorAll(
    ".card-hover, .blog-card, .feedback-card"
  );
  interactiveElements.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      el.style.transform = "translateY(-5px) scale(1.02)";
    });
    el.addEventListener("mouseleave", () => {
      el.style.transform = "translateY(0) scale(1)";
    });
  });

  // Enhanced form validation with visual feedback
  const form = document.querySelector("form");
  if (form) {
    const inputs = form.querySelectorAll("input, textarea");
    inputs.forEach((input) => {
      input.addEventListener("blur", () => {
        if (input.value.trim() !== "") {
          input.classList.add("valid");
        } else {
          input.classList.remove("valid");
        }
      });
    });
  }
});

// Form validation and enhancement
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    // Add loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = "Enviando...";
    submitBtn.disabled = true;

    // Simulate form submission (replace with actual submission logic)
    setTimeout(() => {
      submitBtn.textContent = "Mensagem Enviada!";
      submitBtn.style.background = "#2AA89D";

      setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        submitBtn.style.background = "";
        form.reset();
      }, 2000);
    }, 1000);
  });
}

// Add loading animation to images
document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("load", () => {
    img.style.opacity = "0";
    img.style.transition = "opacity 0.5s ease";
    setTimeout(() => (img.style.opacity = "1"), 100);
  });
});
