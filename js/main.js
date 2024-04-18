/** Button click show hide navbar **/
var togglebtn = document.querySelector(".togglebtn");
var nav = document.querySelector(".navlinks");
var links = document.querySelector("-navlinks li");
togglebtn.addEventListener("click", function(){
    this.classList.toggle("click");
    nav.classList.toggle("open");
})
/** Typed effect */
var typed = new Typed(".typed",{
    strings: ["Ingeniero", "Frontend Developer", "Web Developer"],
    typedSpeed: 70,
    backSpeed: 55,
    loop: true
})
/** Modal */
const blur1 = document.getElementById('blur-1');
const blur2 = document.getElementById('blur-2');
const blur3 = document.getElementById('blur-3');
const blur4 = document.getElementById('blur-4');
const modal = document.getElementById('modal');
const open = document.getElementById('btn-open-modal');
const close = document.getElementById('btn-close-modal');
const close2 = document.getElementById('btn-close-modal-2');
open.addEventListener('click', () => {
    modal.classList.add('show');
    blur1.classList.add('active');
    blur2.classList.add('active');
    blur3.classList.add('active');
    blur4.classList.add('active');
})
close.addEventListener('click', () => {
    modal.classList.remove('show');
    blur1.classList.remove('active');
    blur2.classList.remove('active');
    blur3.classList.remove('active');
    blur4.classList.remove('active');
})
close2.addEventListener('click', () => {
    modal.classList.remove('show');
    blur1.classList.remove('active');
    blur2.classList.remove('active');
    blur3.classList.remove('active');
    blur4.classList.remove('active');
})
/**Form script */
const scriptURL = "https://script.google.com/macros/s/AKfycbxLHp1bbTkDEaJV__Lvv5tSeoHBhTncSq4AhAgnk4a0H9Y5ahCHWvDrCQQkrPGV3gaCgA/exec"
const form = document.forms["submit-to-google-sheet"]
const msg = document.getElementById('msg')
const msg2 = document.getElementById('msg-2')

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.classList.add('active')
        setTimeout(function(){
            msg.classList.remove('active')
        }, 3000)
        form.reset()
    })
    .catch(error => {
        msg2.classList.add('active')
        setTimeout(function(){
            msg.classList.remove('active')
        }, 3000)
        form.reset()
    })
})

