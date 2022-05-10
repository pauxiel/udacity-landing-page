window.addEventListener("scroll", function() {
  const header = this.document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

const items = document.getElementsByClassName("nav__item");
// console.log(item);
for (i = 0; i < items.length; i++) {
  items[i].addEventListener("click", function(e) {
    e.preventDefault();
    const current = document.getElementsByClassName("active");

    if (current.length > 0) {
      current[0].className = current[0].className.replace("active", "");
    }

    this.className += " active";
  });
}
