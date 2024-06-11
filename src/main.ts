import './style.css'

const dots = document.querySelectorAll('.dot');
let slideCounter = 1;


//Reset inactive dot color
const dotColorReset = () : void =>{
  dots.forEach((dot)=>{
    (dot as HTMLElement).style.backgroundColor = 'white';
  })
}

// Using dots to navigae the picture
dots.forEach((dot,i) => {
  dot.addEventListener('click', ()=> {
    dotColorReset();
    (slider as HTMLElement).style.transform = `translateX(-${i*500}px)`;
    (dot as HTMLElement).style.backgroundColor = 'black';
    slideCounter = i+1;
  })
})

//Dot color reset for arrow
const dotColorResetSlide= () : void =>{
  dotColorReset();
  (dots[slideCounter-1] as HTMLElement).style.backgroundColor = 'black';
};

(dots[0] as HTMLElement).style.backgroundColor = 'black';


//Arrow navigation
const leftArrow = document.querySelector('.left-arrow') as HTMLElement | null;
const rightArrow = document.querySelector('.right-arrow') as HTMLElement | null;
const slider = document.querySelector('.slider') as HTMLElement | null;
const images = document.querySelectorAll('.image');

(rightArrow as HTMLElement).addEventListener('click', () => {

  if(slideCounter < images.length){
    (slider as HTMLElement).style.transform = `translateX(-${slideCounter*500}px)`;
    slideCounter ++;
  }else{
    (slider as HTMLElement).style.transform = `translateX(0px)`;
    slideCounter = 1;
  }

  dotColorResetSlide();

});

(leftArrow as HTMLElement).addEventListener('click', () => {

  if(slideCounter > 1){
    (slider as HTMLElement).style.transform = `translateX(-${(slideCounter-2)*500}px)`;
    slideCounter --;
  }else{
    (slider as HTMLElement).style.transform = `translateX(-${(images.length-1)*500}px)`;
    slideCounter = images.length;
  }

  dotColorResetSlide();
});


//Autoplay feature 

for(let i=3000; i< 200000; i+=3000){

  setTimeout(() => {
    if(slideCounter < images.length){
      (slider as HTMLElement).style.transform = `translateX(-${slideCounter*500}px)`;
      slideCounter ++;
    }else{
      (slider as HTMLElement).style.transform = `translateX(0px)`;
      slideCounter = 1;
    }
  
    dotColorResetSlide();
}, i);  

}






 

