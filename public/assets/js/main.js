import {
  renderAbout,
  renderFaq,
  renderMethod,
  renderPlans,
  renderTestimonials,
} from './dom/render-sections.js';
import {
  setupForm,
  setupNavigation,
  setupScrollEffects,
  setupSeoAndHero,
} from './dom/ui-interactions.js';

document.addEventListener('DOMContentLoaded', () => {
  setupSeoAndHero();
  renderAbout();
  renderMethod();
  renderPlans();
  renderTestimonials();
  renderFaq();
  setupForm();
  setupNavigation();
  setupScrollEffects();
});
