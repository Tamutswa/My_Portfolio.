const backgroundDark = document.querySelector('.background-dark');
for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    const size = Math.random() * 3 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.animationDelay = `${Math.random() * 2}s`;
    backgroundDark.appendChild(star);
}

// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check saved theme or system preference
const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    body.classList.add('dark-mode');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
} else {
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', 'light');
    }
});

// Smooth scrolling for nav links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});


function scrollProjects(direction) {
    const container = document.getElementById('projectsScroll');
    const scrollAmount = 320;
    container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
    });
}

function toggleMode() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    
    // Optionally change button icon text based on mode
    const modeButton = document.getElementById('mode-toggle');
    modeButton.innerHTML = isDarkMode ? '🌞' : '🌙';  // Toggle between moon and sun
}

document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const form = e.target;
    const successMessage = document.getElementById("success-message");
  
    fetch("https://formspree.io/f/mgvabraa", {
      method: "POST",
      body: new FormData(form),
      headers: {
        Accept: "application/json",
      },
    })
      .then(response => {
        if (response.ok) {
          form.reset();
          successMessage.classList.remove("d-none");
        } else {
          alert("Oops! Something went wrong. Please try again.");
        }
      })
      .catch(error => {
        console.error(error);
        alert("Oops! There was a problem submitting the form.");
      });
  });
  
// Resume preview modal functionality
document.addEventListener("DOMContentLoaded", () => {
  const resumePreview = document.querySelector(".resume-preview")
  const modal = document.getElementById("resumeModal")
  const modalImg = document.getElementById("resumeModalImg")
  const closeModal = document.querySelector(".close-modal")

  // Theme toggle functionality - integrate with existing toggle
  const themeToggle = document.querySelector(".theme-toggle") // Assuming this exists in your portfolio

  // Apply theme to resume section based on current theme
  function applyThemeToResumeSection() {
    const isDarkMode = document.body.classList.contains("dark-mode")
    const resumeSection = document.querySelector(".resume-section")

    if (resumeSection) {
      if (isDarkMode) {
        resumeSection.classList.add("dark-theme")
      } else {
        resumeSection.classList.remove("dark-theme")
      }
    }
  }

  // If theme toggle exists, add event listener
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      // The existing toggle should handle toggling dark-mode class
      // We just need to apply the theme to our resume section
      setTimeout(applyThemeToResumeSection, 50) // Small timeout to ensure the toggle has completed
    })
  }

  // Apply theme on initial load
  applyThemeToResumeSection()

  if (resumePreview && modal && modalImg) {
    resumePreview.addEventListener("click", () => {
      const thumbnailSrc = document.querySelector(".resume-thumbnail").src
      modal.style.display = "flex"
      modal.style.justifyContent = "center"
      modal.style.alignItems = "center"
      modalImg.src = thumbnailSrc.replace("-preview.jpg", "-full.jpg")
    })

    closeModal.addEventListener("click", () => {
      modal.style.display = "none"
    })

    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none"
      }
    })
  }

  // Track resume downloads
  const downloadButtons = document.querySelectorAll(".download-btn")

  downloadButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      const format = this.textContent.trim()
      console.log(`Resume downloaded in ${format}`)

      // You could implement actual tracking here with Google Analytics or similar
      // Example: gtag('event', 'download', { 'event_category': 'Resume', 'event_label': format });
    })
  })
})
