document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message!');
  });
  
  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
  });
  
  // Add fade-in animation on scroll
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
  
  // Add class for fade-in effect
  document.querySelectorAll('section').forEach(section => {
    section.classList.add('hidden');
  });
  
  // Toggle hamburger menu
  const toggleButton = document.querySelector('.toggle-button');
  const navbarLinks = document.querySelector('.navbar-links');
  
  toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
  });
  