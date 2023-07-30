const loginBtn = document.getElementById("login-btn");


loginBtn.addEventListener("click", (event) => {
    const username = document.getElementById("username-input");
    console.log("Test");

    if (username.value == "") return;

    sessionStorage.setItem("sakurachat_username", username.value);

    window.location.href = "/Privacy";
})