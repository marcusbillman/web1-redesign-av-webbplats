const darkThemeToggle = document.getElementById("darkThemeToggle");

let darkThemeEnabled = false;

darkThemeToggle.addEventListener("click", () => {
    darkThemeEnabled = !darkThemeEnabled;
    document.body.setAttribute("data-dark-theme", darkThemeEnabled);
});
