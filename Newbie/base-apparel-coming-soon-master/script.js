const email = document.getElementById('email');
const btnSubmit = document.getElementById('btnSubmit')
const alertImage = document.getElementById('alert-image')
const alertLabel = document.getElementById('alert-label')
console.log(alert);
btnSubmit.addEventListener('click',(e)=>{
    e.preventDefault();

    if(!validateEmail(email.value)){
        alertImage.classList.remove("active");
        alertLabel.classList.remove("active");
    }else{
        alertImage.classList.add("active");
        alertLabel.classList.add("active");
    }
})

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
