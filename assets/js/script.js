'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navLinks, "click", closeNavbar);



/**
 * header active when scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElem = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeElem);

/* Login & signup */

const loginForm = document.querySelector(".loginForm");
const Overlay = document.querySelector(".Overlay");
const btnLogin =document.querySelector('.btnlogin');
const btnSignUp= document.querySelector('.btnsignup')

const SignUp =function(){
  
  document.querySelector('.signUpForm').style.display="block";
  document.querySelector('.Overlay').style.display='block';
}
btnSignUp.addEventListener('click',SignUp);

const Login = function () {
  document.querySelector(".loginForm").style.display = "block";
  document.querySelector(".Overlay").style.display = "block";
};
btnLogin.addEventListener("click", Login);

/* When touch on overlay. overlays will close*/
const screentouch = function () {
  document.querySelector(".loginForm").style.display = "none";
  document.querySelector('.signUpForm').style.display="none";
  document.querySelector(".Overlay").style.display = "none";
};
Overlay.addEventListener("click", screentouch);

/* anchor tag login*/
// Get the anchor tag element
// const link = document.getElementById('myLink');

// const anchor =function() {
//   document.querySelector('.loginForm').style.display = 'block';
//   alert('hii');
// }
// link.addEventListener('click', anchor);

const link = document.querySelector(".anchorTag");

const anchor = function () {
  document.querySelector(".loginForm").style.display = "block";
  document.querySelector(".signUpForm").style.display = "none";
  
};
link.onclick = anchor;