// lets create a function to inert a gap for the item dynamically by creating a class for that element called flex-gap-number and inserting the number of
//pixels we need like flex-gap-50 to display this item as flex with 50 pixels gap;
// select all the elements in the dom tree
const allElements = document.querySelectorAll("*");

// for each one if it has a class called flex-gap-{number}, get that number and give this item display flex with gap matches this number.

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
// for all those slides dots

slides.forEach((slide) => {
  // only when a dot is clicked 
  slide.addEventListener("click", () => {
    //remove the active class from all
    slides.forEach((inertSlide) => {
      inertSlide.classList.remove(`active-slide`);
    });
    //add it to the current clicked one.
    slide.classList.add(`active-slide`);//
  });
});
// active li
const listItems = document.querySelectorAll(`.nav-bar ul li`);
listItems.forEach((li) => {
  // only when a dot is clicked
  li.addEventListener("click", () => {
    //remove the active class from all
    listItems.forEach((inertLi) => {
      inertLi.classList.remove(`active-li`);
    });
    //add it to the current clicked one.
    li.classList.add(`active-li`); //
  });
});


// Done
// ITI .NET FULL STACK
