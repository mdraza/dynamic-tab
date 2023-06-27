const tabContainer = document.querySelector(".operations__tab-container");
const tab = document.querySelectorAll(".operations__tab");
const tabContent = document.querySelectorAll(".operations__content");

tabContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");

  if (!clicked) return;

  //Remove class
  tab.forEach((rt) => rt.classList.remove("operations__tab--active"));
  tabContent.forEach((rtc) =>
    rtc.classList.remove("operations__content--active")
  );

  // Activate tab
  clicked.classList.add("operations__tab--active");

  // Activate tab content
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});
