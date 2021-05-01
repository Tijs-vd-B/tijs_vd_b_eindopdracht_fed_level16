const elementBurger = document.getElementById("burger");
const entireNav = document.getElementById("menu-container");
const menuUl = document.getElementById("menu");
const getColorList = document.querySelectorAll("#menu li");
const h1 = document.querySelector("h1");

// opens and closes the burger menu
const hideList = () => {
  menuUl.classList.remove("shown");
  menuUl.classList.add("hidden");
  //   menuUl.style.visibility = "visible";
};
const unhideList = () => {
  menuUl.classList.remove("hidden");
  menuUl.classList.add("shown");
  //   menuUl.style.visibility = "visible";
};
// elementBurger.addEventListener("mouseover", unhideList);
// elementBurger.addEventListener("mouseout", unhideList);
elementBurger.addEventListener("mouseover", unhideList);
entireNav.addEventListener("mouseleave", hideList);
elementBurger.addEventListener("click", hideList);

getColorList.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    // console.log(e.target);
    // console.log(this.className);
    document.body.style.background = this.className;
    h1.innerHTML = this.className;
    hideList();
  });
});

// keys
// const key = event.which || event.keyCode;
document.addEventListener("keypress", (event) => {
  let x = event.which;
  if (x == 49) {
    document.body.style.background = "None";
    h1.innerHTML = "None";
  } else if (x == 50) {
    document.body.style.background = "Red";
    h1.innerHTML = "Red";
  } else if (x == 51) {
    document.body.style.background = "Orange";
    h1.innerHTML = "Orange";
  } else if (x == 52) {
    document.body.style.background = "Purple";
    h1.innerHTML = "Purple";
  } else if (x == 53) {
    document.body.style.background = "Green";
    h1.innerHTML = "Green";
  }
});
// myFunction();
// document.addEventListener("keypress", myFunction);
