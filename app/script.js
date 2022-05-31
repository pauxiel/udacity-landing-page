// selected the sections
const allSections = Array.from(document.getElementsByTagName("section"));

// create an array for section excluding hero section
const selectSections = allSections.filter(
  (section) => section.className.length === 0
);

// select nav list
const navList = document.getElementsByClassName("nav__list");

//---------------------------------------//
// Dynamic creation of the nav list----//
//-----------------------------------//

for (section of selectSections) {
  // create list item with class
  const listItem = document.createElement("li");
  listItem.classList.add("nav__item");

  // create list item link with class
  const listItemLink = document.createElement("a");
  listItemLink.classList.add("nav__link");

  // create text content and href for list item link
  listItemLink.textContent = section.dataset.nav;
  listItemLink.href = `#${section.id}`;

  // create highlight action when list item is clicked
  listItem.addEventListener("click", function(e) {
    e.preventDefault();
    const current = document.getElementsByClassName("highlight");

    if (current.length > 0) {
      current[0].className = current[0].className.replace("highlight", "");
    }

    this.className += " highlight";
  });

  listItem.appendChild(listItemLink);

  navList[0].appendChild(listItem);
}

//--------------------------------------------------------------//
// smooth scrolling to the section when the nav link is clicked--//
//--------------------------------------------------------------//

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

//-----------------------------//
// add the active state--------//
//------------------------------//

window.addEventListener("scroll", (e) => {
  // loop through each section
  selectSections.forEach((section) => {
    // get px distance from top
    const topDistance = section.getBoundingClientRect().top;

    const listItem = Array.from(document.getElementsByClassName("nav__item"));
    console.log(listItem);

    listItem.forEach((item) => {
      const itemLink = item.firstChild.textContent;
      // if the distance to the top is between 0-100px
      if (topDistance > 0 && topDistance < 100) {
        section.classList.add("active");

        // if nav link content correspond to the section data nav
        if (itemLink == section.dataset.nav) {
          item.classList.add("highlight");
        } else {
          item.classList.remove("highlight");
        }

        // otherwise, remove the class
      } else {
        section.classList.remove("active");
      }
    });
  });
});
