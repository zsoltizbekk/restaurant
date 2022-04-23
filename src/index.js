import './style.css';
import home from './pages/home';
import menu from './pages/menu';
import about from './pages/about';
import header from './functions/header';
import footer from './functions/footer';
import start from './functions/start';

header();
start();
home();
footer();

const homeBtn = document.getElementById("homeBtn");
const menuBtn = document.getElementById("menuBtn");
const aboutBtn = document.getElementById("aboutBtn");

homeBtn.addEventListener("click", function(){
    homeBtn.className = "checked";
    menuBtn.className = "unchecked";
    aboutBtn.className = "unchecked";
    home();
});

menuBtn.addEventListener("click", function(){
    homeBtn.className = "unchecked";
    menuBtn.className = "checked";
    aboutBtn.className = "unchecked";
    menu();
});


aboutBtn.addEventListener("click", function(){
    homeBtn.className = "unchecked";
    menuBtn.className = "unchecked";
    aboutBtn.className = "checked";
    about();
});
