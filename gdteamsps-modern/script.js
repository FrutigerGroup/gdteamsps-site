const menuBtn = document.getElementById('menuBtn');
const mainNav = document.getElementById('mainNav');
if(menuBtn){
  menuBtn.addEventListener('click', () => {
    const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', String(!expanded));
    mainNav.classList.toggle('show');
  });
}
