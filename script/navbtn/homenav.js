export 
function nav(){const bar = document.querySelector('.js-bar');
const searchBox = document.querySelector('.js-me');
const btns = document.querySelector('.js-me button');
// making searh button interactive
const input = document.querySelector('.js-me input');
btns.addEventListener('click',()=>{
const vid = document.querySelectorAll('.js-get');
  const inputcollect = input.value;
  const collect = inputcollect.toLowerCase();
  vid.forEach((image) =>{
    const {moveName} = image.dataset;
    const name = moveName.toLowerCase();
    console.log(name)
    if(collect === name){
   
   image.style.display = 'block';
  }
  else{
       image.style.display = 'none';

  }
  })
  
  
});
//bar section display none and bolck;
bar.addEventListener('click', () => {

  if (searchBox.style.display === 'none' || searchBox.style.display == '') {
    searchBox.style.display = 'block';
        searchBox.style.left= '215px';

    bar.style.display = 'none';
 
    setTimeout(()=>{
      searchBox.style.display = 'none';
          bar.style.display = 'block';

    },50000);
     }
});
document.querySelectorAll('.btn button').forEach((btn) =>{
  btn.addEventListener('click',() =>{
    if(!btn.classList.contains('show')){
      prevShow('.show','show');
      btn.classList.add('show')
    }
    
  })
})

//catigories display on 
 const btn = document.querySelector('.btn');

const popular = document.querySelector('.popular');
const catigories = document.querySelector('.js-cati');
catigories.addEventListener('click', () =>{
  
 if(btn.style.display === ''|| btn.style.display === 'none'){
   btn.style.display = 'block';
      btn.style.top = '-195px';
      popular.style.marginTop = '-100px';

   

   catigories.style.display = 'none';
   setTimeout(() =>{
        btn.style.display = 'none';
   catigories.style.display = 'block';
      popular.style.marginTop = '60px';

   },10000)
 }

 
    btn.style.display = 'flex';


});
//nav btn
document.querySelectorAll('.nav-btn button').forEach((button) =>{
  button.addEventListener('click',()=>{
    if(!button.classList.contains('btn-color')){
      prevShow('.btn-color','btn-color')
      button.classList.add('btn-color');
    }
  })
});




}
function remove(){
document.querySelector(name).style.display = 'none'; 
  
  
}
export function prevShow(second, name){
  const show =document.querySelector(second);
  if(show){
    show.classList.remove(name)
  }
}
