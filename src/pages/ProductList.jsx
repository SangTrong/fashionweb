import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {
  // const location = useLocation();
  // //const cat = location.pathname.split("/")[1];
  // const [filters, setFilters] = useState({});
  // const handleFilters = (e) => {
  //   const value = e.target.value;
  //   setFilters({
  //     ...filters,
  //     [e.target.name]: value,
  //   });
  // };

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Trang phục</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Lọc:</FilterText>
          <Select name="color">
            <Option disabled>Color</Option>
            <Option>Trắng</Option>
            <Option>Đen</Option>
            <Option>Xanh</Option>
          </Select>
          <Select name="size">
            <Option disabled>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sắp Xếp:</FilterText>
          <Select>
            <Option selected>Mới nhất</Option>
            <Option>Giá (tăng dần)</Option>
            <Option>Giá (giảm dần)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
