document.addEventListener('DOMContentLoaded', () => {
  const navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll('.navbar-burger'),
    0,
  );

  if (navbarBurgers.length === 0) return;

  navbarBurgers.forEach((el) => {
    el.addEventListener('click', () => {
      const target = el.dataset.target;
      if (!target) return;

      const targetEl = document.getElementById(target);
      if (!targetEl) return;

      el.classList.toggle('is-active');
      targetEl.classList.toggle('is-active');
    });
  });
});
