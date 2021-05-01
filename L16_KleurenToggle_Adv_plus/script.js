const entireNav = document.getElementById("menu-container");
const elementBurger = document.getElementById("burger");
const elementMenuList = document.getElementById("menu");
const colorName = document.querySelector("#colorName p");
const getColorList = document.querySelectorAll("#menu li");
const getRadioList = document.querySelectorAll("#radio span");

// opens the burger menu
const unhideList = () => {
  elementMenuList.classList.remove("hidden");
  elementMenuList.classList.add("shown");
};
// closes the burger menu
const hideList = () => {
  elementMenuList.classList.remove("shown");
  elementMenuList.classList.add("hidden");
};

// elementBurger.addEventListener("mouseover", unhideList);
// elementBurger.addEventListener("mouseout", unhideList);
elementBurger.addEventListener("mouseover", unhideList);
entireNav.addEventListener("mouseleave", hideList);
elementBurger.addEventListener("click", hideList);

// respond to the clicked color li-item
getColorList.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    setChanges(this.className);
    hideList();
  });
});

// respond to keys 1-5
// const key = event.which || event.keyCode;
document.addEventListener("keypress", (event) => {
  let x = event.which || event.keyCode;
  if (x === 49) {
    let y = "None";
    setChanges(y);
  } else if (x == 50) {
    let y = "Red";
    setChanges(y);
  } else if (x == 51) {
    let y = "Orange";
    setChanges(y);
  } else if (x == 52) {
    let y = "Purple";
    setChanges(y);
  } else if (x == 53) {
    let y = "Green";
    setChanges(y);
    2;
  }
});

// respond to clicking the 'radiobuttons'
getRadioList.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    setChanges(this.className);
  });
});

// set all the changes, check the correct'radiobutton', change the texxt, set the background
const setChanges = (e) => {
  radiobtn = document.getElementById(e);
  radiobtn.checked = true;
  colorName.innerHTML = e;
  document.body.style.background = e;
};
