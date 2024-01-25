let version = "1.0"

function switchPage(src) {
    let id = src.id.split("-")[0];
    let page = document.querySelector("#" + id + "-page");
    if (page) {
        let oldPage = document.querySelector(".active-page");
        if (oldPage) {
            oldPage.classList.remove("active-page");
            oldPage.setAttribute("aria-hidden", "true");
        }
        let oldLink = document.querySelector(".active");
        if (oldLink) {
            oldLink.classList.remove("active");
        }
        src.classList.add("active");
        page.classList.add("active-page");
        page.removeAttribute("aria-hidden");
    }
}

function checkForUpdates(src) {
    var req = new XMLHttpRequest();
    req.onreadystatechange = function() {
        if (req.readyState = XMLHttpRequest.DONE) {
            if (req.status >= 200 && req.status < 400) {
                src.innerHTML = "Update available!";
            } else {
                src.innerHTML = "Error checking for updates, click to try again.";
            }
        }
    }
    req.open("GET", "https://raw.githubusercontent.com/mochawoof/quizme/main/version", true);
    req.send();
}

function aboutModal() {
    modal("About Quiz Me!", "Quiz Me is a free (and open-source!) studying tool.<br><br>Feel free to contribute on <a href='https://www.github.com/mochawoof/quizme'>GitHub</a>!<br><br><a href='#' onclick='checkForUpdates(this)'>Check for updates</a>");
}

function modal(title, text) {
    document.querySelector("#modal-label").innerHTML = title;
    document.querySelector("#modal-text").innerHTML = text;
    new bootstrap.Modal(document.querySelector("#modal")).show();
}