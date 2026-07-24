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
  /* -------------------------------------------------------------------------- */
  /* 5. Interactive Particle Constellation Hero Canvas (De Landing.dc.html)     */
  /* -------------------------------------------------------------------------- */
  const canvas = document.getElementById('heroCanvas');
  if (canvas) {
    initHeroConstellation(canvas);
  }

  function initHeroConstellation(canvas) {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Palette harmonisée : Gold (#e0ad4e) et Cyan (#60cedc)
    const A1 = [224, 173, 78], A2 = [96, 206, 220];
    let W = 0, H = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);
    let nodes = [];
    const mouse = { x: -9999, y: -9999, active: false };

    const lerp = (a, b, t) => a.map((v, i) => v + (b[i] - v) * t);
    const rgba = (c, a) => `rgba(${c[0]|0},${c[1]|0},${c[2]|0},${a})`;

    const build = () => {
      nodes = [];
      const N = Math.round((W * H) / 12000);
      for (let i = 0; i < N; i++) {
        nodes.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          r: 1.2 + Math.random() * 1.8,
          t: Math.random()
        });
      }
    };

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const r = parent.getBoundingClientRect();
      W = r.width;
      H = r.height;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      build();
    };

    const DIST = 140;
    let animId = null;

    const frame = () => {
      ctx.clearRect(0, 0, W, H);
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;

        if (mouse.active) {
          const dx = n.x - mouse.x, dy = n.y - mouse.y, d2 = dx * dx + dy * dy;
          if (d2 < 18000 && d2 > 0.01) {
            const f = (18000 - d2) / 18000 * 0.85, d = Math.sqrt(d2);
            n.vx += (dx / d) * f;
            n.vy += (dy / d) * f;
          }
        }
        n.vx = Math.max(-1.5, Math.min(1.5, n.vx));
        n.vy = Math.max(-1.5, Math.min(1.5, n.vy));
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j], dx = a.x - b.x, dy = a.y - b.y, d = Math.sqrt(dx * dx + dy * dy);
          if (d < DIST) {
            const alpha = (1 - d / DIST) * 0.45, col = lerp(A1, A2, (a.t + b.t) / 2);
            ctx.strokeStyle = rgba(col, alpha);
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const n of nodes) {
        const col = lerp(A1, A2, n.t);
        const pulse = 0.55 + 0.45 * Math.sin(Date.now() * 0.0012 + n.t * 8);
        ctx.fillStyle = rgba(col, 0.85);
        ctx.shadowColor = rgba(col, 0.9);
        ctx.shadowBlur = 8 * pulse;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }
      animId = requestAnimationFrame(frame);
    };

    window.addEventListener('mousemove', (e) => {
      const r = canvas.getBoundingClientRect();
      if (e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom) {
        mouse.x = e.clientX - r.left;
        mouse.y = e.clientY - r.top;
        mouse.active = true;
      } else {
        mouse.active = false;
      }
    });

    window.addEventListener('mouseleave', () => {
      mouse.active = false;
      mouse.x = -9999;
      mouse.y = -9999;
    });

    resize();
    window.addEventListener('resize', resize);
    animId = requestAnimationFrame(frame);
  }

});

