import React,{useContext } from "react";
import CustomerForm from "./CustomerForm/CustomerForm";
import {createBuyOrder} from "../../services/firebaseService"
import { cartContext } from "../../storage/cartContext";
import swal from 'sweetalert';
import {useNavigate} from "react-router-dom"


function Checkout(){
    const { cart , clearCart} = useContext(cartContext);
    const { totalTicket } = useContext(cartContext);
    const navigate = useNavigate();

    function handleCheckout(buyerData) {
        const order = {
          buyer: buyerData,
          items: cart,
          total: totalTicket(),
          date: new Date(),
        };
        createBuyOrder(order)
            .then((id) => {
                swal("Orden realizada con éxito", "ID de su Orden " + id, "success")
                .then(()=>{
                    clearCart();
                    navigate("/");
                })
            })     
      }
    
    return(
        <>
            <CustomerForm
            onCheckout ={handleCheckout}
            />
        </>
    )
}

export default Checkout;