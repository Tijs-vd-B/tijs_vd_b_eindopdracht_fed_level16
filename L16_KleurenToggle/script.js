const elementBurger = document.getElementById("burger");
const menuUl = document.getElementById("menu");
const getColorList = document.querySelectorAll("#menu li");
const h1 = document.querySelector("h1");

// opens and closes the burger menu
const unhideList = () => {
  menuUl.classList.toggle("hidden");
  //   menuUl.style.visibility = "visible";
};
// elementBurger.addEventListener("mouseover", unhideList);
// elementBurger.addEventListener("mouseout", unhideList);
elementBurger.addEventListener("mousedown", unhideList);

getColorList.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    // console.log(e.target);
    // console.log(this.className);
    document.body.style.background = this.className;
    h1.innerHTML = this.className;
    unhideList();
  });
});
