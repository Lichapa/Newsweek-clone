var mobileNav = document.getElementById('mobile-nav');
var windowYOffset = window.scrollY;

//var topOffset = mobileNav.windowOffset;
window.addEventListener('scroll', switchToStickyNav);
function switchToStickyNav() {
  if (window.scrollY > 150 && window.innerWidth > 991) {
    mobileNav.style.display = 'inline-flex';
    mobileNav.style.position = 'fixed';
    console.log('offset bigger or equal to 150, Mobile nav visible');
  }else {
    mobileNav.style.display = 'none';
    console.log('Desktop Nav visible');
    console.log(window.scrollY);
  }
}
