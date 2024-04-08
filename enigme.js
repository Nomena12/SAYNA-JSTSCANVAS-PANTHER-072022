const divIn3 = document.querySelector('.e-in3');
const divInX = document.createElement("div");
divInX.setAttribute('class','divInX');
divIn3.appendChild(divInX);
const imgPanther3 = document.createElement("img");
divInX.appendChild(imgPanther3);
imgPanther3.setAttribute("src","Illustration + Logo/3_Page_Enigme/Pantherenigme3.png");
//divInX.style.border =" 2px solid red";
divInX.style.position = "absolute";
divInX.style.top = "370px" ;
divInX.style.left = "300px";
divInX.style.height = "60px";
imgPanther3.style.height = "100%";


const divIn8 = document.querySelector(".e-in8");
const titreH3 = document.createElement("h3");
divIn8.appendChild(titreH3);
titreH3.textContent = "ENIGME NUMERO  "  ;
const para = document.createElement("p");
divIn8.appendChild(para);
para.innerHTML = "Prouve ton talent d’espion et déchiffre cette réplique d’Okoyé écrite en Wakandais,<br>et apprend par la même occasion la première valeur d’une Dora Milaje !";
titreH3.style.textDecoration = "underline";
const textQ = document.createElement("q");
divIn8.appendChild(textQ);
textQ.innerHTML = "SI JE SUIS FIDELE C'EST A CE TRONE<br> PEU IMPORTE QUI MONTE DESSUS"



const divIn8I = document.querySelector(".e-in8I");
const titreH3I = document.createElement("h3");
divIn8I.appendChild(titreH3I);
titreH3I.textContent = "ENIGME NUMERO  "  ;
const paraI = document.createElement("p");
divIn8I.appendChild(paraI);
paraI.innerHTML = "Une anecdote intéressante est écrite juste en dessous mais elle est codée par un code <br>césar également appelé code de chiffrement par décalage . L’alphabet a été décalé,<br> trouve la clé de chiffrement qui te permettrait de retrouver les lettres et retranscris la <br>phrase :";
titreH3I.style.textDecoration = "underline";
const textQI = document.createElement("p");
divIn8I.appendChild(textQI);
textQI.innerHTML = "Tm nqtu lmjcbm i Wikstivl mv Kitqnwzvqm. Qt a'ioqb lm ti dqttm lwvb mab <br> wzqoqviqzm Zgiv Kwwotmz mb moitmumvb ti dqttm ycq i dc viqbzm tm <br>uwcdmumvb xwtqbqycm lma jtiks xivbpmza";
 const textQReponse = "Le film debute a Oackland en Californie. Il s'agit de la ville dont est originaire Ryan Coogler et egalement la ville qui a vu naitre le mouvement politique des black panthers";
 const sans = TextQReponseUpper.trim().replace(/\s/g, '')
 const textQReponse1 = "le roi lion";
 




const divIn8II = document.querySelector(".e-in8II");
const titreH3II = document.createElement("h3");
divIn8II.appendChild(titreH3II);
titreH3II.textContent = "ENIGME NUMERO  "  ;
const paraII = document.createElement("p");
divIn8II.appendChild(paraII);
paraII.innerHTML = "Lorsque T’Challa mange l’herbe en forme de coeur pour recevoir les pouvoirs du Black <br>Panther, il voit son père afin de lui demander conseil afin de devenir un bon roi. Cette <br>scène rappelle la même scène d’un certain film où un père dit à son fils de ne pas <br>oublier qui il est et d’où il vient. Quel est ce film ?";
titreH3II.style.textDecoration = "underline";
const textQII = document.createElement("p");
divIn8II.appendChild(textQII);
textQII.innerHTML = "01001100 01000101 00100000 01010010 01001111 01001001 <br> 00100000 01001100 01001001 01001111 01001110 00001101 <br>00001010";


const popUp = document.querySelector('div #popup-box1');
const popUpWrong = document.querySelector('div #popup-box');

const submitBtn = document.querySelector('input[type="submit"]');
const textArea = document.querySelector('input[type="text"]');
const textSaisie = textArea.value;
const formulaire = document.querySelector('form');
const sansEsp = textQ.innerText.trim();
const sansEsp1 = sansEsp.replace(/\s/g, '');






