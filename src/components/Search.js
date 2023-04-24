import React,{useState} from 'react'
import { Link, NavLink } from "react-router-dom"
import data from './data'
import Navbar from './Navbar/Navbar'
import './Search.css'
const Search = ()=>{
    const p={
        height:"100px",
        width:"500px"
    }
    // const l={
    //     height:"30px",
    //     width:"100px"
    // }
    const btn_style = {color:'#8e44ad',top:'10px'} 
  const btn_style2 = {textAlign:'center'} 
    const [filter, setFilter] = useState('')
    const searchText = (event)=>{
        setFilter(event.target.value);
    }
    let dataSearch = data.cardData.filter(item =>{
     return Object.keys(item).some(key=>
        item[key].toString().toLowerCase().includes(filter.toString().toLowerCase()))
    });
return(
    <>
    <Navbar/>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    
 <section className='py-4 container'>
        <div className='row justify-content-center '>

            <div className="col-12 mb-5 ">
                <div className="mb-3 col-4 mx-auto text-center"> 
                 
                <div>
                    <label className="form-lable h4">Search</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    value={filter}
                    onChange={searchText.bind(this)}/>

                
                 </div>
            </div> 
            {
                dataSearch.map((item,index)=>{
                    return(
                        // <div style={p}>
                        //  <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
                        // <div className="card p-0 overflow-hidden h-100 shadow">
                        //     {/* <div style={p}> */}
                        //     <img src={item.img} className="card-img-top img-fluid"/>
                        //     {/* <div style={p}> */}
                        //          <div className="card-body">
                        //           <h5 className="card-title">{item.title}</h5>  
                        //           <p className="card-text">{item.desc}</p>
                        //          </div>
                        

                        // <div className='container'>
                        <div className="k" style={{paddingLeft:'20rem'}}>
                        <div className="box2_s ">
                        <div className="image2_s ">
                            <div className="kk "> 
                            {/* <div style={p}> */}
                            <img src={item.img} /></div>
                            {/* <div style={p}> */}
                                 <div className="card-body">
                                  <h3 className="card-title">{item.title}</h3>  
                                  <h5 className="card-text">{item.desc}</h5>
                                  <h5 className="card-text">{item.location}</h5>

                                  <div className="bts">
                                    {/* <h5>{item.link}</h5> */}
                                    {/* {console.log(item.link)} */}
                                    <Link to ={item.link}>View Profile</Link>
                                    <br></br>
             {/* <Link to="/profile1" style={btn_style}>View Profile</Link> */}
             <Link to="/BookApp" style={btn_style2}>Book A Session</Link>
        </div>
                                 </div>
                                 {/* </div> */}
                            {/* </img> */}
                         </div>
                         </div>

                         </div>
                    //  </div>  
                    
                    )
                })
            }

        </div>
        </div>
      </section> 
    </>
)
}

export default Search