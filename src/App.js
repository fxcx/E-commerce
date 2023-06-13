import NavBAR from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Checkout from './components/Checkout/Checkout';
import Cart from './components/Cart/Cart';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { CartContextProvider } from './storage/cartContext';
// import { exportProducts } from './services/firebaseService';

function App() {
  return (
   <>
   {/* <button onClick={exportProducts}>Export</button> */}
   <CartContextProvider>
      <BrowserRouter>
          <NavBAR/>
          <Routes>
              <Route path='/' element={<ItemListContainer/>} />
              <Route path='/cart' element={<Cart/>} />
              <Route path='/checkout' element={<Checkout/>} />
              <Route path="/categoria/:categoria" element={<ItemListContainer/>}/>
              <Route path="/categoria/:categoria/:marca" element={<ItemListContainer/>}/>
              <Route path="/Item/:IDproducto" element={<ItemDetailContainer/>} />
              <Route path='*' element={<h1>Error! No se pudo hallar el elemento</h1>}/>
          </Routes>
          <Footer/> 
      </BrowserRouter>
    </CartContextProvider>
   </>
  );
}

export default App;
