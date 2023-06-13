import MyButton from "../MyButton/MyButton"
import "./buttonCount.css"
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function  ButtonCount(props) {
  const [cantidad, setCantidad] = useState(1);
  function addCount(){
    if(cantidad < props.stock){
      setCantidad(cantidad + 1);
    }
  }

  function subtractCount(){
    if(cantidad > 1){
      setCantidad(cantidad - 1);
    }
  }

    return (
    <>
      <div className="buttonCount" >
        <div className="buttonCountRow">
          <MyButton text="-" color="btn btn-outline-secondary" buttonTouch={subtractCount}/>
          <input className="w-25 text-center" type="text" value={cantidad} readOnly disabled /> 
          <MyButton text="+" color="btn btn-outline-secondary" buttonTouch={addCount}/>
        </div>
        <div className="buttonCountRow">
          <MyButton text="Agregar" color="btn btn-outline-dark" buttonTouch={()=> props.finishCount(cantidad)}/>
        </div>
      </div>
      
        
    </>
    );
  }
  
  export default ButtonCount;