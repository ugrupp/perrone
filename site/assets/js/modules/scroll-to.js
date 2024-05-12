import SmoothScroll from 'smooth-scroll';

document.addEventListener('DOMContentLoaded', () => {
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
