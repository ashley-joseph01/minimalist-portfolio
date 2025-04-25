console.log("Initializing js");

function rememberTheme() {
    let theme = localStorage.getItem("isDarkTheme");
    if (theme != null) {
        setTheme(theme == "true")
    } else {
        if (window.matchMedia("prefers-color-scheme: dark")) {
            setTheme(true)
        } else {
            setTheme(false)
        }
    }
}

rememberTheme();

function toggleTheme() {
    let theme = localStorage.getItem("isDarkTheme");
    if (theme != null) {
        if (theme == "true") {
            setTheme(false);
        } else {
            setTheme(true);
        }
    } else {

        let currentTheme = document.getElementById("css-theme").getAttribute("href");
    
        if (currentTheme == "../styles/light-theme.css") {
            setTheme(true)
        } else {
            setTheme(false)
        }
    
    }

}

function setTheme(isDarkTheme) {

    let themeToggle = document.getElementById("theme-toggle");
    let cssTheme = document.getElementById("css-theme");

    if (!isDarkTheme) {
        themeToggle.firstChild.classList.remove("fa-moon")
        themeToggle.firstChild.classList.add("fa-sun")
        cssTheme.setAttribute("href", "../styles/light-theme.css");
        localStorage.setItem("isDarkTheme", false);
    } else {
        themeToggle.firstChild.classList.remove("fa-sun")
        themeToggle.firstChild.classList.add("fa-moon")
        cssTheme.setAttribute("href", "../styles/dark-theme.css");
        localStorage.setItem("isDarkTheme", true);
    }
}