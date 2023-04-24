import React from 'react'
import tp3 from "../Images/tp3.png"
import {Link} from "react-router-dom"
import '../Home/Home.css'
import Navbar from "../Navbar/Navbar"
import Footer from '../Footer/Footer'

function DoctorP3(){
    

const y={
        paddingLeft:"80px"
    }
    const l={
        paddingTop:"40px",
        paddingLeft:"0px"
    }
    const m={
        borderRadius:"50px",
        height:"300px",
        width:"300px",
        paddingBottom:"0px",
        background:"#EEEEEE"
    }
    const mm={
        background:"#EEEEEE"
    }
    return(
        <>
<Navbar/>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>



<section className="about" id="about">
    
<div className="row">

    <div className="image">
        <div className="container8">
            <div className="box888">
                <div className="image">
                   <img style={m} src={tp3} alt=''></img>
                  </div>
                  <div className="details">
                      <h1 style={l}>Dr. V S Ananthakrishnan</h1>
                      <p style={y}>MBBS, MD (Psychiatry)</p>
                      <Link to="/bookApp" className="btn">Book A Session</Link>
                  </div>
            </div>
        </div>
    </div>

    <div className="content">
        <h2>Specialization</h2>
        <p>Sleep Issues, Phobia, Sexual Issues, Depression, Anxiety, Stress, OCD, Bipolar Disorder, Geriatric Issues, Child Counseling, ADHD (Adult)</p>
       <br></br> <h2>Therapeutic Expertise</h2>
        <p>Cognitive Behavioural Therapy (CBT), Rational Emotive Behavioural Therapy (REBT), Mindfulness Based Therapies</p>
        <h2>Languages Spoken</h2>
        <p>English, Hindi, Malayalam, Tamil</p>
        <h2>About</h2>
        <p>Dr. V S Ananthakrishnan is an eminent practicing psychiatrist with 5+ years of experience.
             He is a consultant psychiatrist at the Peroor Super Speciality Hospital & specializes in de-addiction, sexology, sleep disorders, depression, anxiety, OCD, and marital problems. 
            He has a multitude of research papers published under his name on geriatric psychiatry.</p>
    </div>
  
</div>
  
</section>
<section>
    <hr></hr>
<Footer/></section>
</>
)
}

export default DoctorP3