import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import Layout from '../../components/Layout'
import { showLoading, hideLoading } from '../../redux/alertsSlice'
import axios from 'axios';
import { Button, Table } from 'antd';
import moment from 'moment'
function Appointmentslist() {

  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();
  const getAppointmentsData = async () => {
    try {
      dispatch(showLoading());
      const response = await axios.get('/api/admin/get-all-appointments', {
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
  

  useEffect(() => {
    getAppointmentsData();
  }, [])

  const columns = [
    {
        title: "Doctor",
        dataIndex: "name",
        render: (text, record) => (
          <span>
            {record.doctorInfo.firstName} {record.doctorInfo.lastName}
          </span>
        ),
      },
      {
        title: "Phone",
        dataIndex: "phoneNumber",
        render: (text, record) => (
          <span>
            {record.doctorInfo.phoneNumber} 
          </span>
        ),
      },
      {
        title: "Date & Time",
        dataIndex: "createdAt",
        render: (text, record) => (
          <span>
            {moment(record.date).format("DD-MM-YYYY")} {moment(record.time).format("HH:mm")}
          </span>
        ),
      },
      {
        title: "User ",
        dataIndex: "createdAt",
        render: (text, record) => (
          <span>
           {record.userInfo.name} 
          </span>
        ),
      },  
      {
        title: "Status",
        dataIndex: "createdAt",
        render: (text, record) => (
          <span>
           {record.status} 
          </span>
        ),
      },  

  ]

  return (

    <Layout>
      <h1 className='page-header'>Appointments</h1>
      <Table columns={columns} dataSource={users}/>
    </Layout>
  )
}

export default Appointmentslist