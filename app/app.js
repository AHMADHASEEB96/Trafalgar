const allElements = document.querySelectorAll("*");

allElements.forEach((el) => {
  const elClassList = el.classList;
  elClassList.forEach((elClass) => {
    if (elClass.startsWith(`flex-gap`)) {
      const elFlexGapPixels = Number(elClass.slice(9));
      el.style.cssText = `display:flex; gap:${elFlexGapPixels}px;`;
    }
  });
});

const slides = document.querySelectorAll(`.slider-dots span`);

slides.forEach((slide) => {
  slide.addEventListener("click", () => {
    slides.forEach((inertSlide) => {
      inertSlide.classList.remove(`active-slide`);
    });

    slide.classList.add(`active-slide`);
  });
});

const listItems = document.querySelectorAll(`.nav-bar ul li`);
listItems.forEach((li) => {
  li.addEventListener("click", () => {
    listItems.forEach((inertLi) => {
      inertLi.classList.remove(`active-li`);
    });

    li.classList.add(`active-li`);
  });
});

// const up = document.getElementById(`scroll-up`);

// console.log(up.offsetTop);

// window.addEventListener(`scroll`, () => {
//   console.log(document.body.scrollTop);
// });

// if (up.offsetTop < 1200) {
//   up.classList.add(`hidden`);
// } else {
//   up.classList.remove(`hidden`);
// }
