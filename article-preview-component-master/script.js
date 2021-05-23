const btnShareOn=document.getElementById('btnShareOn');
const btnShareOff=document.getElementById('btnShareOff');
const info=document.querySelector('.info')
const share=document.querySelector('.share')

btnShareOn.addEventListener('click',()=>{
    share.classList.remove('active')
    info.classList.add('active')
    console.log('click');
})

btnShareOff.addEventListener('click',()=>{
    share.classList.add('active')
    info.classList.remove('active')
    console.log('click');
})
