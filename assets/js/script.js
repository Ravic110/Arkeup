document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (mobileMenuToggle && navLinks) {
    mobileMenuToggle.setAttribute('aria-expanded', 'false');

    mobileMenuToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('active');
      mobileMenuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
    anchor.addEventListener('click', event => {
      const targetId = anchor.getAttribute('href');
      const target = targetId ? document.querySelector(targetId) : null;

      if (target) {
        event.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    const params = new URLSearchParams(window.location.search);
    if (params.get('sent') === '1') {
      alert('Votre message a bien ete envoye. Nous vous repondrons rapidement.');
      window.history.replaceState({}, document.title, window.location.pathname);
    }

    contactForm.addEventListener('submit', event => {
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const subject = document.getElementById('subject').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !email || !subject || !message) {
        event.preventDefault();
        alert('Veuillez remplir tous les champs du formulaire.');
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        event.preventDefault();
        alert('Veuillez entrer une adresse email valide.');
        return;
      }
    });
  }

  const scrollToTopBtn = document.getElementById('scrollToTopBtn');

  if (scrollToTopBtn) {
    window.addEventListener('scroll', () => {
      scrollToTopBtn.style.display = window.pageYOffset > 300 ? 'block' : 'none';
    });

    scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  const shouldReduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (shouldReduceMotion || !('IntersectionObserver' in window)) {
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  });

  document.querySelectorAll('.card, .about-content, .section').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
  });
});
