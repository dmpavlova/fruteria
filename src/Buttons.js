function Buttons({chosenGroceries}){
   return(
   <div className="cont">
        <button onClick={()=>chosenGroceries('Фрукты')} className="change">Фрукты</button>
        <button onClick={()=>chosenGroceries('Овощи')} className="change">Овощи</button>
        <button onClick={()=>chosenGroceries('Ягоды')} className="change">Ягоды</button>
    </div>)
}
export default Buttons;