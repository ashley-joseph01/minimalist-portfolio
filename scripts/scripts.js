console.log("Initializing js");

function remeberTheme() {
    toggleTheme(localStorage.getItem("isDarkTheme") == true)
}

remeberTheme();

function toggleTheme(isDarkTheme) {

    if (!isDarkTheme) {
        document.getElementById("css-theme").setAttribute("href", "../styles/light-theme.css");
        localStorage.setItem("isDarkTheme", false);
    } else {
        document.getElementById("css-theme").setAttribute("href", "../styles/dark-theme.css");
        localStorage.setItem("isDarkTheme", true);
    }
}