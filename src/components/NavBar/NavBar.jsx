import "./navBar.css"
import CartWidget from "../CartWidget/Cartwidget";
import { NavLink } from "react-router-dom";


function  NavBAR() {
    return (
    <>
      <nav className="navBar">
      <NavLink to={"/"}>
        <img className="icon" src="https://res.cloudinary.com/dtvv5h3mm/image/upload/v1668975701/cursoReactJS/iconBeer_ntnsxk.svg" alt= "logo" />
      </NavLink> 
          
        <ul>
          <li>
            <NavLink to={"/categoria/cerveza"}>Cervezas</NavLink>
          </li>
          <li>
            <NavLink to={"/categoria/snack"}>Snacks</NavLink>
          </li>
          <li>
            <NavLink to={"/categoria/vino"}>Vinos</NavLink>
          </li>
        </ul>
      
        <CartWidget/>
      </nav>  
    </>
    );
  }
  
  export default NavBAR;