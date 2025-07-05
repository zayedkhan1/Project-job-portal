import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import AuthContext from '../../context/authcontext/AuthContext';
import logo from '../../assets/Icons/icons8-permanent-job-96.png'

const NavBar = () => {
  const {user,signOutUser}=useContext(AuthContext);
  const handleSignOut=()=>{
    signOutUser()
    .then(()=>{
      console.log('sign out successfull')
    })
    .catch(error=>{
      console.log('failed to sing out',error)
    })
  }
    const links=<>
    <li> <NavLink to=''>Home</NavLink> </li>
    <li> <NavLink to='/myApplication'>My Application</NavLink> </li>
    <li> <NavLink to='/addJob'>Add Job</NavLink> </li>
        
        
    
    </>

const navigate=useNavigate();
const handleRegister=()=>{
    navigate('/register')
}
    
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {links}
      </ul>
    </div>
    <img className='w-12' src={logo} alt="" />
    <h3 className="text-2xl font-bold">JOB POrTAL</h3>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    {
      user?
      <>
      <button onClick={handleSignOut} className='btn'>Sing Out</button>

      </>
      :
      <>
      <a onClick={handleRegister} className='btn' >Register</a>
     <Link to='/singIn'>
     <button className='btn'>Sing In</button>
     </Link>
      </>

    }
    
  </div>
</div>
        </div>
    );
};

export default NavBar;