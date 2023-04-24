import React from 'react'
import"./Footer.css"
import { Link } from "react-router-dom"



function Footer(){

const s1={textDecoration:'none'}
    return(
        <>

    <section className="footer">
    <div className="box-container">
      <div className="box">
        <h3>quick links</h3>
        <Link to="/home"> <i class="fas fa-chevron-right"></i> home </Link>
        <Link to="/ourservice">
          <i class="fas fa-chevron-right"></i> services
        </Link>
        <Link to="/home"> <i class="fas fa-chevron-right"></i> about </Link>
        <Link to="/ourcounsellors"> <i class="fas fa-chevron-right"></i> counsellors </Link>
        <Link to="/bookApp"> <i class="fas fa-chevron-right"></i> book </Link>
      </div>

      <div className="box">
        <h3>our services</h3>
        <Link to="#">
          <i class="fas fa-chevron-right"></i> Online Therapy Sessions
        </Link>
        <Link to="#">
          <i class="fas fa-chevron-right"></i> Offline Therapy Sessions</Link>
        
        <Link to="#"> <i class="fas fa-chevron-right"></i> Audio Sessions </Link>
      </div>

      <div className="box">
        <h3>contact info</h3>
        <Link to="#"> <i class="fas fa-phone"></i> 8247885766 </Link>
        <Link to="#"> <i class="fas fa-phone"></i> 9701851687 </Link>
        <Link to="#"> <i class="fas fa-phone"></i> 8341169799 </Link>
        <Link to="#">
          <i class="fas fa-envelope"></i> reddypriya.g20@iits.in
        </Link>
        <Link to="#">
          <i class="fas fa-envelope"></i>sahithisaraswathi.s20@iiits.in
        </Link>
        <Link to="#"> <i class="fas fa-envelope"></i>sairamya.l20@iiits.in </Link>
        <Link to="#">
          <i class="fas fa-map-marker-alt"></i> Sricity, AP, India - 517646.
        </Link>
      </div>

      <div className="box">
        <h3>follow us</h3>
        <Link to="#"><ion-icon name="logo-facebook"></ion-icon> facebook </Link>
        <Link to="#"> <ion-icon name="logo-twitter"></ion-icon> twitter </Link>
        <Link to="#">
          <ion-icon name="logo-instagram"></ion-icon> instagram</Link>
        <Link to="#"> <ion-icon name="logo-linkedin"></ion-icon> linkedin </Link>
        <Link to="#"><ion-icon name="logo-pinterest"></ion-icon> pinterest </Link>
      </div>
    </div>

    <div className="credit">
      created by IIITS Students-Group-3 | all rights reserved
    </div>
  </section>

</>
)
}
export default Footer
