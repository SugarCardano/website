// Minimal JS for mobile menu accessibility
document.addEventListener('DOMContentLoaded', function(){
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.getElementById('mobile-menu');
  if(!toggle || !menu) return;
  toggle.addEventListener('click', function(){
    const expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', String(!expanded));
    if(expanded){
      menu.hidden = true;
    } else {
      menu.hidden = false;
    }
  });
});
