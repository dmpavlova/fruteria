import { useState } from "react";
function Groceries({groceries}){
    const [showText,setShowText] = useState(false);

    const showTextClick = (element)=>{
        element.showMore=!element.showMore
        setShowText(!showText)
    }

    return(<div className="products">
        {groceries.map((element=>{
        const{id,name,image,price,description,showMore}=element;
        return(<div className="product-card" key={id}>
            <img src={image} width='250px' height='250px' alt="grocery"/>
            <div className="product-info">
                <h3>{name}</h3>
                <h4>{price} руб./кг</h4>
                <p>Описание: {showMore?description:description.substring(0,50)+'...'}<button className="show" onClick={()=>showTextClick(element)}>{showMore?'Скрыть':'Показать'}</button></p>
            </div>
            </div>)
    }))}
    </div>)    
}
export default Groceries;