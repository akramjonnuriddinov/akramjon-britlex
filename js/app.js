const elToggleBtn = document.querySelector('.js-toggle-btn');
const elCloseBtn = document.querySelector('.js-close-btn');
const elSitenavWrapper = document.querySelector('.js-sitenav-wrapper');

if(elToggleBtn) {
  elToggleBtn.addEventListener('click', function() {
    elSitenavWrapper.classList.add('sitenav-wrapper--open');
  });
}

if(elCloseBtn) {
  elCloseBtn.addEventListener('click', function() {
    elSitenavWrapper.classList.remove('sitenav-wrapper--open');
  });
}