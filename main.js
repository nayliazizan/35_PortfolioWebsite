const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default scrolling behavior
    const targetSectionId = link.getAttribute('href').slice(1); // Extract target section ID
    const targetSection = document.getElementById(targetSectionId);
    targetSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to target
  });
});

