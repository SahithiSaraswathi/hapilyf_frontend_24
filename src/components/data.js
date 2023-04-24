import tp1 from "./Images/tp1.png"
import tp2 from "./Images/tp2.png"
import tp3 from "./Images/tp3.png"
import tp4 from "./Images/tp4.png"
import tp5 from "./Images/tp5.png"
import tp6 from "./Images/tp6.png"
import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"
const data={
    cardData:[
        {
            id:1,
            img:tp1,
            title:"Iqra Beg",
            desc:"MS in Clinical Psychology",
            location:"Mumbai",
            link:"/profile1"
            // <Link to ='/profile1'/>
        },
        {
            id:2,
            img:tp2,
            title:"Shrinkhala Majumda",
            location:"Delhi",
            desc:"Msc. in Psychology",
            link:"/profile2"
        },
        {
            id:3,
            img:tp3,
            title:"Dr. V S Ananthakrishnan",
            location:"Mumbai",
            desc: 'MBBS, MD (Psychiatry)',
            link:"/profile3"
        },
        {
            id:4,
            img:tp4,
            title:"Shamoli Kasbekar",
            location:"Hyderabad",
            desc: 'Msc in Clinical Psychology',
            link:"/profile4"
        },
        {
            id:5,
            img:tp5,
            location:"Delhi",
            title:"Divyanshi Lohiya",
            desc: 'MA in Clinical Psychology',
            link:"/profile5"
        },
        {
            id:6,
            img:tp6,
            title:"Hyderabad",
            title:"Spandana Reddy",
            desc: 'MA Counselling psychology',
            link:"/profile6"
            
        }
    ]
}
export default data;