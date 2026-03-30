// home page: shows class info when the user clicks the button
const classBtn = document.getElementById("class-btn");
const classInfo = document.getElementById("class-info");

// only run this if we're on the home page
if (classBtn && classInfo) {
  classBtn.addEventListener("click", () => {
    classInfo.textContent = "Classes today: English at 10:00 AM, Biology at 1:00 PM.";
  });
}

// dining page: menu buttons
const breakfastBtn = document.getElementById("breakfast-btn");
const lunchBtn = document.getElementById("lunch-btn");
const dinnerBtn = document.getElementById("dinner-btn");
const menuInfo = document.getElementById("menu-info");

// breakfast button
if (breakfastBtn && menuInfo) {
  breakfastBtn.addEventListener("click", () => {
    menuInfo.textContent = "Breakfast: eggs, toast, fruit, and coffee.";
  });
}

// lunch button
if (lunchBtn && menuInfo) {
  lunchBtn.addEventListener("click", () => {
    menuInfo.textContent = "Lunch: chicken sandwich, fries, and a salad.";
  });
}

// dinner button
if (dinnerBtn && menuInfo) {
  dinnerBtn.addEventListener("click", () => {
    menuInfo.textContent = "Dinner: pasta, garlic bread, and soup.";
  });
}
