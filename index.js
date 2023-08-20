function reveal() {
    var reveals = document.querySelectorAll(".anim-here");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("animate");
      } else {
        reveals[i].classList.remove("animate");
        reveals[i].classList.add("display-hidden");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);