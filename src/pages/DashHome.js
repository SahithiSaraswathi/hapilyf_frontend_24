import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import { Col, Row } from "antd";
import Doctor from "../components/Images/Doctor";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../redux/alertsSlice";
import { useNavigate } from "react-router-dom";
import Dashboard from "../dashboard";
import { render } from "react-dom";

function Home() {
  const [doctors, setDoctors] = useState([]);
  const i=0;
  // setTimeout(() => {
  // document.location.reload();
  // }, 3000);
  var ko=1;
  if(ko==1){
  // const myTimeout = setTimeout(document.location.reload(), 5000);
   //document.location.reload(false);
  // window.location.reload(false);
  ko++;
}


// function myStopFunction() {
//   clearTimeout(myTimeout);
// }
// var p=1;
// if(p<2){
//   window.location.reload()
//   p++;
// }
// window.location.reload(false)
//const history=useNavigate();
//history.go();
  const dispatch = useDispatch();
  const getData = async () => {
    try {
      dispatch(showLoading())
      const response = await axios.get("/api/user/get-all-approved-doctors", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      dispatch(hideLoading())
      if (response.data.success) {
    // window.location.reload(true)
        setDoctors(response.data.data);
      }
    } catch (error) {
      dispatch(hideLoading())
    }
  };
    
    // window.location.reload(false)
  
  useEffect(() => {
    getData();
  }, []);
  return (
    <Layout>
      <Row gutter={[20,20]}>
        {doctors.map((doctor) => (
          <Col span={8} xs={24} sm={24} lg={8}>
            <Doctor doctor={doctor} />
          </Col>
        ))}
      </Row>
    </Layout>
  );
}

export default Home;
