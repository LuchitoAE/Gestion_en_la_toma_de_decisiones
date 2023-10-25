document.addEventListener("DOMContentLoaded", function() {
  var weeks = document.getElementsByClassName("week");
  for (var i = 0; i < weeks.length; i++) {
    weeks[i].addEventListener("mouseover", function() {
      this.style.marginLeft = "20px";
    });
    weeks[i].addEventListener("mouseout", function() {
      this.style.marginLeft = "0";
    });
  }
});