console.log(textQ.innerText.toLowerCase());
console.log(textSaisie);
console.log(formulaire);

formulaire.addEventListener('submit',(e)=>{
  
e.preventDefault();
const textSaisie = textArea.value;
const textSans = textSaisie.trim();
const textSans1 = textSans.replace(/\s/g, '');
let textUpper = textSans1.toUpperCase();

console.log(textUpper);
console.log(sansEsp1);

if(textUpper === sansEsp1){

  
    popUp.style.visibility = "visible";
    popUp.style.opacity = "1";

    const enigmNext = document.querySelector('button[class="validation1"]');
    console.log(enigmNext);
    enigmNext.addEventListener("click", ()=>{
      const divIn6 = document.querySelector('.e-in6');
      const divIn6I = document.querySelector('.e-in6I');
      const divIn6II = document.querySelector('.e-in6II');
     
divIn8.style.display = "none";
divIn8I.style.display = "block";
divIn6.style.display = "none";
divIn6I.style.display = "block";
popUp.style.visibility = "hidden";
    popUp.style.opacity = "0";
    const textArea = document.querySelector('input[type="text"]');
    textArea.value = " ";
    textUpper = null;
    textArea.focus();


    console.log(textUpper);


  });
  
}
else if(textUpper === sans){
  popUp.style.visibility = "visible";
  popUp.style.opacity = "1";

  const enigmNext = document.querySelector('button[class="validation1"]');
  console.log(enigmNext);
  enigmNext.addEventListener("click", ()=>{
    const divIn6 = document.querySelector('.e-in6');
    const divIn6I = document.querySelector('.e-in6I');
    const divIn6II = document.querySelector('.e-in6II');
   
divIn8I.style.display = "none";
divIn8II.style.display = "block";
divIn6I.style.display = "none";
divIn6II.style.display = "block";
popUp.style.visibility = "hidden";
  popUp.style.opacity = "0";
  const textArea = document.querySelector('input[type="text"]');
  textArea.value = " ";

  });
}
else
{
  popUpWrong.style.visibility = "visible";
  popUpWrong.style.opacity = "1"

  const enigmNext = document.querySelector('button[class="validation"]');
    console.log(enigmNext);
    enigmNext.addEventListener("click", ()=>{
      popUpWrong.style.visibility = "hidden";
      popUpWrong.style.opacity = "0"

      const textArea = document.querySelector('input[type="text"]');
      textArea.value = " ";
      textArea.focus();


    });
}

});



//let sansEsp2 = textReponse.innerText.trim();
//let sansEsp3 = sansEsp2.replace(/\s/g, '');

/*
formulaire.addEventListener('submit',(e)=>{
  
      e.preventDefault();
      const textSaisie = textArea.value;
      const textSans = textSaisie.trim();
      const textSans1 = textSans.replace(/\s/g, '');
      const textLower = textSans1.toLowerCase();
      
      console.log(textLower);
      
      
      if(textLower === sans){
          popUp.style.visibility = "visible";
          popUp.style.opacity = "1";
      
          const enigmNext = document.querySelector('button[class="validation1"]');
          console.log(enigmNext);
          enigmNext.addEventListener("click", ()=>{
            const divIn6 = document.querySelector('.e-in6');
            const divIn6I = document.querySelector('.e-in6I');
            const divIn6II = document.querySelector('.e-in6II');
           
      divIn8I.style.display = "none";
      divIn8II.style.display = "block";
      divIn6I.style.display = "none";
      divIn6II.style.display = "block";
      popUp.style.visibility = "hidden";
          popUp.style.opacity = "0";
          const textArea = document.querySelector('input[type="text"]');
          textArea.value = " ";
      
          });
      }


    
  
  else
  {
    popUpWrong.style.visibility = "visible";
    popUpWrong.style.opacity = "1"
    const enigmNext = document.querySelector('button[class="validation"]');
    console.log(enigmNext);
    enigmNext.addEventListener("click", ()=>{
      popUpWrong.style.visibility = "hidden";
      popUpWrong.style.opacity = "0"

      const textArea = document.querySelector('input[type="text"]');
      textArea.value = " ";
      textArea.focus();


    });
    
  }
  
  });

*/




window.addEventListener('scroll', (e)=>{
  const barre = document.querySelector(".test3");
 

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





