import axios from "axios";
import React, { useState, useEffect } from "react";

import styled from "styled-components";

// const Container = {marginTop: 20, backgroundColor: 'blue'}
// <div style={Container} /> thay vi dung the div ta co the dung the do ta dinh nghia
const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  width: 100%;
  margin-top: 70px;
`;

// const Announcement = () => {
//   const [ListCategories, setListCategories] = useState([]);
//   useEffect(() => {
//   const getUserAPI = 'http://localhost:8000/admin/catogories/indexAPI'
//     axios
//       .get(getUserAPI)
//       .then((response) => {
//         setListCategories(response.data);
//       })
//       .catch( (error)=> {
//         console.log(error);
//         alert("Xảy ra lỗi");
//       });
//   }, []);
//   return (
//     <Container>
//       {ListCategories.map((Cat) => {
//         <ListItems> {Cat.name}</ListItems>;
//       })}
//     </Container>
//   );
// };
const Announcement = () => {
  return <Container>Giảm giá 20% cho đơn hàng đầu tiên</Container>;
};
export default Announcement;
