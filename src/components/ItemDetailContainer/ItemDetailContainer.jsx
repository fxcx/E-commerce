import React, { useState, useEffect,useContext } from "react";
import { getItemByID } from "../../services/firebaseService";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail/ItemDetail";
import "./itemDetailContainer.css"
import ButtonCount from "../Buttons/ButtonCount/ButtonCount";
import MyButton from "../Buttons/MyButton/MyButton";
import { cartContext } from "../../storage/cartContext";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";

function  ItemDetailContainer() {
    const [product, setProduct] = useState([]);
    const [Loading, setLoading] = useState(true);
    const [isEmpty, setIsEmpty] = useState(true);
    const itemID = useParams().IDproducto;
    const {addToCart} = useContext(cartContext);

useEffect(() => {
      getItemByID(itemID)
      .then((respuesta) => {
          setProduct(respuesta);
          setLoading(false);
    })
    .catch((error) => alert("Item no encontrado"));
    }, [itemID]); 

    function handleAddToCart(valor){
      addToCart(product,valor);
      setIsEmpty(false);
    }
    
    return (
    <>
      {
        Loading ? <Loader/> :
        <div className="itemDetail">
          <ItemDetail producto ={product}/>
          {isEmpty ? 
            <ButtonCount stock = {product.stock} finishCount={handleAddToCart}/> 
            : 
           <Link to={"/cart"}>
            <MyButton
              text = "Ir al carrito..."
              color="outline-success"
              />
           </Link>
          }   
        </div>
      }
    </>
    );
  }
  
  export default ItemDetailContainer;