import SmoothScroll from 'smooth-scroll/dist/js/smooth-scroll.js';

document.addEventListener('DOMContentLoaded', (event) => {
  new SmoothScroll('[data-scroll-top]', {
    speed: 750,
    easing: 'easeOutQuad',
  });

  new SmoothScroll('[data-menu-link]', {
    speed: 750,
    easing: 'easeOutQuad',
    offset: 100, // topbar height
  });
});
