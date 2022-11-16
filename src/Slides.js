import { dataSlides } from "./dataSlides";
import { useState } from "react";
import back from './/pic/back.png';
import forward from './/pic/forward.png';

function Slides() {
    const [pic,setPic]=useState(0);
    const {picture}=dataSlides[pic];
  
    const previousPic=()=>{
      setPic((pic=>{
        pic--;
        if(pic<0){
          pic=dataSlides.length-1;
        }
        return pic;
      }))
    }
  
    const nextPic=()=>{
      setPic((pic=>{
        pic++;
        if(pic>dataSlides.length-1){
          pic=0;
        }
        return pic;
      }))
    }
  
    return (      
      <div className="cont image-cont">
          <button onClick={previousPic}><img src={back} alt='back'/></button>
          <img src={picture} width='400px' alt='promotions'/>
          <button onClick={nextPic}><img src={forward} alt='forward'/></button>      
      </div>
    );
  }
  
  export default Slides;