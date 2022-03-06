$(document).ready(function() {

function toggleSidebar() {
    $(".cart_button").toggleClass("active");
    $("main").toggleClass("move-to-left");
    $(".sidebar-item").toggleClass("active");
}

$(".cart_button").on("click tap", function() {
    toggleSidebar();
});

$(document).keyup(function(e) {
    if (e.keyCode === 27) {
    toggleSidebar();
    }
});

});


$(document).ready(function(){
    $(".cart_button").click(function(){
    $("body").toggleClass("transperent");
    });
});

class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
            <header>

            <div  class="header_menu">
                <img src="images/logo.svg" alt="logo" id="header__logo">
                <img src="images/bag 2.png" alt="bag-2" id="header__bag">
            </div>

            </header>
        `
    }
  }

  customElements.define('main-header', Header);