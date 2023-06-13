import React from "react";
import { cartContext } from "../../storage/cartContext";
import { useContext } from "react";
import MyButton from "../Buttons/MyButton/MyButton";
import "./cart.css"
import CartTable from "./CartTable/CartTable";
import { Link } from "react-router-dom";

function Cart(){

    const {totalItems} = useContext(cartContext);

    return(
    <> 
      <div className="cart">
      {totalItems()<1 ? 
        <>
          <h1>No hay productos cargados</h1>
          <Link to={"/"}>
            <MyButton
                text="Volver al inicio"
              />
          </Link>
          
        </>
        :
        <>
          <h1>Resumen de Compra</h1>
          <CartTable/>
          <div>
          <Link to={"/checkout"}>
            <MyButton
                text="Finalizar compra"
              />
          </Link>
          </div>
        </>
        }
        
      </div>
    </>
    );
}

export default Cart;