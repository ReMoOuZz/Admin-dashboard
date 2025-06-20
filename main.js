const showPopup = document.querySelectorAll(".nav-item");

showPopup.forEach((item) => {
  item.addEventListener("click", () => {
    document.getElementById("popup-socials").classList.add("active");
  });
});

document.getElementById("close-button").addEventListener("click", () => {
  document.getElementById("popup-socials").classList.remove("active");
});
