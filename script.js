const password = document.getElementById("password");
const rePassword = document.getElementById("rePassword");

rePassword.addEventListener("input", () => {
    if(rePassword.value != password.value)
    {
        password.classList.add("error");
        rePassword.classList.add("error");
    }
    else{
        password.classList="";
        rePassword.classList="";
    }
});

password.addEventListener("input", () => {
    if(rePassword.value != password.value)
    {
        password.classList.add("error");
        rePassword.classList.add("error");
    }
    else{
        password.classList="";
        rePassword.classList="";
    }
});
