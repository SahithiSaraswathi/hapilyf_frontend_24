import React, {useState} from 'react'
import"./Navbar.css"
import { Link } from "react-router-dom"
import companyLogo from '../Images/ther.jpg';
import { useNavigate } from "react-router-dom";

function Navbar(){
  const s1={fontSize:"3rem",color:"black",textDecoration:"none",fontWeight:'600'}
  const history = useNavigate();
const cour=()=>{
  localStorage.clear();
  history("/login")
}
  // const handleClick=(e)=>{
  //   // e.preventDefault();
  //   // console.log("userPtofile")
  //   // history("/");
  
  // }
  function ref() {
    
    setTimeout(() => {
      document.location.reload();
      }, 0.000001);
      
      // <Link to="/"></Link>
  }

    return(
        <>
        
        <header className="header_navbar">
        <Link style={s1} to="/home">Hapilyf</Link>

        <nav className='navbar_navbar'>
            <Link to='/oldhome'>Home</Link>
            <Link to="/ourservice">services</Link>
        <Link to="/ourcounsellors">Therapists</Link>
        {/* <Link to="/bookapp">book</Link> */}
        <Link to="/contact">Contact</Link>
       {/* <Link to="/search">Search</Link> */}
        {/* <Link to="/PP">Plans & Pricing</Link> */}
         {/* <Link to="/admin">Admin</Link>  */}
      {/* <div> */}
        <Link onClick={ref} to="/">User Profile</Link>
        {/* </div> */}
        
        <div className="dropdown_navbar">
          <button className="dropbtn_navbar" onClick={cour}>
            LogOut
            <i className="fa fa-caret-down_navbar"></i>
          </button>
          {/* <div className="dropdown-content_navbar">
            <Link to="/register-u">User</Link>
            <Link to="/register-d">Doctor</Link>
          </div> */}
        </div>
        </nav>
        </header>

        </>
    )
}
export default Navbar