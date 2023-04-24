import React, {useState} from 'react';
import { Link } from "react-router-dom";
import tp1 from "../Images/tp1.png"
import tp2 from "../Images/tp2.png"
import tp3 from "../Images/tp3.png"
import tp4 from "../Images/tp4.png"
import tp5 from "../Images/tp5.png"
import tp6 from "../Images/tp6.png"
import doctors from "../Images/doctors.png"
import "../OurServices/OurServices.css"
import "../Home/Home.css"

import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import {useNavigate} from 'react-router-dom'

function Props(props){
  
  const btn_style = {color:'#8e44ad',top:'20px'} 
  const btn_style2 = {textAlign:'center'} 

  
  return(
    <div className="box2">
    <div className="image2">
        <img alt="" src={props.img}></img></div>     
            
        <h4><b>{props.name}</b></h4>
        <p>{props.study}</p>
        
        <div className="btns">
             <Link to={props.link} style={btn_style}>View Profile</Link>
             <Link to="/BookApp" style={btn_style2}>Book A Session</Link>
        </div>
  
    </div>
)
}
function OurCounsellors(Prop){
  const history=useNavigate()
  const lpo=()=>{
    history('/search')
  }
  const mn={
    width:"180px",
    height:"50px",
    fontSize:"15px",
    fontWeight:"800px",

  }
  const st={
    background:"white",
  }
  const  styleobj= {
   fontSize: "large",
  }

const styleobj2 = {
  color:"#8e44ad",
  paddingTop: "20px",
}

const styleobj3 = {
  textAlign: "center",
}

const search=Prop.name
  return(
    <>
    <Navbar/>
<div style={st}>
<section style={st} className="home" id="home">

        <div className="image">
            <img src={doctors}></img>
        </div>

        <div className="content">
            <h3>Choose help-not suffering</h3>
            <p>Online/Offline Counselling Therapy With Top Pschologists.</p>

            <button style={mn} classname="btns" onClick={lpo}>Search Therapists</button>
        </div>

    </section></div>

   {/* <div><Search/></div> */}
   <br></br>
   <div className="gh">
   <br></br>
   <h1 style={styleobj3}>OUR THERAPISTS</h1>
   <br></br>


   <div className="container_ss">
    {/* <div className="box2">
    <div className="image2">
       <img src={tp1}></img>
      </div>
      <div className="name_job">Iqra Beg</div>
      <div className="rating">
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="far fa-star"></i>
        <i className="far fa-star"></i>
        <i className="far fa-star"></i>
      </div>
      <p>MS in Clinical Psychology</p>
      <div className="btns">
    
        <Link to="/profile11">View Profile</Link>
        <Link to="/bookApp">Book A Session</Link>
      </div> */}

      <Props img={tp1} name="Iqra Beg" study="MS in Clinical Psychology" link="/profile1"></Props>
    {/* </div> */}
    {/* <div className="box2">
      <div className="image2">
      <img src={tp2}></img>
      </div>
      <div className="name_job">Shrinkhala Majumdar</div>
      <div className="rating">
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="far fa-star"></i>
        <i className="far fa-star"></i>
      </div>
      <p>Msc. in Psychology</p>
      <div className="btns">
        <Link to="/profile22" style={styleobj2}>View Profile</Link>
        <Link to="/bookApp" style={styleobj3}>Book A Session</Link>
      </div>
    </div> */}
          <Props img={tp2} name="Shrinkhala Majumdar" study="Msc. in Psychology" link="/profile2"></Props>
    {/* <div className="box2">
      <div className="image2">
      <img src={tp3}></img>
      </div>
      <div className="name_job">Dr. V S Ananthakrishnan</div>
        <div className="rating">
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="far fa-star"></i>
      </div>
      <p>MBBS, MD (Psychiatry)</p>
      <div className="btns">
        <Link to="/profile33" style={styleobj2}>View Profile</Link>
        <Link to="/bookApp" style={styleobj3}>Book A Session</Link>
      </div>
    </div>
  </div> */}
          <Props img={tp3} name="Dr. V S Ananthakrishnan" study="MBBS, MD (Psychiatry)" link="/profile3"></Props></div>

  <div className="container_ss">
    {/* <div className="box2">
    <div className="image2">
       <img src={tp4}></img>
      </div>
      <div className="name_job">Shamoli Kasbekar</div>
      <div className="rating">
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="far fa-star"></i>
        <i className="far fa-star"></i>
        <i className="far fa-star"></i>
      </div>
      <p>Msc in Clinical Psychology</p>
      <div className="btns">
        <Link to="/profile66" style={styleobj2}>View Profile</Link>
        <Link href="/bookApp" style={styleobj3}>Book A Session</Link>
      </div>
    </div> */}
            <Props img={tp4} name="Shamoli Kasbekar" study="Msc in Clinical Psychology" link="/profile4"></Props>
    {/* <div className="box2">
      <div className="image2">
      <img src={tp5}></img>
      </div>
      <div className="name_job">Divyanshi Lohiya</div>
      <div className="rating">
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="far fa-star"></i>
        <i className="far fa-star"></i>
      </div>
      <p>MA in Clinical Psychology</p>
      <div className="btns">
        <Link to="/profile44" style={styleobj2}>View Profile</Link>
        <Link to="/bookApp" style={styleobj3}>Book A Session</Link>
      </div>
    </div> */}
                <Props img={tp5} name="Divyanshi Lohiya" study="MA in Clinical Psychology" link="/profile5"></Props>
    {/* <div className="box2">
      <div className="image2">
      <img src={tp6}></img>
      </div>
      <div className="name_job">Spandana Reddy</div>
        <div className="rating">
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="far fa-star"></i>
      </div>
      <p>MA Counselling psychology</p>
      <div class="btns">
        <Link to="/profile55" style={styleobj2}>View Profile</Link>
        <Link to="/bookApp" style={styleobj3}>Book A Session</Link>
      </div>
    </div>
  </div> */}

<Props img={tp6} name="Spandana Reddy" study="MA Counselling psychology" link="/profile6"></Props>
</div>
</div>
<Footer/>
  </>

  )
  }

  export  default OurCounsellors