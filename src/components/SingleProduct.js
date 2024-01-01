import React ,{useState} from 'react'
import { useParams,useNavigate} from 'react-router-dom'
import { useEffect } from 'react';
import { myCartContext } from './CartContext';
import { useContext } from 'react';
import data from '../data/db.json'
const SingleProduct = () => {
const[newduct,setProduct]=useState({});
const params=useParams();
const navigate=useNavigate();
const{cart,setCart}=useContext(myCartContext);
const [isadding ,setIsadding]=useState(false);



const AddtoCart=(product_id)=>
{
  setIsadding(true)
let __cart={...cart};

if(!__cart.items){
  __cart.items={};
  
}
if(__cart.items[product_id]){
  __cart.items[product_id] += 1;

}  else{

  __cart.items[product_id]=1;
  
}
if(!__cart.totalitems){
  __cart.totalitems=0;
}
__cart.totalitems += 1;

setCart(__cart);

setTimeout(() => {
  setIsadding(false);
}, 1000);

}

  
useEffect(()=>{
data.productinfo.map(eachProduct =>{

      if(eachProduct._id===params._id){
      setProduct(eachProduct);
      return null
      }
      return null

   } ) },[params._id]);
  

  return (
    <div className='container mx-auto mt-12'>
      <button className='font-bold bg-yellow-500 px-3 rounded-full hover:bg-yellow-700 mb-12 ' onClick={()=>{navigate(-1)}}>Back</button>
       <div className='flex '>
        <img src={newduct.image} className='mr-8' alt="not found"></img>
        <div>
          <h1 className='text-xl font-bold'>{newduct.name}</h1>
          <div className='text-md'>{newduct.size}</div>
          <div className='font-bold mt-2'>₹{newduct.price}</div>
          <button disabled={isadding} className={`${ !isadding ? 'bg-yellow-500' :'bg-green-500'} py-1 px-8 rounded-full font-bold mt-4`}  onClick={(e)=>{AddtoCart(newduct._id)}}>{`Add${isadding ?  'ing':''} to Cart`}</button>
        </div>
       </div>
    </div>
  )
}

export default SingleProduct