const $=s=>document.querySelector(s);
const $$=s=>document.querySelectorAll(s);
const arry=Array.from($$('.dots span'));

$('.Carousel').style.left=0+'px';
let animated=false;
let index=0;
let frameNum=10;
let time=3;


function animate(offset){
    let goal=parseInt($('.Carousel').style.left)-offset;
    animated=true;

    let animate=setInterval(()=>{
        let n= parseInt($('.Carousel').style.left);
    if((n-frameNum)==(goal)){
       clearInterval(animate);
        animated=false;
        $('.Carousel').style.left=parseInt($('.Carousel').style.left)-frameNum+'px';

        if((n-frameNum)==-2400){
            $('.Carousel').style.left=0+'px';
        }
    }else{
        
        $('.Carousel').style.left=parseInt($('.Carousel').style.left)-frameNum+'px';
    }
  },time)

  
$$('.dots span').forEach(span=>span.classList.remove('dots-active'));
$$('.dots span')[index].classList.add('dots-active');
}
    

function point(){
    $('.dots').onclick=function(e){
        if(e.target.tagName!=='SPAN')return;
        let pointIndex=Array.from($$('.dots span')).indexOf(e.target);
        console.log(pointIndex,index);
        if(pointIndex == index ||animated){
            return;
        }
        offset=(pointIndex-index)*600;
        console.log(offset);
        if(offset<0){
            frameNum=-10;
        }else{
            frameNum=10;
        }
        index=pointIndex;
        animate(offset);
    }
}


function play(){
    setInterval(() => {
        if(animated){
            return;
        }
        
        if(index + 1 > 3){
            index = 0;
        }else{
            index ++;
        }
        console.log(index); 
       
        frameNum=10;
       animate(600);
    }, 2000);
}


play();
point();
       
        
    

