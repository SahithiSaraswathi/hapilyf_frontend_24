import React from 'react'
import tp4 from "../Images/tp4.png"
import {Link} from "react-router-dom"
import '../Home/Home.css'
import Navbar from "../Navbar/Navbar"
import Footer from '../Footer/Footer'

function DoctorP4(){
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
    const y={
        paddingLeft:"80px"
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
                   <img style={m} src={tp4} alt=''></img>
                  </div>
                  <div className="details">
                      <h1 style={l}>Shamoli Kasbekar</h1>
                      <p style={y}>MA In Clinical Psychology</p>
                      <Link to="/bookApp" className="btn">Book A Session</Link>
                    </div>
                  </div>
                  </div>
    </div>

    <div className="content">
        <h2>Specialization</h2>
        <p>Anxiety, Stress, Relationship Issues, Depression, Sleep Issues, Self Confidence, Anger, OCD, Phobia</p>
       <br></br> <h2>Therapeutic Expertise</h2>
        <p>Cognitive Behavioural Therapy (CBT), Behavioural Modification For Kids, Client Centred, Rational Emotive Behavioural Therapy (REBT)
        </p>
        <h2>Languages Spoken</h2>
        <p>English, Hindi</p>
            
<h2>About</h2>
<p>Shamoli holds a Masters in Psychology (Clinical). She offers a safe space for clients to explore and resolve their issues pertaining to anxiety, depression, interpersonal relationships, anger management, and self-esteem among others. Effective communication, active listening, empathy, interpersonal awareness and a good observational ability are her strengths. 
    She uses an eclectic approach to understand mental health issues and design treatment plans. 
    She is a compassionate and qualified psychologist dedicated to help people achieve a fulfilling life by enabling them to effectively deal with their mental health issues.</p>
    </div>

</div>
</section>
<section>
    <hr></hr>
<Footer/></section>


</>
)
}

export default DoctorP4