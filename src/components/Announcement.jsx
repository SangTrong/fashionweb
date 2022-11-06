import React from "react";
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
`;
const Announcement = () => {
  return <Container>Giảm giá 20% cho lần mua đầu tiên</Container>;
};

export default Announcement;
