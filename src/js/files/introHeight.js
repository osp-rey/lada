export default function introHeight() {
  const intro = document.querySelector(".s-intro");

  if (intro && window.matchMedia("(max-width: 991px)").matches) {
    function updateHeightIntro() {
      intro.style.minHeight = `${window.visualViewport.height}px`;
    }

    window.visualViewport.addEventListener("resize", updateHeightIntro);
    window.visualViewport.addEventListener("scroll", updateHeightIntro);

    updateHeightBurger();
  }
}
