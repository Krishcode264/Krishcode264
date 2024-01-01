import {Link} from 'react-router-dom';
import { useContext } from 'react';
import { myCartContext } from './CartContext';
const Navigation = () => {
  const cartStyle={
    background:'#F59E0D',
    display:'flex',
    
  }
  const {cart}=useContext(myCartContext);
  return (
    <>
     <nav className='container  flex items-center justify-between py-4  '>
        
            <Link to="/">
                <img style={{height:45}}src='/images/logo.png' alt="not found"></img>
            </Link>
            <ul className='flex items-center'>
              <li className='hover:text-blue-800 '><Link to="/">Home</Link></li>
              <li className='ml-6 hover:text-red-800'><Link to="/productPage">Products</Link></li>
              <li className='ml-6'>
                <Link to="/Cart">
                  <div style={cartStyle} className='px-6 py-3 rounded-full'>
                    <span className='text-black'>{cart.totalitems ? cart.totalitems :0}</span>
                   <img src='/images/cart.png' alt='cart-img' className='ml-2 '></img>
                  </div>
                </Link>
              </li>
          
            </ul>
        


     </nav>
    </>
  );
}

export default Navigation;
