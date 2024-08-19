var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function icon(){
 alert("sorry you can't visit this plateform");
}
 
// let seemoreid = document.getElementById("seemoreid");


function seemore(){
    moreworks = document.querySelectorAll("#seemoreid");
    moreworks.forEach(work =>{
        work.style.display = "block";
    })

}
// seemore.addEventListener("click", () =>{
//     seemoreid.style.display = "block";
// })


function opentab(tabname){

for(tablink of tablinks){
    tablink.classList.remove("active-link");
}
for(tabcontent of tabcontents){
     tabcontent.classList.remove("active-tab");
}
event.currentTarget.classList.add("active-link");
document.getElementById(tabname).classList.add("active-tab");

}

const sidebar =  document.getElementById("sidemenu");

function openmenu(){
    sidebar.style.right = "0";
    sidebar.style.transition = "all 0.5s";
}

function closemenu(){
    sidebar.style.right = "-200px";
    sidebar.style.transition = "all 0.5s";
}

 
const scriptURL = 'https://script.google.com/macros/s/AKfycbyos98rVyVsAvZ_sZiUN8YInIlxkiqsiXsYhAeLJhNFssWZMZp9QfHSDpGETh84xjgYzw/exec'
const form = document.forms['submit-to-google-sheet']
// const msg = document.getElementById("msg"); 
const popup = document.querySelector(".pop-up");
const contactform = document.querySelector(".contact-right form");
const loader = document.querySelector(".loader-box");

form.addEventListener('submit', e => {
  e.preventDefault()
  loader.style.display = "block";
  loader.style.display ="flex";
  fetch(scriptURL, {method: 'POST', body: new FormData(form)})
    .then(response => {
         
       contactform.style.display = "none";
        popup.style.display = "block";
        setTimeout(function(){
            // msg.innerHTML = ""
            popup.style.display = "none";
            contactform.style.display = "block";
           loader.style.display = "none";

        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})
 
function popupHide(){
    contactform.style.display = "block";
    popup.style.display = "none";
    loader.style.display = "none";

}

function addLinkClickEvent() {
    const links = document.querySelectorAll('#sidemenu a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            closemenu();
        });
    });
}

window.onload = addLinkClickEvent;

document.addEventListener('DOMContentLoaded', function () {
    const btn1 = document.querySelector('.btn1');
    const tooltip = document.getElementById('tooltip');

    btn1.addEventListener('mouseover', function () {
        const rect = btn1.getBoundingClientRect();
        tooltip.style.left = rect.left + window.scrollX + 'px';
        tooltip.style.top = rect.top + window.scrollY - tooltip.offsetHeight + 'px';
        tooltip.style.display = 'block';
    });

    btn1.addEventListener('mouseout', function () {
        tooltip.style.display = 'none';
    });
});

 


 