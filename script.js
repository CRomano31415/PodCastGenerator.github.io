const El = document.getElementById('myBtn');
const DivName = document.getElementById('name');
const DivBtn = document.getElementById('button');
const DivNameCss = document.querySelector("#name");
const DivEmoji = document.getElementById('emoji');

El.addEventListener("click", ()=>
{
  const arrGuests = [
  			'brandy', 
  			'claudia', 
  			'erika', 
  			'carly', 
  			'johnny', 
  			'flemister', 
  			'moorman', 
  			'dena', 
  			'swisher', 
  			'sara',
  			'lorena', 
  			'quezada',
  			'agrelo', 
  			'jimenez', 
  			'espi', 
  			'chaska', 
  			'D\'Essence',
  			'Darlene',
  			'Foley', 
  			'Whaley',
  			'Jill',
  			'Gil', 
  			'Ruth', 
  			'Joanna',
  			'Mia',
  			'Yearby',
  			'Jones',
  			'Tony',
  			'Green',
  			'Carlos',
  			'Martinez',
  			'Alvarado',
  			'Tran',
  			'Mark',
  			'Coach Olson',
  			'Rubin',
  			'Klussman'
  			];
  DivName.innerHTML = "";
  DivEmoji.style.opacity = 1;
  DivBtn.style.opacity = 0;
 
  let newText = document.createTextNode(arrGuests[Math.floor(Math.random() * 37) + 0]);
  DivName.appendChild(newText);
  DivName.style.opacity = 1;  
  El.innerHTML="Get a New Name!";
  DivBtn.style.opacity = 1;
});

//DivNameCss.addEventListener("animationend", ()=>{
//	El.innerHTML="Get a New Name!";
//	DivBtn.style.visibility = "visible";
//	DivName.style.visibility = "hidden";
//	DivName.innerHTML = "";
//});