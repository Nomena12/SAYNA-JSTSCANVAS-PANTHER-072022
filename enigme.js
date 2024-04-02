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
