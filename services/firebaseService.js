import { initializeApp } from "firebase/app";
import {
        getFirestore,
        doc,
        getDoc,
        getDocs,
        collection,
        query,
        where,
        addDoc,} from "firebase/firestore"
  import productos from "../data/productos";

// configuro como conectarme a la db firebaseConfig lo saco de mi db en firebase
const firebaseConfig = {
    apiKey: "AIzaSyDGQzXxhHtxaaL3YTqWj6oZHCXPZV6JTHw",
    authDomain: "cursoreactjs-0001.firebaseapp.com",
    projectId: "cursoreactjs-0001",
    storageBucket: "cursoreactjs-0001.appspot.com",
    messagingSenderId: "602405988361",
    appId: "1:602405988361:web:73092e3921b89f7780b0d8"
  };
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  // doc me trae la referencia a la base "db", a que coleccion "products" y a cual documento "id"
  // getDoc recibo la respuesta y con data() saco los datos del item cargado en la base
  export async function  getItemByID(itemID){
    let docRef = doc(db,"products",itemID);
    let docSnap = await getDoc(docRef);
    let datos = docSnap.data();

    return ({...datos,IDproducto:itemID})
  }

  export async function getItemsByCategory(category){
    let collectionRef = collection(db, "products");
    let q = query(collectionRef,where("categoria","==",category));
    let docsSnap = await getDocs(q);
    let dataDocs = docsSnap.docs;
    let misDatos = dataDocs.map(doc => ({...doc.data(), IDproducto : doc.id}) )

    return misDatos;
  }

  // referencia a la coleccion "products"
  // me traigo todo con getDocs
  // armo un arry de docs con ".docs"
  // de cada doc me quedo con la data() y el id 
  export async function getItems(){
    let collectionRef = collection(db, "products");
    let docsSnap = await getDocs(collectionRef);
    let dataDocs = docsSnap.docs;
    let misDatos = dataDocs.map(doc => ({...doc.data(), IDproducto : doc.id}) )

    return misDatos;
  }

  export async function createBuyOrder(order){
    const collectionRef = collection(db, "orders");
    let newOrder = await addDoc(collectionRef,order)
    return newOrder.id;
  }

  export async function exportProducts(){
    const collectionRef = collection(db, "products");
    // uso for of en lugar de foreach xq foreach no funciona bien con asincronia
    for(let producto of productos){
     await addDoc(collectionRef,producto)
    } 


  }
