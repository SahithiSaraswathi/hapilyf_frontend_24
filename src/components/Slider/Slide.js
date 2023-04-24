import companyLogo from '../Images/ther.jpg';
import './s.css'

export default function Slide(){
    var counter = 1;
    setInterval(function(){
      document.getElementById('radio' + counter).checked = true;
      counter++;
      if(counter > 4){
        counter = 1;
      }
    }, 3000);
    return(
        
        <>
        <div>
        <div className="slider">
        <div className="slides">
         <input type="radio" name="radio-btn" id="radio1"/>
        <input type="radio" name="radio-btn" id="radio2"/>
        <input type="radio" name="radio-btn" id="radio3"/>
        <input type="radio" name="radio-btn" id="radio4"/>
        <div className="slide first">
          <img src={companyLogo} alt=""/>
        </div>
        <div className="slide">
          <img src="https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F211108174234-therapy-patient-stock.jpg" alt=""/>
        </div>
        <div className="slide">
          <img src='https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half/public/field_blog_entry_images/shutterstock_349474598.jpg?itok=tgJ-xylz' alt=""/>
        </div>
        <div className="slide">
          <img src='https://www.psypost.org/wp-content/uploads/2022/06/psychologist-noting-problems-of-black-woman-patient-at-therapy-session-750x375.jpg' alt=""/>
        </div>
        <div class="navigation-auto">
          <div class="auto-btn1"></div>
          <div class="auto-btn2"></div>
          <div class="auto-btn3"></div>
          <div class="auto-btn4"></div>
        </div>
      </div>
      <div class="navigation-manual">
        <label for="radio1" class="manual-btn"></label>
        <label for="radio2" class="manual-btn"></label>
        <label for="radio3" class="manual-btn"></label>
        <label for="radio4" class="manual-btn"></label>
      </div>
    </div>
      </div>
        </>
    )
}

