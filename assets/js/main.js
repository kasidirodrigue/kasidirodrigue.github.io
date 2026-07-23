/* ==========================================================================
   Kasidi Rodrigue Mwinyi - Portfolio Cyber-Génératif 2026
   JavaScript Interactive Controller
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Navbar scroll background effect
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Project Matrix View Toggle (Grid vs Timeline)
  const viewGridBtn = document.getElementById('viewGridBtn');
  const viewTimelineBtn = document.getElementById('viewTimelineBtn');
  const projectsGrid = document.getElementById('projectsGrid');
  const timelineWrapper = document.getElementById('timelineWrapper');
  const categoryFilters = document.getElementById('categoryFilters');

  if (viewGridBtn && viewTimelineBtn) {
    viewGridBtn.addEventListener('click', () => {
      viewGridBtn.classList.add('active');
      viewTimelineBtn.classList.remove('active');
      projectsGrid.style.display = 'grid';
      timelineWrapper.style.display = 'none';
      categoryFilters.style.display = 'flex';
    });

    viewTimelineBtn.addEventListener('click', () => {
      viewTimelineBtn.classList.add('active');
      viewGridBtn.classList.remove('active');
      projectsGrid.style.display = 'none';
      timelineWrapper.style.display = 'block';
      categoryFilters.style.display = 'none';
    });
  }

  // Category Filtering for Grid View
  const catChips = document.querySelectorAll('.cat-chip');
  const projectCards = document.querySelectorAll('.project-card');

  catChips.forEach(chip => {
    chip.addEventListener('click', () => {
      catChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      const filter = chip.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Metrics Counter Animation
  const metricValues = document.querySelectorAll('.metric-value');
  let animated = false;

  const animateCounters = () => {
    metricValues.forEach(counter => {
      const targetStr = counter.getAttribute('data-target');
      const hasPlus = targetStr.includes('+');
      const hasDot = targetStr.includes('.');
      const numericTarget = parseFloat(targetStr.replace('+', ''));
      
      let current = 0;
      const duration = 2000;
      const stepTime = 30;
      const steps = duration / stepTime;
      const increment = numericTarget / steps;

      const timer = setInterval(() => {
        current += increment;
        if (current >= numericTarget) {
          current = numericTarget;
          clearInterval(timer);
        }
        
        let formatted = hasDot ? current.toFixed(1) : Math.floor(current).toString();
        if (hasPlus) formatted += '+';
        counter.textContent = formatted;
      }, stepTime);
    });
  };

  // Intersection Observer for scroll triggers
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animateCounters();
        animated = true;
      }
    });
  }, { threshold: 0.3 });

  const metricsSection = document.querySelector('.metrics-section');
  if (metricsSection) {
    observer.observe(metricsSection);
  }

  // Modal Dialog Controller (Audit Booking & Project Detail)
  const auditModal = document.getElementById('auditModal');
  const openAuditBtns = document.querySelectorAll('.open-audit-modal');
  const closeModalBtns = document.querySelectorAll('.modal-close');

  openAuditBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (auditModal) auditModal.classList.add('active');
    });
  });

  closeModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (auditModal) auditModal.classList.remove('active');
    });
  });

  window.addEventListener('click', (e) => {
    if (e.target === auditModal) {
      auditModal.classList.remove('active');
    }
  });

  // Form submission feedback
  const auditForm = document.getElementById('auditForm');
  if (auditForm) {
    auditForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Merci ! Votre demande d\'audit diagnostic a été enregistrée. Kasidi vous recontactera sous 24h.');
      if (auditModal) auditModal.classList.remove('active');
    });
  }
});
