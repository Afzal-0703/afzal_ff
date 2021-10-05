var elLightModeButton = document.querySelector(".js-light-mode-button")
var elDarktModeButton = document.querySelector(".js-dark-mode-button")
elLightModeButton.addEventListener("click", function () {document.body.classList.remove("dark-mode");});
elDarktModeButton.addEventListener("click", function () {document.body.classList.add("dark-mode");});
