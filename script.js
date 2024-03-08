document.addEventListener("DOMContentLoaded", function() {
    var sections = document.querySelectorAll('header,summary,sub,section,article,footer');
    var navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', function() {
        var currentSection = '';

        sections.forEach(function(section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(function(link) {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === currentSection) {
                link.classList.add('active');
            }
        });
    });

    const images = document.querySelectorAll("#image-carousel .images img");
    let currentIndex = 0;
  
    setInterval(() => {
      images[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % images.length;
      images[currentIndex].classList.add('active');
    }, 2000); // Adjust interval time as needed
});
