
$(document).ready(function(){
    $("#header__bag").click(function(){
    $(".sidebar").toggleClass("hidden");
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
                <img src="images/bag 2.png" alt="bag-2" id="header__bag" class="cart_button">
            </div>

            </header>
        `
    }
  }

  customElements.define('global-header', Header);