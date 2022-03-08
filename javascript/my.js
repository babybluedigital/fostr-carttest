$(document).ready(function(){
    $(".cart_button").click(function(){
      $(".overlay").toggleClass("hidden");
    });
  });

  $(document).ready(function(){
    $(".close-container").click(function(){
      $(".overlay").toggleClass("hidden");
    });
  });


$(document).ready(function(){
    var boxWidth = $(".sidebar").width();
    $(".close-container").click(function(){
        $(".sidebar").animate({
            width: 0
        });
    });
    $(".cart_button").click(function(){
        $(".sidebar").animate({
            width: 400
        });
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