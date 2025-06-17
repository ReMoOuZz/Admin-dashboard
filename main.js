document.getElementById("profile-nav-item").addEventListener("click", () => {
  document.getElementById("popup-socials").classList.add("active");
});

document.getElementById("close-button").addEventListener("click", () => {
  document.getElementById("popup-socials").classList.remove("active");
});
