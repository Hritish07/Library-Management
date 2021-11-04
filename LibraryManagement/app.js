/** @format */

// setup date
const date = (document.getElementById(
    "date"
  ).innerHTML = new Date().getFullYear());
  // setup nav
  const navBtn = document.getElementById("nav-btn");
  const navbar = document.getElementById("navbar");
  const navClose = document.getElementById("nav-close");
  // show nav
  navBtn.addEventListener("click", () => {
    navbar.classList.add("showNav");
  });
  // close nav
  navClose.addEventListener("click", () => {
    navbar.classList.remove("showNav");
  });
 
  var working = false;
$('.login').on('submit', function(e) {
  e.preventDefault();
  if (working) return;
  working = true;
  var $this = $(this),
    $state = $this.find('button > .state');
  $this.addClass('loading');
  $state.html('Authenticating');
  setTimeout(function() {
    $this.addClass('ok');
    $state.html('Welcome back!');
    setTimeout(function() {
      $state.html('Log in');
      $this.removeClass('ok loading');
      working = false;
    }, 4000);
  }, 3000);
});