function applyBadgeClass() {
  var lis = document.querySelectorAll(".block-domain__links");
  var selectedLi = null;
  
  lis.forEach(function(li) {
    li.addEventListener("click", function() {
      if (selectedLi === this) {
        selectedLi = null;
        this.classList.remove("badge", "badge--click");
      } else {
        if (selectedLi) {
          selectedLi.classList.remove("badge", "badge--click");
        }
        selectedLi = this;
        this.classList.add("badge", "badge--click");
      }
    });
  });
}

applyBadgeClass();
