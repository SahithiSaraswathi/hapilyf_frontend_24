import React, {useState} from 'react'
import Navbar from "../Navbar/Navbar"
import"./Home.css"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"
import companyLogo from '../Images/ther.jpg';
import p1 from "../Images/p1.png";
import p2 from "../Images/p2.png";
import b1 from "../Images/b1.png";
import Happ from "../Images/Hapilyf Logo (1).png" 

import Footer from "../Footer/Footer"
import Slide from "../Slider/Slide"



const Home = () =>{

    const history = useNavigate();
  
    const coursesPage = () => {
        history("/ourservice")
    }

    const styleobj = {
        fontSize : "1vw",
    }
const hd={
  
    textAlign: "center",
    paddingBottom: "2rem",
    textShadow: "var(--text-shadow)",
    textTransform: "uppercase",
    color: "var(--black)",
    fontSize: "4rem",
   
  
}
return(
    <>
    <Navbar/>
    <h1>Hello</h1>
<section className="home" id="home">
      {/* <div className="image">
        <img src="ther.jpg" alt="" />
      </div> */}
      <div className="image">
      {/* <img src={} alt="BigCo Inc. logo"/> */}
      <Slide/>
    </div>

      <div class="content">
        <h3>Talk.Resolve.Heal.</h3>
        <p>Online/Offline Counselling Therapy With Top Pschologists.</p>
        <Link to="/login" className="btn">Get Started</Link>
      </div>
    </section>

    <section className="services" id="services">
      <h1 style={hd}>Mode of services</h1>

      <div className="box-container">
        <div className="box">
          <h3>Online Therapy sessions</h3>
          <p>User can select online sessions with therapists .</p>
        </div>

        <div className="box">
          <h3>Offline Therapy Sessions</h3>
          <p>User can select offline sessions with therapists</p>
        </div>

        <div className="box">
          <h3>Audio Sessions</h3>
          <p>User can ask for audio/talk-on sessins from therapist.</p>
        </div>
      </div>
    </section>

<hr size='10%'/>

    <section className="serv">
      <h1>OUR SERVICES</h1>

      <div className="container888">
        <div className="box888">
          <div className="image888">
          <img src={p1} alt="BigCo Inc. logo"/>
          </div>
          <div className="name_job888">Clinical Therapy</div>

          <p>
            Deals with specific mental health disorders and coping techniques
          </p>
          <div className="btns888">
            <button onClick={coursesPage}>
              Read More
            </button>
            {/* <!--<button>Book A Session</button>--> */}
          </div>
        </div>

        <div className="box888">
          <div className="image888">
          <img src={b1} alt="BigCo Inc. logo"/>
          </div>
          <div className="name_job888">Behavioural Therapy</div>

          <p>Recognise the trouble behaviour and change it for good</p>
          <div className="btns888">
            <button onClick={coursesPage}>
              Read More
            </button>

            {/* <!--<button>Book A Session</button>--> */}
          </div>
        </div>

        
        <div className="box888">
          <div className="image888">
          <img src={p2} alt="BigCo Inc. logo"/>
          </div>
          <div className="name_job888" style={styleobj}>
            Therapy for Children and Teenagers
          </div>

          <p>
            Explore solutions for prevailing childhood psychological problems
          </p>
          <div className="btns888">
            <button onClick={coursesPage}>
              Read More
            </button>
            {/* <!--<button>Book A Session</button>--> */}
          </div>
        </div>
      </div>
    </section>

    <hr size='10%'/>


    <section className="about" id="about">
      <h1 className="heading">about us</h1>

      <div className="row">
        <div className="image">
          <img src={Happ} alt="about" />
        </div>

        <div className="content">
          <h3>we take care of your healthy life</h3>
          <p>
            Hapilyf is a expanding community working towards changing the way
            individuals think & act about problems related to Mental Health. we
            want you to know <b>You Are Not Alone</b>. We are here to take your
            mind at a peaceful place, no matter what is happening around you.
          </p>
          <p>
            We offer comprehensive content all devoted to self-improvement with
            a focus on personal productivity, inspiration and self-education. We
            offer our audience a platform to share their real-life struggles &
            inspiring stories that can be published & get connected with people
            who are affected by problems like stress, anxiety, trauma, and
            depression. <br /><span id="dots">...</span>
            <span id="more"
              >This platform addresses important steps you can take in the
              coping process & even have effective action plans for recovery
              from stress management. Hapilyf is a place where individuals can
              overcome their day-to-day challenges in a stigma-free environment.
              While we aspire of a progressive society & culture, we intend to
              impart practices where mental health taboos & issues can be
              discussed openly & managed effectively with emotional and
              professional assistance.</span
            >
          </p>
          <button onclick="myFunction()" id="myBtn">Read more</button>
        </div>
      </div>
    </section>
    <hr size='10%'/>

<Footer/>




</>
)
 }
    export default Home
