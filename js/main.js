/* ============================================
   BOOK REVIEW BLOG — Main JavaScript
   Search, Filters, Animations, Interactions
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ---- Mobile Nav ----
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const navOverlay = document.querySelector('.nav-overlay');

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      navOverlay.classList.toggle('open', isOpen);
      menuToggle.textContent = isOpen ? '✕' : '☰';
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    if (navOverlay) {
      navOverlay.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navOverlay.classList.remove('open');
        menuToggle.textContent = '☰';
        document.body.style.overflow = '';
      });
    }

    // Close nav when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navOverlay.classList.remove('open');
        menuToggle.textContent = '☰';
        document.body.style.overflow = '';
      });
    });
  }

  // ---- Search ----
  const searchInput = document.getElementById('searchInput');
  const bookCards = document.querySelectorAll('.book-card');
  const noResults = document.querySelector('.no-results');
  const bookCount = document.querySelector('.book-count');

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const query = searchInput.value.toLowerCase().trim();
      let visibleCount = 0;

      bookCards.forEach(card => {
        const title = card.dataset.title ? card.dataset.title.toLowerCase() : '';
        const author = card.dataset.author ? card.dataset.author.toLowerCase() : '';
        const genre = card.dataset.genre ? card.dataset.genre.toLowerCase() : '';
        const matches = title.includes(query) || author.includes(query) || genre.includes(query);

        card.style.display = matches ? '' : 'none';
        if (matches) visibleCount++;
      });

      // Show/hide no results message
      if (noResults) {
        noResults.classList.toggle('visible', visibleCount === 0 && query.length > 0);
      }

      // Update count
      if (bookCount) {
        bookCount.textContent = `${visibleCount} ${visibleCount === 1 ? 'libro' : 'libri'}`;
      }
    });
  }

  // ---- Genre Filter Chips ----
  const chips = document.querySelectorAll('.chip');
  let activeGenre = 'tutti';

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      // Toggle active state
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      activeGenre = chip.dataset.genre || 'tutti';

      // Filter cards
      let visibleCount = 0;
      bookCards.forEach(card => {
        const cardGenre = card.dataset.genre ? card.dataset.genre.toLowerCase() : '';
        const searchQuery = searchInput ? searchInput.value.toLowerCase().trim() : '';
        const matchesGenre = activeGenre === 'tutti' || cardGenre === activeGenre.toLowerCase();
        const matchesSearch = !searchQuery ||
          (card.dataset.title && card.dataset.title.toLowerCase().includes(searchQuery)) ||
          (card.dataset.author && card.dataset.author.toLowerCase().includes(searchQuery));

        const visible = matchesGenre && matchesSearch;
        card.style.display = visible ? '' : 'none';
        if (visible) visibleCount++;
      });

      if (noResults) {
        noResults.classList.toggle('visible', visibleCount === 0);
      }

      if (bookCount) {
        bookCount.textContent = `${visibleCount} ${visibleCount === 1 ? 'libro' : 'libri'}`;
      }
    });
  });

  // ---- Scroll to Top Button ----
  const scrollTopBtn = document.querySelector('.scroll-top');

  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
    });

    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ---- Scroll Animations (Intersection Observer) ----
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.1
  };

  const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        animateOnScroll.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all book cards for scroll animation
  bookCards.forEach(card => {
    card.style.animationPlayState = 'paused';
    animateOnScroll.observe(card);
  });

  // ---- Update Book Count on Load ----
  if (bookCount) {
    bookCount.textContent = `${bookCards.length} ${bookCards.length === 1 ? 'libro' : 'libri'}`;
  }

  // ---- Dynamic Year in Footer ----
  const yearSpan = document.getElementById('currentYear');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

});
