
function checkPassword() {
    const password = document.getElementById("password").value;
    if (password === "benny8707") {
        document.getElementById("login-container").style.display = "none";
        document.getElementById("gallery-container").style.display = "block";
    } else {
        alert("Incorrect password!");
    }
}
