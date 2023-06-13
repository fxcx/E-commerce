import React, { useState, useEffect } from "react";
import ItemList from "./ItemList/ItemList";
import {getItems,getItemsByCategory} from "../../services/firebaseService";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [Loading, setLoading] = useState(true);
  const categoria = useParams().categoria;

  useEffect(() => {
    if (categoria === undefined) {
      getItems()
        .then((respuesta) => {
          setProducts(respuesta);
          setLoading(false);
        });
    }
    else {
      getItemsByCategory(categoria)
      .then((productosFiltrados) => {
        setProducts(productosFiltrados)
        setLoading(false);
      });
    }
  }, [categoria]);

  if(Loading) return <Loader/>;

  return <ItemList productos={products} />;

  

}

export default ItemListContainer;