import React, {useState} from 'react';
import { Link } from "react-router-dom";
import"./OurServices.css"
import "../Home/Home.css"
import o1 from "../Images/o1.png"
import o2 from "../Images/o2.png"
import o3 from "../Images/o3.png"
import os1 from "../Images/os1.png"
import os2 from "../Images/os2.png"
import os3 from "../Images/os3.png"
import ose1 from "../Images/ose1.png"
import ose2 from "../Images/ose2.png"
import ose3 from "../Images/ose3.png"
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"

function OurServices(){
    const history = useNavigate();
  
const styleobj1={
 fontSize: "2.5vw",
 textAlign: "center"
}

const styleobj={
  fontSize: "2vw",
  textAlign: "center"
}

const  styleobj3={
  fontSize: "1.2vw",
  textAlign: "center"
}

    const coursesPage = () => {
        history("/clinical")
    }
const cours1=()=>{
  history('/bt')
}
const ch=()=>{
  history('/child')
}
    const book = ()=>{
      history("/bookApp")
    }
    const b={
      width:"320px",
      height:"480px"
    }

    return(

        

     <>
     <Navbar/>
<div className="gh">
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    <br></br>

    {/* <div className="gh"> */}
    <h1 style={styleobj1}>OUR SERVICES</h1>
    <br></br>
    <h2 style={styleobj}>Clinical Therapy</h2>
    <br></br>
    <h4 style={styleobj3}>Deals with specific mental health disorders and coping techniques</h4>
    <div className="container_ss">

      <div className="box">
      <div className="image">
         <img src={o1} alt=''></img>
        </div>
        <div className="name_job">Depression</div>

        <p>An elongated feeling of sadness and loss of interest.</p>
        <div className="btns">
          <button onClick={coursesPage}>Read More</button>
          <button className='b1'onClick={book}>Book A Session</button>
        </div>

      </div>
      <div  className="box">
        <div className="image">
         <img src={o2} alt=''></img>
        </div>
        <div className="name_job">Anxiety</div>
        <p> Intense and persistent worry and fear about everyday situations.</p>
        <div className="btns">
        <button onClick={coursesPage}>Read More</button>
          <button className='b1' onClick={book}>Book A Session</button>
        </div>
      </div>
      <div className="box">
        <div className="image">
         <img src={o3}></img>
        </div>
        <div className="name_job">Sleeping Disorder</div>

        <p> Irregular sleep pattern with too high or too less sleep duration.</p>
        <div className="btns">
        <button onClick={coursesPage}>Read More</button>
          <button className='b1' onClick={book}>Book A Session</button>
        </div>
      </div>
    </div>














<div className="gh">
   <br></br>
    <h1 style={styleobj}>Behavioural Therapy</h1>
    <br></br>
    <h4 style={styleobj3}>Recognize the trouble behaviour and change it to good</h4></div>
    <div className="container_ss">
      <div className="box">
      <div className="image">
         <img src={os1}></img>
        </div>
        <div className="name_job">Anger Management</div>
        <p>Sudden outbrusts, repetitive anger and frustation</p>
        <div className="btns">

        <button onClick={cours1}>Read More</button>
          <button onClick={book}>Book A Session</button>
        </div>
      </div>
      <div className="box">
        <div className="image">
         <img src={os2}></img>
        </div>
        <div className="name_job">Stress Management</div>
        <p> Heightened psychological arousal leading to uneasiness</p>
        <div className="btns">
        <button onClick={cours1}>Read More</button>
          <button onClick={book}>Book A Session</button>
        </div>
      </div>
      <div className="box">
        <div className="image">
         <img src={os3} alt=""></img>
        </div>
        <div className="name_job">Behavioural Disorder</div>
        <p> Characterized by patterns of disruptive behaviour</p>
        <div className="btns">
        <button onClick={cours1}>Read More</button>
          <button>Book A Session</button>
        </div>
      </div>
    </div>





   <div className="gh">
    <br></br>
    <h1 style = {styleobj}>Therapy for Children and Teenagers</h1>
    <br></br>
    <h4 style={styleobj3}>Explore solutions for prevailing childhood psychological problems</h4></div>
    <br></br>
    <h4></h4>
    <div className="container_ss">
      <div className="box">
      <div className="image">
         <img src={ose1}></img>
        </div>
        <div className="name_job">ADHD</div>
        <p>ADHD in regulation of attention and energy levels</p>
        <div className="btns">
        <button onClick={ch}>Read More</button>
          <button onClick={book}>Book A Session</button>
        </div>
      </div>
      <div className="box">
        <div className="image">
         <img src={ose2}></img>
        </div>
        <div className="name_job">Autism Spectrum Disorder</div>
        <p> Heightened psychological arousal leading to uneasiness</p>
        <div className="btns">
        <button onClick={ch}>Read More</button>
          <button onClick={book}>Book A Session</button>
        </div>
      </div>
      <div className="box">
        <div className="image">
         <img src={ose3}></img>
        </div>
        <div className="name_job">Bullying</div>
        <p>Disturbing experience and feeling of helplessness</p>
        <div className="btns">
        <button onClick={ch}>Read More</button>
          <button onClick={book}>Book A Session</button>
        </div>
      </div>
    </div> 
</div>
<Footer/>
    </>
    )
}

