import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import Layout from '../../components/Layout'
import { showLoading, hideLoading } from '../../redux/alertsSlice'
import axios from 'axios';
import { Button, Table } from 'antd';
import moment from 'moment/moment';
import { toast } from "react-hot-toast";
//import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import App from '../../dashboard/App';
import reportWebVitals from '../../dashboard/reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom';
//import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
function Userlist() {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();
  const getUsersData = async () => {
    try {
      dispatch(showLoading());
      const response = await axios.get('/api/admin/get-all-users', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
      });
      dispatch(hideLoading());
      if (response.data.success) {
        setUsers(response.data.data)
      }
    }
    catch (error) {
      dispatch(hideLoading());
    }
  };
      const changeuserStatus = async (record, status) => {
        // record.findOneAndRemove({ email:record.email });
        try {
          //deleteUser(user){
          //  record.findOneAndDelete({ email:record.email });
        //}
          dispatch(showLoading());
          const response = await axios.delete(
            "/api/admin/change-account-user-status",
            {  email: record.email, status: status },
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          );
          if (response.data.success) {
            toast.success(response.data.message);
            getUsersData();
          }
        } catch (error) {
          console.log("hi"+error)
          toast.error("Error changing user account status");
          dispatch(hideLoading());
        }
      };
  

  useEffect(() => {
    getUsersData();
  }, [])

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Created At',
      dataIndex: 'createdAt',
    },
    {
      title: "status",
      dataIndex: "status",
    },
    // {
    //   title: "Actions",
    //   dataIndex: "actions",
    //   render: (text, record) => (
    //     <div className="d-flex">
    //       {record.status === "approved" && (
    //         <Button type="primary" danger
    //           className="anchor"
    //           onClick={() => changeuserStatus(record, "Blocked")}
    //         >
    //           Block
    //         </Button>
    //       )}
    //       {record.status === "Blocked" ||record.status === "blocked" && (

    //         <Button style={{ background: "lime",}}
    //           className="anchor"
    //           onClick={() => changeuserStatus(record, "approved")}
    //         >
    //           Approve
    //         </Button>
    //       )
    //     }
    //     </div>
    //   ),
    // },
  ]

  return (
<>
    <Layout>
      <h1 className='page-header'>Users List</h1>
      <Table columns={columns} dataSource={users}/>
      {/* <App /> */}
    </Layout>
    {/* <div>
      <Router>
        <App/>
      </Router>

    </div> */}
    </>
    // <div>
      
    // </div>
   // root.render(
     // <React.StrictMode>
        //<App />
        
    //  </React.StrictMode>
   // );
  )
}

export default Userlist