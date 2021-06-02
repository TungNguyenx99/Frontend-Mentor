const firstName=document.getElementById('firstName')
const lastName=document.getElementById('lastName')
const emailAddress=document.getElementById('emailAddress')
const password=document.getElementById('password')
const btnSubmit=document.getElementById('btn')
const labels=document.querySelectorAll('.error')
console.log(labels);
btnSubmit.addEventListener('click',(e)=>{
    e.preventDefault();
    if(!firstName.value){
        firstName.classList.add('error')
        labels[0].classList.remove('active')
    }else{
        firstName.classList.remove('error')
        labels[0].classList.add('active')
    }

    if(!lastName.value){
        lastName.classList.add('error')
        labels[1].classList.remove('active')
    }else{
        lastName.classList.remove('error')
        labels[1].classList.add('active')
    }

    if(!validateEmail(emailAddress.value)){
        emailAddress.classList.add('error')
        labels[2].classList.remove('active')
    }else{
        emailAddress.classList.remove('error')
        labels[2].classList.add('active')
    }

    if(!password.value){
        password.classList.add('error')
        labels[3].classList.remove('active')
    }else{
        password.classList.remove('error')
        labels[3].classList.add('active')
    }
    
})

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}