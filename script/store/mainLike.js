import {likedMoviess} from './homes.js';

import {top} from './Like.js';

import {nav} from '../navbtn/homenav.js';
import {video} from './Home.js';
document.addEventListener('DOMContentLoaded'
,() =>{
  //top image JavaScript 
let html = '';

top.forEach((id) =>{
  const matched =  video.find(item => {
  return  item.id === id.productId

    })
html = `<img src="${matched.image}" alt="">
   <span>${matched.name}</span>
`
});

document.querySelector('.js-top').innerHTML = html;
//video count JS interactive 

let totaLiked = 0;
likedMoviess.forEach((item) => {
  totaLiked += item.like;
});

document.querySelector('.span-js').innerHTML = totaLiked;
// liked movies display page
  
let sumHTML = '';
likedMoviess.forEach((item) =>{
      const matched = video.find((id) =>{
        return id.id === item.productId
      });
  sumHTML += `  <div class="like-vid">
    <div class="img"><img src="${matched.image}" alt=""></div>
  <div class="name-type">  <div class="name">${matched.name}</div><div class="type">${matched.genre}</div>
      <div class="first-span">
   <span class="hd">${matched.view.quality}</span>
      <span>${matched.genre}</span>
   <span>${matched.view.year}</span>
   <span><i class='bx bx-time' ></i> 3hr</span>

  </div>
  <div class="share">
<span class="color"><i class='bx bxs-share-alt'></i></span> 
<span class="english">Language: English</span>
<button type="submit"><i class='bx bx-play'></i> Watch</button>
</div>


  </div>

  </div>
`    

});
document.querySelector('.js-love').innerHTML = sumHTML;

})