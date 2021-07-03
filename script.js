"use strict";

const assignments = document.querySelectorAll(".assignment");
const row1 = document.querySelectorAll(".row-1");
const row2 = document.querySelectorAll(".row-2");
const row3 = document.querySelectorAll(".row-3");

//  Reveal Sections

const reveal = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) return;

  let rowClass;
  for (let i = 1; i <= 3; i++) {
    if (entry.target.classList.contains(`row-${i}`)) rowClass = `row-${i}`;
  }
  const currRow = document.querySelectorAll(`.${rowClass}`);
  currRow.forEach((item) => {
    item.classList.remove("section--hidden");
    observer.unobserve(item);
  });
};

const assignmentObserver = new IntersectionObserver(reveal, {
  root: null,
  threshold: 0.1,
});

assignments.forEach((assignment) => {
  assignment.classList.add("section--hidden");
  assignmentObserver.observe(assignment);
});
