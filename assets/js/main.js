/**
 * Kasidi Rodrigue Mwinyi — Main Interactivity & Animations 2026
 */

document.addEventListener('DOMContentLoaded', () => {

  /* -------------------------------------------------------------------------- */
  /* 1. Animated Metrics Counter (IntersectionObserver)                         */
  /* -------------------------------------------------------------------------- */
  const metricEls = document.querySelectorAll('.metric-number');
  
  if (metricEls.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateMetrics();
          observer.disconnect();
        }
      });
    }, { threshold: 0.3 });

    observer.observe(metricEls[0]);
  }

  function animateMetrics() {
    const duration = 1500;
    const startTime = performance.now();

    function updateCounters(currentTime) {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      // Ease-out cubic formula
      const easeProgress = 1 - Math.pow(1 - progress, 3);

      metricEls.forEach(el => {
        const target = parseInt(el.getAttribute('data-target'), 10) || 0;
        const suffix = el.getAttribute('data-suffix') || '';
        const currentVal = Math.round(target * easeProgress);
        el.textContent = currentVal + suffix;
      });

      if (progress < 1) {
        requestAnimationFrame(updateCounters);
      }
    }

    requestAnimationFrame(updateCounters);
  }

  /* -------------------------------------------------------------------------- */
  /* 2. Projects Matrix Category Filtering                                      */
  /* -------------------------------------------------------------------------- */
  const catFilterBtns = document.querySelectorAll('.cat-chip');
  const projectCards = document.querySelectorAll('.project-card');

  catFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all chips
      catFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category') || '';
        if (filter === 'all' || category.includes(filter)) {
          card.style.display = 'flex';
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  /* -------------------------------------------------------------------------- */
  /* 3. Modal Handler (Audit Diagnostic Form)                                  */
  /* -------------------------------------------------------------------------- */
  const modal = document.getElementById('auditModal');
  const openModalBtns = document.querySelectorAll('.open-audit-modal');
  const closeModalBtn = document.querySelector('.modal-close');
  const auditForm = document.getElementById('auditForm');

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (modal) modal.classList.add('active');
    });
  });

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
      if (modal) modal.classList.remove('active');
    });
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  }

  if (auditForm) {
    auditForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert("Merci ! Votre demande d'audit gratuit a bien été prise en compte. Kasidi vous recontactera sous 24h.");
      if (modal) modal.classList.remove('active');
      auditForm.reset();
    });
  }

  /* -------------------------------------------------------------------------- */
  /* 4. Active Nav Highlight on Scroll                                         */
  /* -------------------------------------------------------------------------- */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= (sectionTop - 180)) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

});
