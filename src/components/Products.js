import React from 'react'
import Product from './Product';
import { useEffect } from 'react';
import { useState } from 'react';



const Products = () => {

const [products,setProducts] = useState([]);

useEffect(()=>{
  fetch('http://localhost:8000/productinfo')
    .then(res=>{
   return res.json()
  })
    .then(products=>{
     // console.log(products[4]._id);
    setProducts(products);
  })
    .catch(err=>{
   //  console.log(err.message)
  })
},[]);
 
  return (
    <div className='container mx-auto pb-24 '>
     <h1 className='text-lg font-bold my-8'>Products</h1>
     <div className='grid grid-cols-5 my-8 gap-24'>
     {
       products.map((product)=>{
        return <Product key={product._id} product={product}/>
      })
       }
     
     </div>
    </div>
  )
}

export default Products;
