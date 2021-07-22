const scrollButton = document.getElementById("scrollBtn");
const scrollTop = 590;

window.onscroll = () => {
  scroll();
};

function scroll() {
  if (
    document.body.scrollTop > scrollTop ||
    document.documentElement.scrollTop > scrollTop
  ) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
