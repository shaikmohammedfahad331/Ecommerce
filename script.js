// Script for navigation bar
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const closebar=document.getElementById('close');
const bodyclose=document.getElementsByTagName('body');


if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  })
}
if(closebar){
  closebar.addEventListener('click', () => {
      nav.classList.remove('active');
  })
}

