import { useState } from "react";
import { dataSlides } from './dataSlides';
function Promotions(){
const [prom] = useState(dataSlides);
    return(<div className="prom-container">
        {prom.map((element=>{
        const{id,picture,text}=element;
        return(<div className="product-card" key={id}>
            <img src={picture} width='450px' height='250px' alt="promotions"/>
            <div>
                <h3>{text}</h3>
            </div>
            </div>)
    }))}
    </div>)    
}
export default Promotions;