const star_container = document.querySelector(".star-container");
const stars = document.querySelectorAll(".star");
const count = document.getElementById("count");
let previous_clicked;

stars.forEach((star, index) => {
  star.setAttribute("data-index", index + 1);
});
//Mouse Click
star_container.addEventListener("click", function (e) {
  let currentClick = e.target.dataset.index;
  // console.log(currentClick);
  previous_clicked = currentClick;

  for (let i = 0; i < stars.length; i++) {
    stars[i].classList.remove("star-filled");
  }

  for (let i = 0; i < currentClick; i++) {
    stars[i].classList.add("star-filled");
  }

  count.innerHTML = `Rating Count:${currentClick}`;
});

//Mouse over

star_container.addEventListener("mouseover", function (e) {
  let currentClick = e.target.dataset.index;

  for (let i = 0; i < stars.length; i++) {
    stars[i].classList.remove("star-filled");
  }

  for (let i = 0; i < currentClick; i++) {
    stars[i].classList.add("star-filled");
  }
});

//mouse leave
star_container.addEventListener("mouseleave", function (e) {
  for (let i = 0; i < stars.length; i++) {
    stars[i].classList.remove("star-filled");
  }

  for (let i = 0; i < previous_clicked; i++) {
    stars[i].classList.add("star-filled");
  }
});
