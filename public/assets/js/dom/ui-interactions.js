import SITE from '../data/site-data.js';
import { setText, setHref } from './dom-utils.js';

const wa = (phone, message) =>
  `https://wa.me/${phone}${message ? `?text=${encodeURIComponent(message)}` : ''}`;
const waMsg = (formData) =>
  `Olá, Teacher Thaís! Vim pelo site e gostaria de agendar uma aula.\n\nNome: ${formData.name}\nE-mail: ${formData.email}\nWhatsApp: ${formData.phone}\nNível: ${formData.level || 'Não informado'}\nMensagem: ${formData.message || 'Nenhuma mensagem adicional.'}`;

export const setupSeoAndHero = () => {

  setText('hero-tagline', SITE.tagline);
  setText('hero-badge-text', `${SITE.title} · ${SITE.city}`);
  setText('hero-photo-name', SITE.name);
  setText('hero-photo-title', SITE.title);
  setText('stat-students', SITE.stats.students);
  setText('stat-years', SITE.stats.years);

  const heroRating = document.getElementById('stat-rating');
  if (heroRating) {
    heroRating.innerHTML = `${SITE.stats.rating} <i class="fas fa-star" aria-hidden="true"></i> <span style="font-size: 0.75rem; color: var(--color-text-muted); font-weight: normal; margin-left: 4px">(${SITE.stats.reviews} reviews)</span>`;
  }

  setHref('hero-cta-primary', SITE.bookingLink);
  setText('sobre-name', SITE.firstName);
  setText('sobre-bio', SITE.bioShort);
  setText('sobre-badge-num', SITE.stats.students);

  const quote = document.getElementById('sobre-quote');
  if (quote) {
    quote.innerHTML = `"${SITE.quote}" <cite id="sobre-cite">— ${SITE.name}</cite>`;
  }

  setHref('cta-booking-btn', SITE.bookingLink);

  const ctaWhatsApp = document.getElementById('cta-whatsapp-btn');
  if (ctaWhatsApp) {
    ctaWhatsApp.href = wa(
      SITE.whatsapp,
      'Olá, Teacher Thaís! Vim pelo site e gostaria de saber mais sobre as aulas.'
    );
  }

  const floatingWhatsApp = document.getElementById('whatsapp-float');
  if (floatingWhatsApp) {
    floatingWhatsApp.href = wa(
      SITE.whatsapp,
      'Olá, Teacher Thaís! Vim pelo site e gostaria de saber mais.'
    );
  }

  setText('footer-email-text', SITE.email);
  setHref('footer-email-link', `mailto:${SITE.email}`);
  setHref('footer-instagram', SITE.instagramUrl);
  setHref('footer-whatsapp', wa(SITE.whatsapp));
  setHref('footer-youtube', SITE.youtubeUrl);
  setHref('footer-phone-link', wa(SITE.whatsapp, 'Olá, Teacher Thaís!'));
  setHref('footer-booking-link', SITE.bookingLink);

  const footerCopy = document.getElementById('footer-copy');
  if (footerCopy) {
    footerCopy.textContent = `© ${new Date().getFullYear()} ${SITE.name}. Todos os direitos reservados.`;
  }
};

const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const validatePhone = (phone) => /^[0-9]{10,15}$/.test(phone.replace(/\D/g, ''));

export const setupForm = () => {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = {
      name: document.getElementById('form-name').value.trim(),
      email: document.getElementById('form-email').value.trim(),
      phone: document.getElementById('form-phone').value.trim(),
      level: document.getElementById('form-level').value,
      message: document.getElementById('form-message').value.trim(),
    };

    if (!formData.name) {
      alert('Por favor, informe seu nome.');
      return;
    }
    if (!formData.email || !validateEmail(formData.email)) {
      alert('Por favor, informe um e-mail válido.');
      return;
    }
    if (!formData.phone || !validatePhone(formData.phone)) {
      alert('Por favor, informe um WhatsApp válido (10-15 dígitos).');
      return;
    }

    window.open(wa(SITE.whatsapp, waMsg(formData)), '_blank', 'noopener noreferrer');
    form.reset();
  });
};

export const setupNavigation = () => {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (!hamburger || !mobileMenu) return;

  const closeMenu = () => {
    mobileMenu.classList.remove('open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    mobileMenu.setAttribute('aria-hidden', String(!isOpen));
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
    if (isOpen) hamburger.focus();
  });

  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
      closeMenu();
      hamburger.focus();
    }
  });
};

export const setupScrollEffects = () => {
  const nav = document.getElementById('nav');
  if (nav) {
    window.addEventListener(
      'scroll',
      () => {
        nav.classList.toggle('scrolled', window.scrollY > 20);
      },
      { passive: true }
    );
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.fade-in').forEach((element) => observer.observe(element));
};
