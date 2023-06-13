import "./itemDetail.css"

function  ItemDetail(props) {

  let altText = `imagen  + ${props.producto.titulo}`;
  let producto = {...props.producto}

    return (
    <>
        <h1>{producto.titulo}</h1>
        <img className="imgDetail" src={producto.img}  alt ={altText} srcSet="" />
        <p><strong>Descripción del producto: </strong>{producto.descripcion}</p>
        <div className="itemPrice">
          <p className={producto.discount ? "precioOferta" : "precio"}>$ {producto.precio}</p>
          {producto.discount && <small className="oferta">$ {producto.precio - producto.precio*producto.discount}</small>} 
        </div>
    </>
    );
  }
  
  export default ItemDetail;