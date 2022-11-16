import { useState } from 'react';
import { data } from './data';
import Buttons from './Buttons';
import './App.css';
import Groceries from './Groceries';

function Catalog(){
    const [groceries,setGroceries] = useState(data);

    const chosenGroceries=(category)=>{
      const newGroceries=data.filter(element=>element.category === category);
      setGroceries(newGroceries);
    }
    return(
        <div>
        <div className='cont'>
          <h2 className='back'>Каталог продуктов</h2>
        </div>
        <Buttons chosenGroceries={chosenGroceries}/>
        <Groceries groceries={groceries}/>
      </div>
    )
}
export default Catalog;