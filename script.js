let blk1 = document.querySelector(".block1");
let blk1Cont = document.querySelector(".block-content-1");
let blk2 = document.querySelector(".block2");
let blk2Cont = document.querySelector(".block-content-2");
let blk3 = document.querySelector(".block3");
let blk3Cont = document.querySelector(".block-content-3");
let blk4 = document.querySelector(".block4");
let blk4Cont = document.querySelector(".block-content-4");
let blk5 = document.querySelector(".block5");
let blk5Cont = document.querySelector(".block-content-5");
let blk6 = document.querySelector(".block6");
let blk6Cont = document.querySelector(".block-content-6");

let icon = document.querySelector(".rotate-icon");
let plusIcon = document.querySelector(".plus-icon");

let icon2 = document.querySelector(".rotate-icon2");
let plusIcon2 = document.querySelector(".plus-icon2");

let icon3 = document.querySelector(".rotate-icon3");
let plusIcon3 = document.querySelector(".plus-icon3");

let icon4 = document.querySelector(".rotate-icon4");
let plusIcon4 = document.querySelector(".plus-icon4");

let icon5 = document.querySelector(".rotate-icon5");
let plusIcon5 = document.querySelector(".plus-icon5");

let icon6 = document.querySelector(".rotate-icon6");
let plusIcon6 = document.querySelector(".plus-icon6");
let key = 0;
// block 1
blk1.addEventListener("click", () => {
  if (key === 0) {
    blk1Cont.style.display = "block";
    icon.style.display = "block";
    plusIcon.style.display = "none";
    key = 1;
  } else {
    blk1Cont.style.display = "none";
    icon.style.display = "none";
    plusIcon.style.display = "block";

    key = 0;
  }
});
// block 2

blk2.addEventListener("click", () => {
  if (key === 0) {
    blk2Cont.style.display = "block";
    icon2.style.display = "block";
    plusIcon2.style.display = "none";

    key = 1;
  } else {
    blk2Cont.style.display = "none";
    icon2.style.display = "none";
    plusIcon2.style.display = "block";
    key = 0;
  }
});
// block 3
blk3.addEventListener("click", () => {
  if (key === 0) {
    blk3Cont.style.display = "block";
    icon3.style.display = "block";
    plusIcon3.style.display = "none";
    key = 1;
  } else {
    blk3Cont.style.display = "none";
    icon3.style.display = "none";
    plusIcon3.style.display = "block";
    key = 0;
  }
});
//block 4
blk4.addEventListener("click", () => {
  if (key === 0) {
    blk4Cont.style.display = "block";
    icon4.style.display = "block";
    plusIcon4.style.display = "none";
    key = 1;
  } else {
    blk4Cont.style.display = "none";
    icon4.style.display = "none";
    plusIcon4.style.display = "block";
    key = 0;
  }
});
// block 5
blk5.addEventListener("click", () => {
  if (key === 0) {
    blk5Cont.style.display = "block";
    icon5.style.display = "block";
    plusIcon5.style.display = "none";
    key = 1;
  } else {
    blk5Cont.style.display = "none";
    icon5.style.display = "none";
    plusIcon5.style.display = "block";
    key = 0;
  }
});
// block 6
blk6.addEventListener("click", () => {
  if (key === 0) {
    blk6Cont.style.display = "block";
    icon6.style.display = "block";
    plusIcon6.style.display = "none";
    key = 1;
  } else {
    blk6Cont.style.display = "none";
    icon6.style.display = "none";
    plusIcon6.style.display = "block";
    key = 0;
  }
});
