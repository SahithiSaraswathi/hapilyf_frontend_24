import React,{useState, useEffect} from 'react'
import"./Contact.css"
import { View } from './View';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "../Navbar/Navbar";
import emailjs from 'emailjs-com'
// getting the values of local storage
export const getDatafromLS=()=>{
  const data = localStorage.getItem('books');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}


export const Contact = () => {


  const [books, setbooks]=useState(getDatafromLS());

  // input field states
  const [title, setTitle]=useState('');
  const [author, setAuthor]=useState('');
  const [rating, setRating] = useState('');
  const [isbn, setIsbn]=useState('');
const st={
  color:"purple"
}
  // form submit event
  const handleAddBookSubmit=(e)=>{
    e.preventDefault();
    // creating an object
    let book={
      title,
      author,
      rating,
      isbn
    }

    const ec={
      title:title,
      author:author,
      rating:rating,
      isbn:isbn
    };

    setbooks([...books,book]);


  
    setTitle('');
    setAuthor('');
    setRating('');
    setIsbn('');

    document.getElementById('0').innerHTML="The following details are sent succesfully";
    document.getElementById('1').innerHTML=book.title;
  document.getElementById('2').innerHTML=book.author;
  document.getElementById('3').innerHTML=book.rating;
  document.getElementById('4').innerHTML=book.isbn;
console.log(ec)
  emailjs.sendForm('service_od8ne0g','template_0aftn25',e.target,"WBaiTmF7Kld_g9YhY").then(res=>{
    console.log(res);
  }).catch(err=>console.log(err));
  
    
  }
   const deleteBook=(isbn)=>{
    const filteredBooks=books.filter((element,index)=>{
      localStorage.removeItem(index)
      return element.isbn !== isbn
    })
    setbooks(filteredBooks);
    // localStorage.removeItem('isdn')
  }

  const styleo = {
    width:"500px"
  }
  // saving data to local storage
  useEffect(()=>{
    localStorage.setItem('books',JSON.stringify(books));
  },[books])

  //render(){
  return (
  <>
  <Navbar/>
  <br></br>
  
<div className='sa'>
<div className="su">
<br></br><br></br><br></br><br></br><br></br><br></br>
      <div className="container_c">
      <div className="content">
        {/* <div style={styleobj}>Send Us a Message</div> */}
        <div className="left-side">
         <div className="address details">
            <i className="fas fa-map-marker-alt"></i>
             <div className="topic">Address</div>
             <div className="text-one">Gyan Marg</div>
            <div className="text-two">Sricity,517646</div>
           </div>
          <div className="phone details">
            <i className="fas fa-phone-alt"></i>
            <div className="topic">Phone</div>
            <div className="text-one">+91 8341169799</div>
            <div className="text-one">+91 9701851687</div>
            <div className="text-one">+91 8247885766</div>
           </div>
           <div className="email details">
             <i className="fas fa-envelope"></i>
             <div className="topic">Email</div>
             <div className="text-one">hapilyf@gmail.com</div>
             <div className="text-two">info.hapilyf@gmail.com</div>
           </div>
         </div>
         <div className="right-side">
           <div className="topic-text">Send us a message</div>
           
                     <form autoComplete="off" className='form-group'
          onSubmit={handleAddBookSubmit}>
            {/* <label>Title</label> */}
            <br></br>
            <div className='input-box'>
            <input style={styleo} type="text" name="title" className='form-control' placeholder="Enter your name" required
            onChange={(e)=>setTitle(e.target.value)} value={title}></input></div>
            {/* <br></br> */}
            <div className='input-box'>
            {/* <label>Author</label> */}
            <input type="email" placeholder="Enter your email" name="author" className='form-control' required     
            onChange={(e)=>setAuthor(e.target.value)} value={author}></input></div>
            {/* <br></br> */}
            <div className='input-box'>
            <input style={styleo} min="1" max="5" type="number" name="rating" className='form-control' placeholder="Give Rating Out of 5"  required  
            onChange={(e)=>setRating(e.target.value)} value={rating}></input></div>
            <div className='input-box message-box'>
            {/* <label>ISBN#</label> */}
            <input type="text" placeholder="Enter your Message" name="isbn" className='form-control' required    
            onChange={(e)=>setIsbn(e.target.value)} value={isbn}></input></div>
            {/* <br></br> */}
            <div className="button">
            {/* <button type="submit" className='btn btn-success btn-md'> */}
            <button type="submit">
              SUBMIT
            </button></div>
          </form>
          {/* <h3 id="1"></h3>
          <h3 id="2"></h3>
          <h3 id="3"></h3>
          <h3 id="4"></h3> */}
         </div>
       </div>
</div>
<br></br>
<br></br>
<br></br>
<div className="b">
  

  <h2 style={st} id="0"></h2>
  
<h3 id="1"></h3>
          <h3 id="2"></h3>
          <h3 id="3"></h3>
          <h3 id="4"></h3>
          {/* <p>Details Sent Successfully</p> */}
</div>

{/* 
<div className='wrapper'>
      <div className='main'>


        <div className='view-container'>
          {books.length>0&&<>
            <div className='table-responsive'>
              <table className='table'>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Rating</th>
                    <th>Message</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  
                <View books={books} deleteBook={deleteBook}/> 
                  
                </tbody>
              </table>
            </div>
            <button className='btn btn-danger btn-md'


            onClick={()=>setbooks([])}>Remove All</button>
          </>}
          {books.length < 1 && <div>No books are added yet</div>}
        </div>

      </div>
    </div> */}
    </div>
    </div>
    </>
  )
}
//}
//}
export default Contact