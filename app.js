// Handle onClick for navbar links
$("#nav-bar .navbar-nav a").on("click", function() {
    $("#nav-bar .navbar-nav").find("a.active").removeClass("active");
    $(this).addClass("active");
})

// Handle active navbar scroll
const sections = $("section");
const navList = $(".navbar ul li a");

window.onscroll = () => {
  var current = "";

  for (var i = 0; i < sections.length; i++) {
    const sectionTop = sections[i].offsetTop;
    if (pageYOffset >= sectionTop - 56) {
      current = sections[i].getAttribute("id"); 
    }
  }

  for (var j = 0; j < navList.length; j++) {
    $(navList[j]).removeClass("active");
    if (navList[j].classList.contains(current)) {
      $(navList[j]).addClass("active");
    }
  }
};