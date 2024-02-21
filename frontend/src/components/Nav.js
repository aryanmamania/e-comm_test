import React, { useEffect } from 'react';
import { Link , useNavigate } from 'react-router-dom';

const Nav = () => {
   const auth = localStorage.getItem('user');
   const navigate = useNavigate();
   const logout=()=>{
    localStorage.clear();
    navigate('/signup')
   }
  return (
    <div>
      <ul className='nav-ul'>
        <li><Link to ="/">Products</Link></li>
        <li><Link to ="/add">Add Product</Link></li>
        <li><Link to ="/update">Update product</Link></li>
        
        <li><Link to ="/profile">profile</Link></li>
        <li>{ auth ? <Link onClick={logout} to="/signup">Logout</Link> :
        <Link to ="/signup">Signup</Link>}</li>

      </ul>
    </div>
  );
};
export default Nav;



