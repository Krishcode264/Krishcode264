import React from 'react'
import {myCartContext} from '../components/CartContext';
import { useContext } from 'react';
import { useEffect,useState } from 'react';

import { createContext } from 'react';


const Cart = () => {

  // const {cart}=useContext(myCartContext);
 const [cartproducts,setcartproducts]=useState([])
    const updatedarry=[];
    const{cart,setCart}=useContext(myCartContext);
  // console.log(typeof(cart.totalitems));
  const[gotprice,togotprice]=useState(false);
  

 
   useEffect(()=>{
    
        if(!cart.items){
          return;
         }
  if(gotprice){
    return;
}
         const cartarry=Object.keys(cart.items);
         console.log(cart.items);

         fetch('http://localhost:8000/productinfo')
         .then(res=>{
           return res.json()
         })
         .then(products=>{

         products.map(product=>{

 
          for(let i=0;i<cartarry.length;i++){

            if(product._id===cartarry[i]){
              updatedarry.unshift(product);

            }
          
          }
          setcartproducts(updatedarry);
          togotprice(true);
         });
         });
        
       
        
},[cart]);



const incrementProduct=(e,cliclkedproductid)=>{

   

  const oldQty=cart.items[cliclkedproductid];
      
      const _cart={...cart}
      _cart.items[cliclkedproductid]=oldQty+1;
      _cart.totalitems +=1;
       setCart(_cart);
  
     }
     const decrement=(e,cliclkedproductid)=>{
      const _cart={...cart};
      const oldQty=cart.items[cliclkedproductid];
      if(oldQty===1){
        return;
      }
      _cart.items[cliclkedproductid]=oldQty-1;
      _cart.totalitems -=1;
       setCart(_cart);
  
     }
  
     let total=0;
  
  
     const getQty=(productid)=>{
         
       return cart.items[productid];
      }
      
      const GetPrice=(id,price)=>{
       const sum = price * getQty(id);
       total += sum;
       return sum;
  
     }
  


const handleDelete=(id)=>{
const _cart={...cart};
const qyt=_cart.items[id];
delete _cart.items[id];
_cart.totalitems -= qyt;
setCart(_cart);

setcartproducts(cartproducts.filter((product)=>product._id !== id));

}
const handleOrdernow=()=>{
  window.alert('Order placed successfully');
  setcartproducts([]);
  setCart({});
}

  return (
    !cartproducts.length 
    ? <img className="mx-auto w-1/2 mt-12" src="/images/empty-cart.png" alt="" />
    :
  <div className='container mx-auto lg:w-1/2 w-full pb-24'>
     
    <h1 className='my-12 font-bold '>Cart items</h1>
    <ul>
       {

        cartproducts.map((eachproduct) =>{
    return(
          <li className='mb-12' >
          <div className='flex items-center justify-between '>
            <div className='flex items-center'>
              <img src={eachproduct.image} alt="" className='h-16' />
              <span className='font-bold ml-4 w-48'>{eachproduct.name}</span>
            </div>
            <div> 
              
              <button className='bg-yellow-500 px-4 py-2 rounded-full leading-none' onClick={(e)=>{decrement(e,eachproduct._id)}}>-</button>
              <b className='mx-2'>{getQty(eachproduct._id)}</b>
              <button className='bg-yellow-500 px-4 py-2 rounded-full leading-none' onClick={(e)=>{incrementProduct(e,eachproduct._id)}} >+</button>
    
            
            </div>
            <span>₹{GetPrice(eachproduct._id,eachproduct.price)}</span>
            <button className='bg-red-500 px-4 py-2 rounded-full leading-none text-white' onClick={()=>{handleDelete(eachproduct._id)}}>Delete</button>
          </div>
        </li>
    )
        
        })
       }     
    </ul>
    <hr className="my-6"/>
            <div className="text-right">
                <b>Grand Total:</b>₹ {total}
            </div>


   
     <div className='text-right mt-6'>
      <button className='bg-yellow-500 px-4 py-2 rounded-full leading-none' onClick={handleOrdernow}>Order Now</button>
     </div>
    </div>

  )
}

export default Cart;