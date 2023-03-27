import {BrowserRouter as Router , Routes ,Route,Link} from 'react-router-dom'; 
import Home from './webpages/Home';
import About from './webpages/About';
import ProductPage from './webpages/ProductPage';
import Navigation from './components/Navigation';
import Cart from './webpages/Cart';
import './Index.css';
import {myCartContext} from './components/CartContext';
import { useEffect,useState } from 'react';
import SingleProduct from './components/SingleProduct';


 const  App=()=>{
  
 const [cart,setCart]=useState({});

//  return new Promise((resolve,reject) => {
//   const ;
  
// resolve (cart);
// })

// }

// export const StoreCart =(cart)=>{
// ;

// }





 useEffect(()=>{

 const  mycart = window.localStorage.getItem('cart');


  setCart(JSON.parse(mycart));


 },[]); 

 useEffect(()=>{
  window.localStorage.setItem('cart',JSON.stringify(cart));

 },[cart])

    return (
        <>
        <Router>
          
           <myCartContext.Provider value={{cart,setCart}}> 
             <Navigation/>
                 <Routes>
            
            <Route path='/' element={<Home/>}></Route>
            <Route path='/About' element={<About/>}></Route>
            <Route path='/ProductPage' element={<ProductPage/>}></Route>
            <Route exact path="/ProductPage/:_id"  element={<SingleProduct/>}></Route>
            <Route path='/Cart' element={<Cart/>}></Route>
         

                 </Routes>
          </myCartContext.Provider>
       
        </Router>
    </>
  );
  }
 export default App;