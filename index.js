const popUp = document.querySelector('div #popup-box');
const submitBtn = document.querySelector('button[type="submit"]');

submitBtn.addEventListener('click',()=>{
    popUp.style.visibility = "visible";
    popUp.style.opacity = "1";
});

const voirPlink = document.querySelector('.in1 a');
voirPlink.addEventListener("click",()=>{
voirPlink.setAttribute("href","#prince");
});


// Get the element to animate
const element = document.querySelector('.my-element');
const element1 = document.querySelector('.my');


// Define the options for the Intersection Observer
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.6
};

// Create a new Intersection Observer
const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    // If element is in viewport, add the 'show' class to trigger the animation
    if (entry.isIntersecting) {
      element.classList.add('show');
      element1.classList.add('show');

    }
    else {
      element.classList.remove('show');
      element1.classList.remove('show');

    }
  });
}, options);

// Start observing the element
observer.observe(element);
observer.observe(element1);


