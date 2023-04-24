import React from 'react'
import tp2 from "../Images/tp2.png"
import '../Home/Home.css'
import {Link} from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import Footer from '../Footer/Footer'
function DoctorP2(){
    
 const y={
        paddingLeft:"180px"
    }
    const mm={
        background:"#EEEEEE"
    }
    const l={
        paddingTop:"40px",
    }
    const m={
        borderRadius:"50px",
        height:"500px",
        width:"300px",
        paddingBottom:"0px",
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

        <div  className="image">
            <div  className="container8">
                <div  className="box888">
                    <div  className="image">
                       <img style={m} src={tp2} alt=''></img>
                      </div>
                      <div className="details">
                          <h1 style={l}>Shrinkhala Majumdar</h1>
                          <p style={y}>Msc. in Psychology</p>
                          <Link to="/bookApp" className="btn">Book A Session</Link>
                          </div>
                      </div>
                      </div>
        </div>

        <div className="content">
            <h2>Specialization</h2>
            <p>Couple Counseling, Grief & Loss, Relationship Issues, Cognitive Rehabilitation, Family Therapy, Self Confidence, Child Counseling, Stress, Anxiety, Depression</p>
           <br></br> <h2>Therapeutic Expertise</h2>
            <p>Cognitive Behavioural Therapy (CBT), Rational Emotive Behavioural Therapy (REBT), Behavioural Modification For Kids, Play And Art Therapy For Kids, Mindfulness Based Therapies</p>
            <h2>Languages Spoken</h2>
            <p>English, Bengali, Hindi</p>
            <h2>About</h2>
            <p>Shrinkhala has derived her understanding in the field of Psychology through a Master’s in Science degree in this field. With an experience in of over 100 sessions in counselling, she is skilled with professional training in areas such as Anxiety, Stress, Depression, Abuse and Work management. She has also gained certifications in REBT under the training of Dr.Debbie Ellis along with expertise in training areas such as Rorschach Inkblot that has enhanced her knowledge base and decorates her perspective on this school of thought.
                 She has also worked for a year in an Ecommerce platform that has conceptualized her skills in Organizational behavior and relations.</p>
        </div>
    </div>
</section>
<section>
    <hr></hr>
<Footer/></section>

</>
)
}

export default DoctorP2