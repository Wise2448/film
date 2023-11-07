import {nav} from '../navbtn/homenav.js';
import {video, loopingArray, display} from './Home.js';
import {stored, total, topStore, top} from './Like.js';
import {check,store} from './check.js';
console.log(video[0]);
//from here

//Home content page HYML
 export let likedMoviess = JSON.parse(localStorage.getItem('likes')) || [];

document.addEventListener('DOMContentLoaded',()=>{

 nav();
  loopingArray(24, 36, '.js-third');
 loopingArray(48, 60, '.js-last');
loopingArray(0, 12, '.js-first');

loopingArray(12, 24, '.js-second');
loopingArray(36, 48, '.js-four');
    

//Pushing items to it details page
imageevent()

//like  button interactive
lovedBTN()
 function lovedBTN() {
  const loved = document.querySelectorAll('.js-like');



  loved.forEach((likebtn) => {
    const { productId } = likebtn.dataset;

    if (localStorage.getItem(productId) === 'liked') {
      likebtn.classList.add('liked');
    }

    likebtn.addEventListener('click', () => {

      // like btn color changing active
      likebtn.classList.toggle('liked');

      const isLiked = likebtn.classList.contains('liked');
      if (isLiked) {
        localStorage.setItem(productId, 'liked');

      }

      else {
        localStorage.removeItem(productId);
        

      }
      if (localStorage.getItem(productId) === 'liked') {
        likebtn.classList.add('liked');
      }

    
    //pushing  it to top array
 
      //sending id to like areay

           const like = 1;
      const isChecked = likedMoviess.some(item => item.productId === productId && item.like === like);

      if (isChecked) {
        likedMoviess = likedMoviess.filter((item) =>
          !(item.productId === productId && item.like === like)
                    )


      }
      else {
        likedMoviess.unshift({ productId, like })
       top.splice(0,1, {productId})


               topStore();

                  }
                   stored()
           total()


      
console.log(top);

           
           

        



    });

  })
}
//

//catigories Acton button interactive 
/*document.querySelector('.btnAction').addEventListener('click',() =>{
 document.querySelector('.action-movies').innerHTML = 'Action Movies'
 loopingArray(48, 60, '.js-first');


document.querySelector('.upcoming-action').innerHTML = 'Action Comedy'

loopingArray(0, 12, '.js-last');
display('.js-Second');
display('.js-three');
display('.js-Second');
display('.js-Four')
imageevent();

lovedBTN()

  
});

document.querySelector('.btn-catoon').addEventListener('click', () => {
  document.querySelector('.action-movies').innerHTML = 'popular catoons'
loopingArray(36, 48, '.js-first');


  document.querySelector('.upcoming-action').innerHTML = 'Related catoon'
loopingArray(12, 24, '.js-last');

  display('.js-Second');

  display('.js-three');
  display('.js-Four')
  imageevent();

  lovedBTN()


});
*/


// image Event Listiner sending to next page
function imageevent(){
 const back = document.querySelectorAll('.js-img');
 back.forEach((button) => {
   button.addEventListener('click', () => {
     const { productId } = button.dataset;
 
 
 
     check.splice(0, 1, { productId });
     store();
     location.href = '../../check.html'
 
 
   })
 }); 
  
}

 
  
})
           total()
