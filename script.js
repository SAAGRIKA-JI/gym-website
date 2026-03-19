// MENU
let menu = document.getElementById("menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    navbar.classList.toggle("active");
};

// LOGIN CHECK
if(window.location.pathname !== "/login.html"){
    if(!localStorage.getItem("loggedIn")){
        window.location.href = "login.html";
    }
}

// LOGOUT
function logout(){
    localStorage.removeItem("loggedIn");
    window.location.href="login.html";
}
