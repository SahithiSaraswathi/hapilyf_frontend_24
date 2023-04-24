// import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
// import { tokens } from "./theme";
// import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
// import EmailIcon from "@mui/icons-material/Email";
// import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
// import PersonIcon from "@mui/icons-material/Person";
// import PersonAddIcon from "@mui/icons-material/PersonAdd";
// import TrafficIcon from "@mui/icons-material/Traffic";
// import App from "./App";  
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// //import ucount from "../components/count"; 
// // import Header from "../../components/Header";
// import StatBox from "./Statbox";
// import EmpListing from "./EmpListing";
// import EmpCreate from "./EmpCreate";
// import EmpDetail from "./EmpDetail";
// import EmpEdit from "./EmpEdit";
// //const ct = require('../components/count');
// const Dashboard = () => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
//   //const uc = getNumOfUsers();
//   return (
//     <>
//     <Box m="20px">
//       {/* HEADER */}
//       <Box display="flex" justifyContent="space-between" alignItems="center">
//         {/* <Header title="DASHBOARD" subtitle="Welcome to your dashboard" /> */}

       
//       </Box>

//       {/* GRID & CHARTS */}
//       <Box
//         display="grid"
//         gridTemplateColumns="repeat(10, 1fr)"
//         gridAutoRows="120px"
//         gap="40px"
//       >
//         {/* ROW 1 */}
//         <Box
//           gridColumn="span 3"
//           backgroundColor={colors.primary[400]}
//           display="flex"
//           alignItems="center"
//           justifyContent="center"
//         >
//           <StatBox
//             subtitle= "users"
//             title="11"
//             icon={ 
//               <PersonIcon
//                 sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
//               />
//             }
//           />
//         </Box>
//         <Box
//           gridColumn="span 3"
//           backgroundColor={colors.primary[400]}
//           display="flex"
//           alignItems="center"
//           justifyContent="center"
//         >
//           <StatBox
//             subtitle="Appointments"
//             title="15"
//             icon={
//               <PointOfSaleIcon 
//                 sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
//               />
//             }
//           />
//         </Box>
//         <Box
//           gridColumn="span 3"
//           backgroundColor={colors.primary[400]}
//           display="flex"
//           alignItems="center"
//           justifyContent="center"
//         >
//           <StatBox
//             subtitle="Doctors"
//             title="1"
//             icon={
//               <PersonAddIcon
//                 sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
//               />
//             }
//           />
//         </Box>
//         {/* <Box
//           gridColumn="span 3"
//           backgroundColor={colors.primary[400]}
//           display="flex"
//           alignItems="center"
//           justifyContent="center"
//         >
//           <StatBox
//             title="1,325,134"
//             subtitle="Traffic Received"
//             progress="0.80"
//             increase="+43%"
//             icon={
//               <TrafficIcon
//                 sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
//               />
//             }
//           />
//         </Box> */}
//         </Box>
//         </Box>
//         <EmpListing/>
//         {/* <EmpCreate/> */}
//         {/* <Route path='/adhome/employee/create' element={<EmpCreate />}></Route> */}
//         {/* <EmpDetail/>
//         <EmpEdit/> */}
//         </>
        
         
//   );
// };

// export default Dashboard;

import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "./theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonIcon from "@mui/icons-material/Person";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import App from "./App";  
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom'
//import ucount from "../components/count"; 
// import Header from "../../components/Header";
// import Link from "@mui/material";
import StatBox from "./Statbox";


//const ct = require('../components/count');
const Dashboard = () => {
  const  navigate=useNavigate()
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  //const uc = getNumOfUsers();
  return (
    <>
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        {/* <Header title="DASHBOARD" subtitle="Welcome to your dashboard" /> */}

       
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(9, 1fr)"
        gridAutoRows="150px"
        gap="40px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}

          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Link to='/admin/userslist'>
          <img src={require('./users_image.jpg')}style={{paddingLeft:"30px",height:'12rem'}}
          // onMouseOver={this.src = require('/admin/userslist')}
          // onMouseOut={this.src = require('b')}
          ></img>
          </Link>

          <StatBox
            //subtitle= "users"
            title="users"

            icon={ 
              <PersonIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
            <Link to='/admin/Appointmentslist'>
          <img src={require('./appointment.png')}style={{paddingLeft:"50px",height:'12rem'}}
          // onMouseOver={this.src = require('/admin/userslist')}
          // onMouseOut={this.src = require('b')}
          ></img>
          </Link>
          <StatBox
            //subtitle="Appointments"
            title="Appointments"
            icon={
              <PointOfSaleIcon 
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
            <Link to='/admin/doctorslist'>
          <img src={require('./doctor.png')}style={{paddingLeft:"50px",height:'12rem'}}
          // onMouseOver={this.src = require('/admin/userslist')}
          // onMouseOut={this.src = require('b')}
          ></img>
          </Link>
          <StatBox
            //subtitle="Doctors"
            title="Doctors"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        {/* <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="1,325,134"
            subtitle="Traffic Received"
            progress="0.80"
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box> */}
        </Box>
        </Box>
        {/* <EmpCreate/> */}
        {/* <Route path='/adhome/employee/create' element={<EmpCreate />}></Route> */}
        {/* <EmpDetail/>
        <EmpEdit/> */}
        </>
        
         
  );
};

export default Dashboard;