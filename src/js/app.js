import "../scss/style.scss";
import burger from "./files/burger.js";
import buttonsNote from "./files/buttonsNote.js";
import headerScroll from "./files/headerScroll.js";
import inputmask from "./files/inputmask.js";
import map from "./files/map.js";
import productChange from "./files/productChange.js";
import selectHandler from "./files/select.js";
import sliders from "./files/sliders.js";
import spoller from "./files/spoller.js";

document.addEventListener("DOMContentLoaded", () => {
  burger();
  spoller();
  sliders();
  selectHandler();
  productChange();
  buttonsNote();
  inputmask();
  map();
  headerScroll();

  Fancybox.bind("[data-fancybox]", { closeButton: false });
  // Fancybox.show([{ src: "#modal-feedback", type: "inline" }], {
  //   closeButton: false,
  // });
});
