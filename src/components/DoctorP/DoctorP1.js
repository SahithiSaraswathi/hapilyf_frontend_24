import React from 'react'
import tp1 from "../Images/tp1.png"
import {Link} from "react-router-dom"
import '../Home/Home.css'
import Navbar from "../Navbar/Navbar"
import Footer from '../Footer/Footer'
//import '../OurServices/OurServices.css'
function DoctorP1(){
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
                   <img style={m} src={tp1} alt=''></img>
                  </div>
                  <div className="details">
                         <h1 style={l}>Iqra Beg</h1>
                        <p style={y}>MS in Clinical Psychology</p>
                       <Link to="/bookApp" className="btn">Book A Session</Link>
                  </div>
                  </div>
                  </div>
    </div>

    <div className="content">
        <h2>Specialization</h2>
        <p>Stress, Anxiety, Depression, OCD, Suicidal Ideation, Relationship Issues, Sleep Issues, Anger, Phobia, Eating Disorders, Couple Counseling, Suicidal Ideation, Bipolar Disorder, ADHD (Adult), ADHD (Child), Self-Harm, Body Image, Phobia, Career Counselling, Marital Discord, Eating Disorders, Self Confidence, Psycho-Somatic Disorders</p>
       <br></br> <h2>Therapeutic Expertise</h2>
        <p>Dialectical Behavioural Therapy (DBT), Cognitive Behavioural Therapy (CBT), Rational Emotive Behavioural Therapy (REBT), Mindfulness Based Therapies</p>
        <h2>Languages Spoken</h2>
        <p>Urdu, English, Kashmiri, Hindi</p>
        <h2>About</h2>
        <p>Iqra is a licensed Clinical Psychologist educated and trained in the United States.
            She has an MS, MPhil in Clinical Psychology and has worked with adults and children across the globe.
            Iqra has a specialization in DBT (Dialectical Behavior therapy).
            Her most recent research thesis was Coping And Social Support In Relation To Post-traumatic Growth After Kashmir Floods.
            She is interested in working with people with anxiety, depression, PTSD, OCD and people with suicidal ideation.</p>
    </div>
</div>
</section>
<section>
    <hr></hr>
<Footer/></section>

</>
)
}

export default DoctorP1

