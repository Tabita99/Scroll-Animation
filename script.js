// bring in the boxes
const boxes = document.querySelectorAll(".box");

// fire an event when we scroll
// when  that happen you call a function called check boxes
window.addEventListener("scroll", checkBoxes);

checkBoxes();

// check the postion of each boxes;
// we want the trigger point where we want that to scroll in
// boundingclientRect return the dom rect = rectangle, return where in the view port is it

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
