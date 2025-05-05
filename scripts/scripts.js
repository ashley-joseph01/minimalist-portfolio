console.log("Initializing js");

window.addEventListener('DOMContentLoaded', function () {
    rememberTheme();
})

function rememberTheme() {
    
    let savedColorTheme = localStorage.getItem("colorTheme");
    
    switch (savedColorTheme) {

        case "light": {
            setTheme("light");
            break;
        }
            
        case "dark": {
            setTheme("dark");
            break;
        }
            
        case null: {

            if (window.matchMedia("(prefers-color-scheme: dark)").matches == true) { setTheme("dark"); } 
            else if (window.matchMedia("(prefers-color-scheme: light)").matches == true) { setTheme("light"); }

            break;
        }
    }

}





function setTheme(theme) {

    let themeToggle = document.getElementById("theme-toggle");
    let cssTheme = document.getElementById("css-theme");

    switch (theme) {

        case "light": {
            themeToggle.firstChild.classList.remove("fa-moon")
            themeToggle.firstChild.classList.add("fa-sun")
            cssTheme.setAttribute("href", "../styles/light-theme.css");
            break;
        }
            
        case "dark": {
            themeToggle.firstChild.classList.remove("fa-sun")
            themeToggle.firstChild.classList.add("fa-moon")
            cssTheme.setAttribute("href", "../styles/dark-theme.css");
            break;
        }

    }

}


function saveTheme(theme) {

    switch (theme) {

        case "light": {
            localStorage.setItem("colorTheme", "light");
            break;
        }
            
        case "dark": {
            localStorage.setItem("colorTheme", "dark");
            break;
        }

    }

}


function toggleTheme() {

    let savedColorTheme = localStorage.getItem("colorTheme");
    let currentCSSColorTheme = document.getElementById("css-theme").getAttribute("href");

    switch (savedColorTheme) {

        case "light": {
            setTheme("dark");
            saveTheme("dark");
            break;
        }
            
        case "dark": {
            setTheme("light");
            saveTheme("light");
            break;
        }
            
        case null: {

            if (currentCSSColorTheme == "../styles/light-theme.css") {
                setTheme("dark");
                saveTheme("dark");
            } else if (currentCSSColorTheme == "../styles/dark-theme.css") {
                setTheme("light");
                saveTheme("light");
            }

            break;
        }
    }

}
