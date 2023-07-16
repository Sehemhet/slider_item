  var pagInd = 1; //

function clickPag(n, container) {
  if (container === 'container1') {
    pagination1(pagInd += n);
    }
}

function pagination1(n) {
    var i;
    var items = document.querySelectorAll(".slider__img");
    if (n > items.length - 1) { pagInd = 1; }
    if (n < 1) { pagInd = items.length - 1; }
    for (i = 0; i < items.length; i++) {
      items[i].style.display = "none";
    }
    items[pagInd - 1].style.display = "flex";
  }
