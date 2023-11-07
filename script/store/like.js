import {likedMoviess} from './homes.js';
//import {top} from './homes.js';



export let  top = JSON.parse(localStorage.getItem('top')) || [];
if(!Array.isArray(top)){
  top = [];
}



export function stored(){
  return localStorage.setItem('likes',JSON.stringify(likedMoviess))
}

export function topStore(){
  
return   localStorage.setItem('top',JSON.stringify(top))

  
}

export function total(){
let totaLiked = 0;
likedMoviess.forEach((item) =>{
  totaLiked += item.like;
});
document.querySelector('.span').innerHTML = totaLiked;
}
 


