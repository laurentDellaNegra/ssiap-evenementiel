import "./css/styles.css";
import $ from "jquery";
import kwesforms from "kwesforms";

/**
 * Smooth scroll management
 *
 *
 */
// Add smooth scrolling to all links
$("a").on("click", function (event) {
  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {
    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        "swing",
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
  }
});

/**
 * KwesForms
 * Mail support for contact
 *
 */
kwesforms.init();

let isFormOpen = false;
let isBackdrop = false;
const showBackdrop = function () {
  if (!isBackdrop) {
    $("#backdrop").removeClass("hidden").addClass("block");
    setTimeout(() => {
      $("#backdrop").removeClass("opacity-0").addClass("opacity-25");
      isBackdrop = true;
    });
  }
};
const hideBackdrop = function () {
  if (isBackdrop) {
    $("#backdrop").removeClass("opacity-25").addClass("opacity-0");
    // Wait the end of animation
    setTimeout(() => {
      $("#backdrop").addClass("hidden").removeClass("block");
      isBackdrop = false;
    }, 500);
  }
};
const openForm = function () {
  if (!isFormOpen) {
    $("#containerForm").removeClass("hidden").addClass("block");
    showBackdrop();
    setTimeout(() => {
      $("#form").removeClass("opacity-0").addClass("opacity-100");
      $("#containerForm").addClass("-translate-y-8");
      isFormOpen = true;
    });
  }
};
const closeForm = function () {
  if (isFormOpen) {
    $("#form").removeClass("opacity-100").addClass("opacity-0");
    $("#containerForm").removeClass("-translate-y-8");
    hideBackdrop();
    setTimeout(() => {
      $("#containerForm").addClass("hidden").removeClass("block");
      isFormOpen = false;
    }, 100);
  }
};
$("#form-button").on("click", function () {
  if (!isFormOpen) {
    openForm();
  } else {
    closeForm();
  }
});
let emailValid = false;
let messageValid = false;
$("#input-email").on("input", (e) => {
  const { value } = e.target;
  const mailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (mailRegex.test(value)) {
    emailValid = true;
  } else {
    emailValid = false;
  }
  canDisableButton();
});
$("#input-message").on("input", (e) => {
  const { value } = e.target;
  if (value !== "") {
    messageValid = true;
  } else {
    messageValid = false;
  }
  canDisableButton();
});
const canDisableButton = () => {
  if (emailValid && messageValid) {
    $("#button-send").removeClass("disabled").addClass("enable");
  } else {
    $("#button-send").addClass("disabled").removeClass("enable");
  }
};
/**
 * Navbar management
 *
 *
 */
const openNav = function () {
  if (isBackdrop) return;
  $("#sidenav").addClass("translate-x-0").removeClass("translate-x-full");
  showBackdrop();
};
const closeNav = function () {
  console.log("isBackdrop", isBackdrop);
  if (!isBackdrop) return;
  $("#sidenav").addClass("translate-x-full").removeClass("translate-x-0");
  hideBackdrop();
};
$("#openNav").on("click", openNav);
$("#closeNav").on("click", closeNav);
$(".aside-link").on("click", closeNav);
$("#backdrop").on("click", function () {
  closeNav();
  closeForm();
});
$("#close").on("click", function () {
  closeForm();
});

/**
 * Init
 *
 */

$("body").removeClass("hide");
setTimeout(function () {
  $("body").toggleClass("opacity-100");
}, 500);
