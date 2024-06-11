import './style.css'

const dots = document.querySelectorAll('.dot');
let slideCounter = 1;


//Reset inactive dot color
const dotColorReset = () : void =>{
  dots.forEach((dot)=>{
    dot.style.backgroundColor = 'white';
  })
}

// Using dots to navigae the picture
dots.forEach((dot,i) => {
  dot.addEventListener('click', ()=> {
    dotColorReset();
    slider.style.transform = `translateX(-${i*500}px)`;
    dot.style.backgroundColor = 'black';
    slideCounter = i+1;
  })
})

//Dot color reset for arrow
const dotColorResetSlide= () : void =>{
  dotColorReset();
  dots[slideCounter-1].style.backgroundColor = 'black';
};

dots[0].style.backgroundColor = 'black';


//Arrow navigation

const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.image');

rightArrow.addEventListener('click', () => {

  if(slideCounter < images.length){
    slider.style.transform = `translateX(-${slideCounter*500}px)`;
    slideCounter ++;
  }else{
    slider.style.transform = `translateX(0px)`;
    slideCounter = 1;
  }

  dotColorResetSlide();

})

leftArrow.addEventListener('click', () => {

  if(slideCounter > 1){
    slider.style.transform = `translateX(-${(slideCounter-2)*500}px)`;
    slideCounter --;
  }else{
    slider.style.transform = `translateX(-${(images.length-1)*500}px)`;
    slideCounter = images.length;
  }

  dotColorResetSlide();
})


//Autoplay feature 

for(let i=3000; i< 200000; i+=3000){

  setTimeout(() => {
    if(slideCounter < images.length){
      slider.style.transform = `translateX(-${slideCounter*500}px)`;
      slideCounter ++;
    }else{
      slider.style.transform = `translateX(0px)`;
      slideCounter = 1;
    }
  
    dotColorResetSlide();
}, i);  



}






 

