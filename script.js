// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Mobile Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn?.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  navLinks?.classList.toggle('active');
});

// Parallax Effect
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const parallaxElements = document.querySelectorAll('.parallax');
  
  parallaxElements.forEach(element => {
    const speed = element.dataset.speed || 0.5;
    element.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

// Animated Counter
const counters = document.querySelectorAll('.number');
const speed = 200; // Lower this number for faster increment

// Function to animate counters
const animateCounter = (counter) => {
  const target = +counter.dataset.target;
  let count = 0;
  const increment = target / speed;
  
  const updateCounter = () => {
    if (count < target) {
      count += increment;
      counter.innerText = Math.ceil(count);
      requestAnimationFrame(updateCounter);
    } else {
      counter.innerText = target;
    }
  };
  updateCounter();
};

// Intersection Observer for detecting when stats section comes into view
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('aos-animate');
      // Start the counter animation when the stats section is in view
      const countersInView = entry.target.querySelectorAll('.number');
      countersInView.forEach(counter => animateCounter(counter));
      observer.unobserve(entry.target); // Stop observing after animation starts
    }
  });
}, {
  threshold: 0.1 // Trigger when 10% of the section is in view
});

// Observe the stats section for animation trigger
document.querySelectorAll('.stats').forEach(section => {
  observer.observe(section);
});

// Glass Header Effect
const header = document.querySelector('.glass-header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header?.classList.add('scrolled');
  } else {
    header?.classList.remove('scrolled');
  }
});

// Cursor Effect
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});
