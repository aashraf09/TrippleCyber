function reveal() {
    var reveals = document.querySelectorAll(".anim-here");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      console.log(windowHeight);
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 10;
  
      if (elementTop <= windowHeight - elementVisible) {
        reveals[i].classList.add("animate");
      } 
      else {
        reveals[i].classList.remove("animate");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);