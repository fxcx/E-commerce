import { createContext,useState} from "react";
import swal from 'sweetalert';


const cartContext = createContext( [] );
const Provider = cartContext.Provider;


function CartContextProvider(props){
    const [miCarrito, setMiCarrito] = useState([]);

    function totalItemsInCart(){
        let cantidad = 0;
        miCarrito.forEach(item => {cantidad += item.count})
            return(cantidad)
    }

    function addToCart(item,cantidad){
        let itemIndex = miCarrito.findIndex(itemInCart => item.IDproducto === itemInCart.IDproducto);
        const newCart = [...miCarrito];
        if(itemIndex === -1){
            const newItem = {...item,count: cantidad};
            newCart.push(newItem);
        }
        else{
            if((newCart[itemIndex].count + cantidad) > newCart[itemIndex].stock ){
                swal("Lo sentimos", "No disponemos del stock suficiente", "warning");
            }
            else{
                newCart[itemIndex].count += cantidad;
            }
        }
        setMiCarrito(newCart);
    }

    function totalTicket(){
        let total = 0;
        miCarrito.forEach(item => {
            total += item.discount ? item.precio*item.count - item.precio*item.count*item.discount : item.precio*item.count; 
        })
        return total;
    }

    function clearCart(){
        setMiCarrito([]);
    }

    function removeItemInCart(itemID){
        const newCart = miCarrito.filter(item => (item.IDproducto !== itemID))
        setMiCarrito(newCart);

    }

    return(
        <Provider value={{
                        cart : miCarrito,
                        totalItems :totalItemsInCart,
                        addToCart:addToCart,
                        totalTicket,
                        removeItemInCart,
                        clearCart
                        }}>
            {props.children}
        </Provider>
    )
}

export {cartContext , CartContextProvider};