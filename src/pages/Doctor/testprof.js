import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import Layout from '../../components/Layout'
import { showLoading, hideLoading } from '../../redux/alertsSlice'
import axios from 'axios';
import { Button, Table } from 'antd';
import moment from 'moment'
function Prof() {

  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();
  const getDoctorsData = async () => {
    try {
      dispatch(showLoading());
      const response = await axios.get('/api/doctor/get-doctor-info-by-user-id', {
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
    getDoctorsData();
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
        title: "Specialization",
        dataIndex: "specialization",
        render: (text, record) => (
            <span>
            {record.doctorInfo.specialization} 
          </span>
        ),
      },  

  ]

  return (
<Layout>
      <h1 className="page-title">Doctor Profile</h1>
      <hr />
      {users && <DoctorForm onFinish={onFinish} initialValues={columns} />}
    </Layout> 
  )
}

export default Prof