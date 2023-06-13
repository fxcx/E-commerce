import React,{ useState } from "react";
import InputForm from "./InputForm";
import swal from 'sweetalert';
import "./customerForm.css"


function CustomerForm({ onCheckout }){
    const [buyerData, setBuyerData] = useState({
        name: "",
        email: "",
        phone: "",
      });

      function handleInputChange(evt) {
        let nameInput = evt.target.name;
        let value = evt.target.value;
        const newBuyerData = { ...buyerData };
        newBuyerData[nameInput] = value;
        setBuyerData(newBuyerData);
      }

      function onSubmit(evt) {
        evt.preventDefault();
        if(buyerData.name.length > 5 && buyerData.email.length > 5 && buyerData.phone.length > 5 ){
            setBuyerData({
                name: "",
                email: "",
                phone: "",
              });
              onCheckout(buyerData);
  
        }else{
            swal("Cuidado!", "Verifique que los datos sean correctos", "warning");
        }
      }

    return(
        <div className="checkoutForm">
            <form>
                <InputForm
                value={buyerData.name}
                name="name"
                title="Nombre completo"
                onChange={handleInputChange}
                />
                <InputForm
                value={buyerData.email}
                name="email"
                title="Email"
                onChange={handleInputChange}
                />
                <InputForm
                value={buyerData.phone}
                name="phone"
                title="Tel"
                onChange={handleInputChange}
                />

                <button onClick={onSubmit}>Crear orden</button>
            </form>
        </div>
    )
}

export default CustomerForm;