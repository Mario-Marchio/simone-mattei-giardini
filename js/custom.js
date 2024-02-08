// nav menu style
var nav = $("#navbarSupportedContent");
var btn = $(".custom_menu-btn");
btn.click;
btn.click(function (e) {
  e.preventDefault();
  nav.toggleClass("lg_nav-toggle");
  document.querySelector(".custom_menu-btn").classList.toggle("menu_btn-style");
});

function getCurrentYear() {
  var d = new Date();
  var currentYear = d.getFullYear();

  $("#displayDate").html(currentYear);
}

getCurrentYear();

document.getElementById("button-head").addEventListener("click", function () {
  // Seleziona l'elemento che deve essere modificato
  var sliderSection = document.querySelector(".slider_section");
  if (sliderSection.style.marginTop === "330px") {
    sliderSection.style.marginTop = "200px";
  } else {
    sliderSection.style.marginTop = "330px";
  }
});
