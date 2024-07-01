document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Thank you for your message!');
});

//smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = this.getAttribute('href') === '#' ? 'html' : this.getAttribute('href');
      document.querySelector(target).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
      });
  });
});

//fade-in animation for scroll
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
      }
  });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});

//class for fade-in effect
document.querySelectorAll('section').forEach(section => {
  section.classList.add('hidden');
});

//toggle hamburger menu for small screens
const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-links');

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});
