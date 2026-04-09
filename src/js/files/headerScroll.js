export default function headerScroll() {
  const header = document.querySelector(".header");

  if (header) {
    const headerNav = document.querySelector(".header-nav");
    let lastScrollTop = 0;

    window.addEventListener("scroll", () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop && scrollTop > headerNav.clientHeight) {
        headerNav.classList.add("_scroll");
      } else {
        headerNav.classList.remove("_scroll");
      }

      lastScrollTop = scrollTop;
    });
  }
}
