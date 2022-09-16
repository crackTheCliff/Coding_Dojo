function changeText() {
    var button = document.getElementById("loginBtn");
    if (button.innerText === "Login") {
        button.innerText = "Log Out";
    }
    else if (button.innerText === "Log Out") {
        button.innerText = "Login";
    }
}

function removeText() {
    var button = document.getElementById("addDef");
    button.style.visibility = "hidden";
    // button.remove();
}

function addLikes() {
    var button = document.getElementById("likeBtn");
    alert("Ninja was liked!")
}
