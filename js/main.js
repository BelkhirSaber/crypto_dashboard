"use strict";
// if (Object.hasOwnProperty.call(localStorage, "theme")) {
//   localStorage.getItem("theme") != ""
//     ? document.body.classList.add(localStorage.getItem("theme"))
//     : "";
// }
// window.onload = function () {};
const chartCxt = document.querySelector("#chart-context").getContext("2d");
new Chart(chartCxt, {
  type: "line",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "BTC",
        data: [
          22094, 29294, 32122, 45874, 39504, 27668, 46941, 49214, 62804, 55103,
          50156, 48122,
        ],
        borderColor: "red",
        borderWidth: 2,
      },
      {
        label: "ETH",
        data: [
          10500, 19294, 32102, 35874, 39001, 11668, 48941, 20211, 26100, 29103,
          37133, 30122,
        ],
        borderColor: "blue",
        borderWidth: 2,
      },
    ],
  },
  options: {
    responsive: true,
  },
});

// show and hide sidebar

const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close");
const sidebar = document.querySelector("aside");

menuBtn.addEventListener("click", () => {
  sidebar.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  sidebar.style.display = "none";
});

// toggle light and dark theme
const themeBtn = document.querySelector(".theme-btn");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  themeBtn.querySelector("span:first-child").classList.toggle("active");
  themeBtn.querySelector("span:last-child").classList.toggle("active");
  localStorage.setItem("theme", document.body.className);
});

window.onload = function () {
  if (Object.hasOwnProperty.call(localStorage, "theme")) {
    localStorage.getItem("theme") != ""
      ? (document.body.className = localStorage.getItem("theme"))
      : "";
  }
  document.body.classList.add("show");
};
