import "./item.css"
import { Link } from "react-router-dom";

function  Item(props) {
    let producto = {...props.producto};
    let altText = `imagen  + ${producto.titulo}`;
    return (
    <>  
        <Link to={`/item/${producto.IDproducto}`}>
            <div className="item">
                <h5>{producto.titulo}</h5>
                <img className="imgItem" src={producto.img} alt ={altText} srcSet="" />
                <div className="test">
                    <p className={producto.discount ? "precioOferta" : "precio"}>$ {producto.precio}</p>
                    {producto.discount && <small className="oferta">$ {producto.precio - producto.precio*producto.discount}</small>}
                </div>             
            </div>
        </Link>
    </>
    );
  }
  
  export default Item;