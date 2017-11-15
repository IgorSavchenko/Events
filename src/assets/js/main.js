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
initSlider();
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
  // Add a function that generates arrow left and right buttons to Siema
  Siema.prototype.addArrows = function() {
    // make buttons & append them inside Siema's container
    this.prevArrow = document.createElement('button');
    this.nextArrow = document.createElement('button');
    // this.prevArrow.textContent = 'previous slide';
    this.prevArrow.classList.add('arrow', 'arrow--prev', 'fa', 'fa-lg', 'fa-chevron-left');
    // this.nextArrow.textContent = 'next slide';
    this.nextArrow.classList.add('arrow', 'arrow--next', 'fa', 'fa-lg', 'fa-chevron-right');
    this.selector.appendChild(this.prevArrow);
    this.selector.appendChild(this.nextArrow);
    // event handlers on buttons
    this.prevArrow.addEventListener('click', () => this.prev());
    this.nextArrow.addEventListener('click', () => this.next());
  }
  SIEMA.addArrows();
};
