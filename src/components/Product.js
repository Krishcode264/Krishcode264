import React from 'react';
import { Link } from 'react-router-dom';
import { myCartContext } from './CartContext';
import {useContext} from 'react';
import { useState } from 'react';



 






  const Product = (props) => {
 
  
  const {product} = props;


 
 const [isadding,setIsadding]=useState(false);

const {cart,setCart}=useContext(myCartContext);
     
const AddTocart=(event,product)=>{
  event.preventDefault();
//console.log("its clicked");

let _cart={...cart};
 

if(!_cart.items){
  _cart.items={};

}

if(_cart.items[product._id]){
_cart.items[product._id]=_cart.items[product._id]+1;


} else {
_cart.items[product._id]=1;
}
if(!_cart.totalitems){
_cart.totalitems=0;
}
_cart.totalitems += 1;

setCart(_cart);
setIsadding(true);
setTimeout(() => {
setIsadding(false);

},1000);
 
// cart should be object and it would have child items asa each product
          

}

  return (
   <Link  to={`/ProductPage/${product._id}`}>
     <div>
    <img src={product.image} alt={product.name} />
   
      <div className='text-center'>
        <h2 className='text-lg font-bold py-2 mx-auto'>{product.name}</h2>
        <span className='bg-gray-200 py-1 rounded-full text-sm px-4 '>{product.size}</span>
        </div>
        <div className='flex items-center justify-between mt-4'>
            <span>₹{product.price}</span>
            <button disabled={isadding} className={`${isadding ? 'bg-green-500':'bg-yellow-500'} py-1 px-4 rounded-full font-bold `}onClick={(e)=>{AddTocart(e,product);}} >ADD{`${isadding ? 'ED' : ''}`}</button>
        </div>

</div>
    </Link>
   
  )}


export default Product;