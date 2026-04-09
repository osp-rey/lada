export default function productChange() {
  const products = document.querySelectorAll(".card-product");

  if (products.length) {
    products.forEach((product) => {
      const colorBtns = product.querySelectorAll(".color-btn");
      const feedbackBtn = product.querySelector(".card-product__feedback-btn");
      const title = product.querySelector(".card-product__title").textContent;

      if (colorBtns.length) {
        const img = product.querySelector(".card-product__img");
        colorBtns.forEach((color) => {
          color.addEventListener("click", () => {
            handlerChange(color);
          });
        });

        function handlerChange(color) {
          img.style.opacity = 0;

          setTimeout(() => {
            img.src = color.dataset.img;
            img.style.opacity = 1;
          }, 300);

          colorBtns.forEach((c) => c.classList.remove("_active"));
          color.classList.add("_active");

          changeFeedbackNote();
        }

        initColor();
        function initColor() {
          const currentColor = product.querySelector(".color-btn._active");
          img.src = currentColor.dataset.img;
        }
      }

      const complectationItems = product.querySelectorAll(".select-item");

      if (complectationItems.length) {
        const price = product.querySelector(".card-product__price .val");
        const list = product.querySelector(".card-product__list");
        const toggleList = product.querySelector(".card-product__toggle-list");

        complectationItems.forEach((item) => {
          item.addEventListener("click", () => {
            handlerChange(item);
          });
        });

        initComplectation();
        function initComplectation() {
          const currentComplectation = Array.from(complectationItems)[0];
          const listItems = currentComplectation.dataset.items.split(",");
          price.textContent = currentComplectation.dataset.price;

          listItems.forEach((i) => {
            const li = document.createElement("li");
            li.textContent = i;
            list.appendChild(li);
          });
          if (listItems.length > 2) {
            toggleList.classList.add("_active");
          }
        }
        function handlerChange(item) {
          const listItems = item.dataset.items.split(",");

          if (listItems.length) {
            list.style.opacity = 0;

            list.innerHTML = "";

            listItems.forEach((i) => {
              const li = document.createElement("li");
              li.textContent = i;
              list.appendChild(li);
            });

            setTimeout(() => {
              list.style.opacity = 1;
              list.classList.add("_hide");
            }, 300);

            if (listItems.length > 2) {
              toggleList.classList.add("_active");
            } else {
              toggleList.classList.remove("_active");
            }
            changeFeedbackNote();
          }

          price.style.opacity = 0;
          setTimeout(() => {
            price.textContent = item.dataset.price;
            price.style.opacity = 1;
          }, 300);
        }

        toggleList.addEventListener("click", () => {
          if (list.classList.contains("_active")) {
            list.classList.remove("_show");
            toggleList.textContent = "Развернуть";

            setTimeout(() => {
              list.classList.remove("_active");
            }, 150);
          } else {
            list.classList.add("_active");
            toggleList.textContent = "Свернуть";

            setTimeout(() => {
              list.classList.add("_show");
            }, 100);
          }
        });
      }

      changeFeedbackNote();
      function changeFeedbackNote() {
        const complectation = product.querySelector(".select-input").value;
        const color = product.querySelector(".color-btn._active").dataset.name;

        feedbackBtn.setAttribute(
          "data-btn-note",
          `Цвет: ${color}, Комплектация: ${complectation}. ${title}`,
        );
      }
    });
  }
}
