$(document).ready(function () {
  $('#header__bag').click(function () {
      // Animate the div element. A duration is set to 500 milliseconds.
      $(".sidebar").animate({ width: '40vw', height: '100vh' }, 500);
      $('.sidebar').show();          // Also show the div element.
      $(".overlay").toggleClass("hidden");
  });

  // Reverse animate.
  $('.close-container').click(function () {
      $(".sidebar").animate({ width: '80px', height: '27px' }, 500);
      $('.sidebar').hide('slow');          // Now hide the div.
      $(".overlay").toggleClass("hidden");
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


  class Div extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <div class="sidebar">

			<div class="sidebar_container">

			<div class="sidebar_heading">

				<span>
					<h3>Your Bag</h3>
				</span>

				<span class="close-container">
					<div class="leftright"></div>
					<div class="rightleft"></div>
				</span>

			</div>

			<div class="sidebar_product">
				<img src="images/chicken.png" alt="chicken">
				<div class="sidebar_product_description">
				<h4>Natures Menu Dog Food Can Chicken</h4>
				<h6>£22.81</h6>
				<a href="">REMOVE</a>
				</div>
			</div>

      <div class="sidebar_product">
      <img src="images/chicken.png" alt="chicken">
      <div class="sidebar_product_description">
      <h4>Natures Menu Dog Food Can Chicken</h4>
      <h6>£22.81</h6>
      <a href="">REMOVE</a>
      </div>

    </div>

			</div>

			<div class="sidebar_footer">

			<div class="sidebar_footer_description">
				<h5>Subtotal: £22.81</h5>
				<a id="cart_button" class="primary_button" href="">PROCEED TO CHECKOUT</a>
				<a href="">CONTINUE SHOPPING</a>
			</div>

			</div>
			
		</div>
        `
    }
  }

  customElements.define('global-sidebar', Div);