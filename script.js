document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const navbarMenu = document.getElementById('navbar-menu');
    const hamburger = document.getElementById('hamburger');
    const sections = document.querySelectorAll('.section');
    
    // Toggle navbar menu visibility
    hamburger.addEventListener('click', () => {
        navbarMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Hide navbar on section click
    document.querySelectorAll('#navbar-menu a').forEach(anchor => {
        anchor.addEventListener('click', () => {
            navbarMenu.classList.remove('active');
            hamburger.classList.remove('active');
            navbar.style.top = '-60px'; // Adjust this value based on the height of your navbar
            setTimeout(() => navbar.style.top = '0', 300); // Reset position after hiding
        });
    });

    // Show navbar on scroll
    let lastScrollTop = 0;
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            // Scrolling down
            navbar.style.top = '-60px'; // Adjust this value based on the height of your navbar
        } else {
            // Scrolling up
            navbar.style.top = '0';
        }
        lastScrollTop = scrollTop;
    });
});
/*BATAS*/
document.addEventListener('scroll', function() {
    const img = document.querySelector('.img-container img');
    const scrolled = window.scrollY;
    img.style.transform = `translateY(${scrolled * 0.5}px)`;
});

/*BATAS*/
let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    navbar.classList.add('scroll-down');
    navbar.classList.remove('scroll-up');
  } else {
    navbar.classList.add('scroll-up');
    navbar.classList.remove('scroll-down');
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});
/*BATAS*/
/*BATAS*/
/*BATAS*/   