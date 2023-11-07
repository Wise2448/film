import {video} from './Home.js';
import {check} from './check.js';
getten();

function getten() {
  let sumHTML = ''
  check.forEach((items) => {

    let matching;
    video.forEach((item) => {
      if (item.id === items.productId) {
        matching = item;
      }
    });
    sumHTML = `  <div class="top js-top">
<div class="cover">
<div class="img"><img src="${matching.image}" alt=""></div>
<div class="text">
  <div class="save">
 <div class="name">${matching.name}</div>
 <span class="span">${matching.view.quality}</span>
  <span>${matching.genre}</span>
    <span>${matching.view.year}</span>
        <span><i class='bx bx-time' ></i> 3hr</span>
</div>
<button class="get" type="submit"><i class='bx bx-down-arrow-alt'></i> download</button>
</div>
</div>
</div>
<div class="share">
<span class="color"><i class='bx bxs-share-alt'></i></span> 
<span class="english">Language: English</span>
<button type="submit"><i class='bx bx-play'></i><a href="video.html"> Watch</a></button>
</div>


<div class="about-movie">
<div class="about">About Movie</div> 
<div class="shor-note">Tiger 3 is an   margi
d by Aditya Chopra under Yash Raj Films. The film stars Salman Khan, Katrina Kaif, and Emraan Hashmi. It is a sequel to Tiger Zinda Hai and is the fifth installment in the YRF Spy Universe</div>
<p>  Release date:<span> 12 November 2023 (India)</span></p>
<p>  Director: <span>Maneesh Sharma</span></p>
<p>  Music by:<span> Songs: Pritam; Score: Tanuj Tiku</span></p>
<p>  Budget: <span>3 billion INR</span></p>
<p>  Story by: <span>Aditya Chopra</span></p>
<p>  Distributed by: <span>Yash Raj Films</span></p>
</div>

<div class="cast">
  <div class="Cast">Cast</div>
  <div class="display">
    <div class="cast-image">
      <img src="../68628_v9_bc.jpg" alt="">
      <div class="cast-name">Himxai</div>
    </div>
        <div class="cast-image">
      <img src="./image/icon/user.png" alt="">
      <div class="cast-name">David Martin</div>
    </div>
    <div class="cast-image">
      <img src="./image/icon/user.png" alt="">
      <div class="cast-name">Vranded devil</div>
    </div>
    <div class="cast-image">
      <img src="./image/icon/user.png" alt="">
      <div class="cast-name">Himxai</div>
    </div>
    <div class="cast-image">
      <img src="./67480_v9_bd.jpg" alt="">
      <div class="cast-name">Himxai</div>
    </div>
    <div class="cast-image">
      <img src="./128650_v9_bc.jpg" alt="">
      <div class="cast-name">Himxai</div>
    </div>

  </div>
</div>
`

  });
  document.querySelector('.js-up').innerHTML = sumHTML;
}