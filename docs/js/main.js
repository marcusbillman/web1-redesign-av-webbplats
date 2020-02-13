const darkThemeToggle = document.getElementById("darkThemeToggle");

let darkThemeEnabled;

if (localStorage.getItem("darkThemeEnabled") == "true") {
    darkThemeEnabled = true;
} else {
    darkThemeEnabled = false;
}

setBodyTheme(darkThemeEnabled);

darkThemeToggle.addEventListener("click", () => {
    darkThemeEnabled = !darkThemeEnabled;
    setBodyTheme(darkThemeEnabled);
    localStorage.setItem("darkThemeEnabled", darkThemeEnabled);
});

function setBodyTheme(value) {
    document.body.setAttribute("data-dark-theme", value);
}
