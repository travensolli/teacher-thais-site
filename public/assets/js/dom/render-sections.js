import SITE from '../data/site-data.js';
import { createElementFromHTML } from './dom-utils.js';

export const renderAbout = () => {
  const chipsEl = document.getElementById('sobre-chips');
  if (chipsEl) {
    SITE.chips.forEach((chip) => {
      const span = document.createElement('span');
      span.className = 'chip';
      span.textContent = chip;
      chipsEl.appendChild(span);
    });
  }

  const featuresEl = document.getElementById('sobre-features');
  if (featuresEl) {
    SITE.features.forEach((feature) => {
      const item = createElementFromHTML(
        `<div class="feature-item" role="listitem"><i class="fas ${feature.icon}" aria-hidden="true"></i><span>${feature.text}</span></div>`
      );
      featuresEl.appendChild(item);
    });
  }
};

export const renderMethod = () => {
  const methodGrid = document.getElementById('metodo-grid');
  if (!methodGrid) return;

  SITE.steps.forEach((step) => {
    const card = createElementFromHTML(
      `<div class="metodo-card fade-in" role="listitem"><div class="metodo-num">${step.n}</div><h3>${step.title}</h3><p>${step.desc}</p></div>`
    );
    methodGrid.appendChild(card);
  });
};

export const renderPlans = () => {
  const plansGrid = document.getElementById('plans-grid');
  if (!plansGrid) return;

  SITE.plans.forEach((plan, index) => {
    const featured = index === 1;
    const tag = plan.tag && featured ? `<div class="plan-popular-tag">${plan.tag}</div>` : '';
    const features = plan.features
      .map((feature) => `<div class="plan-feature">${feature}</div>`)
      .join('');
    const ctaClass = featured ? 'btn-white' : 'btn-primary';

    const card = createElementFromHTML(
      `<div class="plan-card fade-in${featured ? ' featured' : ''}" role="listitem">${tag}<h3>${plan.name}</h3><div class="plan-price">${plan.price}</div><div class="plan-period">${plan.period}</div><div class="plan-price-detail">${plan.pricePerClass}</div><div class="plan-features">${features}</div><a href="${SITE.bookingLink}" class="btn ${ctaClass}" target="_blank" rel="noopener noreferrer">${plan.cta}</a></div>`
    );

    plansGrid.appendChild(card);
  });
};

export const renderTestimonials = () => {
  const testimonialsGrid = document.getElementById('testimonials-grid');
  if (!testimonialsGrid) return;

  SITE.testimonials.forEach((testimonial) => {
    let stars = '';
    for (let index = 0; index < testimonial.stars; index += 1) {
      stars += '<i class="fas fa-star" aria-hidden="true"></i>';
    }

    const card = createElementFromHTML(
      `<div class="testi-card fade-in" role="listitem"><div class="testi-quote">"</div><div class="testi-header"><div class="testi-avatar" aria-hidden="true">${testimonial.initials}</div><div><div class="testi-name">${testimonial.name}</div><div class="testi-role">${testimonial.role}</div></div></div><div class="testi-stars" aria-label="${testimonial.stars} estrelas">${stars}</div><p class="testi-text">"${testimonial.text}"</p></div>`
    );

    testimonialsGrid.appendChild(card);
  });
};

export const renderFaq = () => {
  const faqList = document.getElementById('faq-list');
  if (!faqList) return;

  SITE.faq.forEach((faq, index) => {
    const uid = `faq-a-${index}`;
    const item = createElementFromHTML(
      `<div class="faq-item" role="listitem"><button class="faq-q" aria-expanded="false" aria-controls="${uid}" id="faq-q-${index}"><span>${faq.q}</span><i class="fas fa-plus" aria-hidden="true"></i></button><div class="faq-a" id="${uid}" role="region" aria-labelledby="faq-q-${index}"><div class="faq-a-inner">${faq.a}</div></div></div>`
    );

    faqList.appendChild(item);

    const button = item.querySelector('.faq-q');
    button.addEventListener('click', () => {
      const open = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach((faqItem) => {
        faqItem.classList.remove('open');
        const faqButton = faqItem.querySelector('.faq-q');
        if (faqButton) faqButton.setAttribute('aria-expanded', 'false');
      });

      if (!open) {
        item.classList.add('open');
        button.setAttribute('aria-expanded', 'true');
      }
    });
  });
};
