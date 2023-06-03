function push() {
    if (document.getElementById("check").checked) {
      if (window.innerWidth <= 385) {
        document.querySelector(".header ul").style.left = "37%";
      } else {
        document.querySelector(".header ul").style.left = "52%";
      }
      document.querySelector("body").style.overflow = "hidden";
    } else {
      document.querySelector(".header ul").style.left = "152%";
      document.querySelector("body").style.overflow = "unset";
    }
  }
  window.addEventListener("load", push);
window.addEventListener("resize", push);