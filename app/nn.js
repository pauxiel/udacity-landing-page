// create an unordered list

const items = document.createElement("ul");
items.classList.add("nav__list");

// create the list items
const firstItem = document.createElement("li");
const secondItem = document.createElement("li");
const thirdItem = document.createElement("li");
const fourthItem = document.createElement("li");

// Add highlight to nav item when clicked
const listItem = [firstItem, secondItem, thirdItem, fourthItem];
for (const item of listItem) {
  item.classList.add("nav__item");

  item.addEventListener("click", function(e) {
    e.preventDefault();
    const current = document.getElementsByClassName("highlight");

    if (current.length > 0) {
      current[0].className = current[0].className.replace("highlight", "");
    }

    this.className += " highlight";
  });
}

// create the nav link with its text content and link
const firstAnchor = document.createElement("a");
firstAnchor.textContent = "Section-1";
firstAnchor.href = "#section1";

const secondAnchor = document.createElement("a");
secondAnchor.textContent = "Section-2";
secondAnchor.href = "#section2";

const thirdAnchor = document.createElement("a");
thirdAnchor.textContent = "Section-3";
thirdAnchor.href = "#section3";

const fourthAnchor = document.createElement("a");
fourthAnchor.textContent = "Section-4";
fourthAnchor.href = "#section4";

// add the class nav__link to all the link in the nav
const listAnchor = [firstAnchor, secondAnchor, thirdAnchor, fourthAnchor];
for (const anchor of listAnchor) {
  anchor.classList.add("nav__link");
}

// append all the nav link to the nav list item
for (let i = 0; i < listItem.length; i++) {
  listItem[i].appendChild(listAnchor[i]);
  console.log(listItem[1]);
}

// append the nav list item to the nav
items.append(firstItem, secondItem, thirdItem, fourthItem);
const nav = document.getElementsByClassName("nav");
nav[0].appendChild(items);

// smooth scrolling to the section when the nav link is clicked
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// on window scroll
window.addEventListener("scroll", (e) => {
  // get all sections on the page
  const sections = document.querySelectorAll("section");

  // loop through each section
  sections.forEach((section) => {
    // get px distance from top
    const topDistance = section.getBoundingClientRect().top;

    // if the distance to the top is between 0-100px
    if (topDistance > 0 && topDistance < 100) {
      section.classList.add("active");

      // otherwise, remove the class
    } else {
      section.classList.remove("active");
    }
  });
});