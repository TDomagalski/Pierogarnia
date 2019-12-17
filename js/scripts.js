// Top nav scroll animation

var logo = document.querySelector("#con-logo");

(function() {

  window.addEventListener("scroll", function() {

    if(document.scrollingElement.scrollTop >= 50) {
      logo.classList.add("logo-min");
    } else {
      logo.classList.remove("logo-min");
    }

  }, false);

})();
