let startColumn = document.getElementById("startColumn");
let midColumn = document.getElementById("midColumn");
let endColumn = document.getElementById("endColumn");
let diskOne = document.getElementById("diskOne");
let diskTwo = document.getElementById("diskTwo");
let diskThree = document.getElementById("diskThree");
let diskFour = document.getElementById("diskFour");
let reset = document.getElementById("reset");

const towerClick = function (evt) {
  let clickedTower = evt.currentTarget;
  let diskToPickUp = clickedTower.firstElementChild;
  let hand = document.getElementById("selectionDisplay");

  if (diskToPickUp == null && hand.children.length == 0) {
    alert("Invalid Move, try again");
  }

  if (hand.children.length == 0) {
    hand.append(diskToPickUp);
  } else if (clickedTower.children.length == 0) {
    clickedTower.prepend(hand.firstElementChild);
  } else if (
    clickedTower.firstElementChild == null ||
    hand.firstElementChild.dataset.size < clickedTower.firstElementChild.dataset.size
  ) {
    clickedTower.prepend(hand.firstElementChild);
  } else if (hand.firstElementChild.dataset.size > clickedTower.firstElementChild.dataset.size) {
    alert("You cannot place a larger disk upon a smaller disk, or pick something else up in your hand");
  }
  if (endColumn.childNodes.length == 4) {
    endColumn.innerHTML = "You're a winner!";
  }
};

startColumn.addEventListener("click", towerClick);
midColumn.addEventListener("click", towerClick);
endColumn.addEventListener("click", towerClick);
reset.addEventListener("click", function () {
  location.reload();
});
