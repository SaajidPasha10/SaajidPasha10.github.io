/**
 * Prince Saajid - Portfolio
 * Theme toggle, scroll progress, AOS, back to top, form handling
 */

(function () {
  'use strict';

  // --- Theme Toggle (Dark / Light) ---
  const themeKey = 'portfolio-theme';
  const html = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');
  const iconDark = document.querySelector('.theme-icon-dark');
  const iconLight = document.querySelector('.theme-icon-light');

  function getStoredTheme() {
    return localStorage.getItem(themeKey) || 'dark';
  }

  function setTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem(themeKey, theme);
    if (iconDark && iconLight) {
      if (theme === 'light') {
        iconDark.classList.add('d-none');
        iconLight.classList.remove('d-none');
      } else {
        iconDark.classList.remove('d-none');
        iconLight.classList.add('d-none');
      }
    }
  }

  function toggleTheme() {
    const current = html.getAttribute('data-theme') || 'dark';
    setTheme(current === 'dark' ? 'light' : 'dark');
  }

  setTheme(getStoredTheme());

  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }

  // --- Scroll Progress Bar ---
  const scrollProgress = document.getElementById('scrollProgress');
  function updateScrollProgress() {
    if (!scrollProgress) return;
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    scrollProgress.style.width = height > 0 ? (winScroll / height) * 100 + '%' : '0%';
  }
  window.addEventListener('scroll', updateScrollProgress);
  updateScrollProgress();

  // --- Back to Top ---
  const backToTop = document.getElementById('backToTop');
  function toggleBackToTop() {
    if (!backToTop) return;
    if (window.scrollY > 400) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  }
  window.addEventListener('scroll', toggleBackToTop);
  if (backToTop) {
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --- AOS (Animate on Scroll) ---
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 600,
      easing: 'ease-out-cubic',
      once: true,
      offset: 60
    });
  }

  // --- Smooth scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // --- Navbar shrink on scroll (optional) ---
  const mainNav = document.getElementById('mainNav');
  function onScrollNav() {
    if (!mainNav) return;
    if (window.scrollY > 50) {
      mainNav.classList.add('scrolled');
    } else {
      mainNav.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', onScrollNav);
  onScrollNav();

  // --- Contact Form ---
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = this.querySelector('button[type="submit"]');
      const originalText = btn ? btn.innerHTML : 'Send Message';
      if (btn) {
        btn.disabled = true;
        btn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status"></span>Sending...';
      }
      // For GitHub Pages: use Formspree or similar. Example: action="https://formspree.io/f/YOUR_ID"
      // Here we simulate success; replace with actual fetch to your form endpoint.
      setTimeout(function () {
        if (btn) {
          btn.disabled = false;
          btn.innerHTML = 'Message Sent ✓';
          contactForm.reset();
        }
        setTimeout(function () {
          if (btn) btn.innerHTML = originalText;
        }, 3000);
      }, 800);
    });
  }

  // --- GitHub stats (public API, no token) ---
  const githubUsername = 'SaajidPasha10';
  const repoCountEl = document.getElementById('repoCount');
  const followersCountEl = document.getElementById('followersCount');
  const displayRepoCount = 33; // Show 33 repositories

  if (repoCountEl) {
    repoCountEl.textContent = displayRepoCount;
  }

  function fetchGitHubStats() {
    fetch('https://api.github.com/users/' + githubUsername)
      .then(function (res) { return res.json(); })
      .then(function (data) {
        if (data.followers !== undefined && followersCountEl) {
          followersCountEl.textContent = data.followers;
        }
      })
      .catch(function () {
        if (followersCountEl) followersCountEl.textContent = '—';
      });
  }

  if (followersCountEl) {
    fetchGitHubStats();
  }

  // --- Hero particles (simple CSS-driven; no canvas needed) ---
  // Already handled in CSS; optional: add more dots via JS if desired
})();
