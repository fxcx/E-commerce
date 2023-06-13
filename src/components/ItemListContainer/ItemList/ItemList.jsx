import "./itemList.css"
import Item from "../Item/Item";


function  ItemList(props) {
    return (
    <>
      <div className="itemList">
        {props.productos.map( item =>{
            return <Item
                      producto = {item}
                      key = {item.key}
                    />          
        })}           
      </div>   
    </>
    );
  }
  
  export default ItemList;