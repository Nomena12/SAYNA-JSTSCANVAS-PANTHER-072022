
// Sélection de l'élément du curseur personnalisé
const customCursor = document.getElementById('custom-cursor');

// Écouteur d'événement pour le mouvement de la souris sur le document entier
document.addEventListener('mousemove', function(event) {
  // Mise à jour de la position du curseur personnalisé en fonction des coordonnées de la souris
  customCursor.style.left = event.clientX + 'px';
  customCursor.style.top = event.clientY + 'px';
});


const panth5 = document.querySelector('img[alt="Pantherhome5"]');


panth5.addEventListener('mouseover' , ()=>{
  panth5.style.transform = "scale(1.2)";
});

panth5.addEventListener('mouseout' , ()=>{
  panth5.style.transform = "";
});

const panth6 = document.querySelector('img[alt="Pantherhome6"]');
console.log(panth6);

panth6.addEventListener('mouseover' , ()=>{
  panth6.style.transform = "scale(1.2)";
});

panth6.addEventListener('mouseout' , ()=>{
  panth6.style.transform = "";
});










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

const btnNext = document.querySelector(`button[id="next"]`);
console.log(btnNext);

let i = 1

function manampy (){
  i++;
  if(i > 10){i = 1};
}
btnNext.addEventListener("click" , ()=>{
  manampy();
 
});

function zoom(){
  
const imgs = document.querySelector(`img[alt="sary${i}"]`);
console.log(imgs);

imgs.style.transform = "scale(120%)";
};

function dezoom(){
  const imgs = document.querySelector(`img[alt="sary${i}"]`);
  
  imgs.style.transform = "";
  };




window.addEventListener('scroll', (e)=>{
    const barre = document.querySelector(".test3 ");
   

   barre.style.position = "sticky";
   barre.style.top = 0 + "px";
  // barre.style.left = 0 ;
   

});



// Get the element to animate
const element = document.querySelector('.my-element');
const element1 = document.querySelector('.my');
const element2 = document.querySelector('.my1');
const element3 = document.querySelector('.my2');
const element4 = document.querySelector('.my3');
const element5 = document.querySelector('.my4');
const element6 = document.querySelector('.my5');
const element7 = document.querySelector('.my6');
const element8 = document.querySelector('.my7');
const element9 = document.querySelector('.my8');





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
      element2.classList.add('show');
      element3.classList.add('show');
      element4.classList.add('show');
      element5.classList.add('show');
      element6.classList.add('show');
      element7.classList.add('show');
      element8.classList.add('show');
      element9.classList.add('show');





    }
    else {
      element.classList.remove('show');
      element1.classList.remove('show');
      element2.classList.remove('show');
      element3.classList.remove('show');
      element4.classList.remove('show');
      element5.classList.remove('show');
      element6.classList.remove('show');
      element7.classList.remove('show');
      element8.classList.remove('show');
      element9.classList.remove('show');




    }
  });
}, options);

// Start observing the element
observer.observe(element);
observer.observe(element1);
observer.observe(element2);
observer.observe(element3);
observer.observe(element4);
observer.observe(element5);
observer.observe(element6);
observer.observe(element7);
observer.observe(element8);
observer.observe(element9);



function previous (){
  const widthSlider = document.querySelector(".slider_content_item").offsetWidth;
  document.querySelector(".slider_content").scrollLeft -= widthSlider;
}



function next (){
  const widthSlider = document.querySelector(".slider_content_item").offsetWidth;
  

  const sliderContent = document.querySelector(".slider_content");
  

  sliderContent.scrollLeft += widthSlider;
  const scrollLeft = sliderContent.scrollLeft;
  const itemSlider = sliderContent.querySelectorAll(".slider_content_item");
  

  if( scrollLeft === widthSlider * (itemSlider.length -1)){
    sliderContent.scrollLeft = 0;

  }
};


