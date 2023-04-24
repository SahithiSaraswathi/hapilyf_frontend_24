import React from 'react'
import tp5 from "../Images/tp5.png"
import {Link} from "react-router-dom"
import '../Home/Home.css'
import Navbar from "../Navbar/Navbar"
import Footer from '../Footer/Footer'

function DoctorP5(){
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
                   <img style={m} src={tp5} alt=''></img>
                  </div>
                  <div className="details">
                      <h1 style={l}>Divyanshi Lohiya</h1>
                      <p style={y}>MA In Counselling Psychology</p>
                      <Link to="/bookApp" className="btn">Book A Session</Link>
                    </div>
                  </div>
                  </div>
    </div>

        <div className="content">
            <h2>Specialization</h2>
            <p>Anxiety, Stress, Depression, Relationship Issues, Family Therapy, Grief & Loss, Trauma, Body Image, Psycho-Somatic Disorders</p>
           <br></br> <h2>Therapeutic Expertise</h2>
            <p>Cognitive Behavioural Therapy (CBT), Client Centred, Mindfulness Based Therapies
            </p>
            <h2>Languages Spoken</h2>
            <p>English, Hindi, Gujarati, Telugu</p>
            <h2>About</h2>
    <p>Spandana is a Masters in Psychology, with a specialization in the area of counselling for issue relating to Anxiety, Depression, Self Esteem, Abuse, Interpersonal Relationships, and Adolescent Issues to name a few. She is committed towards destigmatizing mental health issues and aspires to create non-judgmental, empathetic spaces for the treatment and prevention of mental health issues to facilitate holistic growth.</p>
        </div>

    </div>
</section>
<section>
    <hr></hr>
<Footer/></section>
</>
)
}
export default DoctorP5