export default OurServices



// function OurServices()
// {
//   return(
//     <>
//     <br></br>
// <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
// <h1>OUR SERVICES</h1>
// <br></br>
// <h2>Clinical Therapy</h2>
// <br></br>
// <h4>Deals with specific mental health disorders and coping techniques</h4>
// <div className="container">
//   <div className="box">
//   <div className="image">
//   <img src={o1}></img>
//     </div>
//     <div className="name_job">Depression</div>

//     <p>An elongated feeling of sadness and loss of interest.</p>
//     <div className="btns">
//       <button onClick="window.location.href='clincalTherapy.html#1';">Read More</button>
//       <button onclick="window.location.href='bookApp.html';">Book A Session</button>
//     </div>
//   </div>
//   <div className="box">
//     <div className="image">
//     <img src={o2}></img>
//     </div>
//     <div className="name_job">Anxiety</div>
//     <p> Intense and persistent worry and fear about everyday situations.</p>
//     <div className="btns">
//         <button onclick="window.location.href='clincalTherapy.html#2';">Read More</button>
//         <button onclick="window.location.href='bookApp.html';">Book A Session</button>
//     </div>
//   </div>
//   <div className="box">
//     <div className="image">
//     <img src={o3}></img>
//     </div>
//     <div className="name_job">Sleeping Disorder</div>

//     <p> Irregular sleep pattern with too high or too less sleep duration.</p>
//     <div className="btns">
//       <button onclick="window.location.href='clincalTherapy.html#3';">Read More</button>
//       <button onclick="window.location.href='bookApp.html';">Book A Session</button>
//     </div>
//   </div>
// </div>














// <br></br>
// <h1>Behavioural Therapy</h1>
// <br></br>
// <h4>Recognize the trouble behaviour and change it to good</h4>
// <div className="container">
//   <div className="box">
//   <div className="image">
//   <img src={os1}></img>
//     </div>
//     <div className="name_job">Anger Management</div>
//     <p>Sudden outbrusts, repetitive anger and frustation</p>
//     <div className="btns">

//         <button onclick="window.location.href='bther.html';">Read More</button>
//       <button>Book A Session</button>
//     </div>
//   </div>
//   <div className="box">
//     <div className="image">
//     <img src={os2}></img>
//     </div>
//     <div className="name_job">Stress Management</div>
//     <p> Heightened psychological arousal leading to uneasiness</p>
//     <div className="btns">
//         <button onclick="window.location.href='bther.html';">Read More</button>
//       <button>Book A Session</button>
//     </div>
//   </div>
//   <div className="box">
//     <div className="image">
//     <img src={os3}></img>
//     </div>
//     <div className="name_job">Behavioural Disorder</div>
//     <p> Characterized by patterns of disruptive behaviour</p>
//     <div className="btns">
//       <button>Read More</button>
//       <button>Book A Session</button>
//     </div>
//   </div>
// </div>






// <br></br>
// <h1>Therapy for Children and Teenagers</h1>
// <br></br>
// <h4>Explore solutions for prevailing childhood psychological problems</h4>
// <br></br>
// <h4></h4>
// <div className="container">
//   <div className="box">
//   <div className="image">
//   <img src={ose1}></img>
//     </div>
//     <div className="name_job">ADHD</div>
//     <p>ADHD in regulation of attention and energy levels</p>
//     <div className="btns">
//         <button onclick="window.location.href='childther.html';">Read More</button>
//       <button>Book A Session</button>
//     </div>
//   </div>
//   <div className="box">
//     <div className="image">
//     <img src={ose2}></img>
//     </div>
//     <div className="name_job">Autism Spectrum Disorder</div>
//     <p> Heightened psychological arousal leading to uneasiness</p>
//     <div className="btns">
//         <button onclick="window.location.href='childther.html';">Read More</button>
//       <button>Book A Session</button>
//     </div>
//   </div>
//   <div className="box">
//     <div className="image">
//     <img src={ose3}></img>
//     </div>
//     <div className="name_job">Bullying</div>
//     <p>Disturbing experience and feeling of helplessness</p>
//     <div className="btns">
//       <button>Read More</button>
//       <button>Book A Session</button>
//     </div>
//   </div>
// </div>
// </>
// )
//   }
//   export default OurServices