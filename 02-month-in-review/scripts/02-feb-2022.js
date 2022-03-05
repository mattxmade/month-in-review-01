const backToTop = document.querySelector('.sticky-button');

backToTop.addEventListener('click', () => {
  document.body.scrollIntoView({
    behavior: "smooth",
  });
});