const btnSubmit = document.getElementById("btnSubmit")
const email = document.getElementById("email")
const alert = document.getElementById("alert")

console.log(btnSubmit,email,alert);

btnSubmit.addEventListener("click",(e)=>{
    e.preventDefault();
    if(!validateEmail(email.value)){
        email.style.border="2px solid red"
        alert.style.display="block"
        
    }else{
        email.style.border="1px solid hsl(0, 0%, 59%)";
        alert.style.display="none"
    }
})

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}