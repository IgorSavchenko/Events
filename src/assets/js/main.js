//initialize datepicker
$("#datepicker").datepicker();
//===================================
//search button click interception
document.querySelector('.form__button').addEventListener('click', function(event) {
  event.preventDefault();
  alert('Request sent to server');
});
//===================================
// using siema slider
import Siema from 'siema';
//initialize slider
function initSlider() {
  const SIEMA = new Siema({
    selector: '.slider',
    perPage: 1,
    startIndex: 0,
    loop: true,
    draggable: true,
    onInit: addNavigation,
    onChange: setActiveButton
  });
  // Add a function for navigation in slider
  function addNavigation() {
    let length = this.innerElements.length;
    const BUTTONS = document.querySelectorAll('.slider__navigation-button');
    for (let i = 0; i < length; i++) {
      BUTTONS[i].addEventListener('click', () => this.goTo(i));
    }
  }
  // Add a function that changes navigation buttons in slider
  function setActiveButton(){
    const BUTTONS = document.querySelectorAll('.slider__navigation-button');
    BUTTONS.forEach((b, i) => {
      if (i == (this.currentSlide || 0)){
        b.classList.add("slider__navigation-button--active");
      } else {
        b.classList.remove("slider__navigation-button--active");
      }
    });
  }
  // Add a function of navigation to left and right arrow buttons
  Siema.prototype.addArrows = function() {
    this.prevArrow = document.querySelector('.slider__arrow-button--prev');
    this.nextArrow = document.querySelector('.slider__arrow-button--next');
    // event handlers on buttons
    this.prevArrow.addEventListener('click', () => this.prev());
    this.nextArrow.addEventListener('click', () => this.next());
  }
  SIEMA.addArrows();
};
initSlider();
