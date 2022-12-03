import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import { Pagination } from "antd";
import axios from "axios";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Container = styled.div``;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
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
const WrapProduct = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  //justify-content: space-between;
`;
const Paging = styled.div`
  display: flex;

  justify-content: center;
  padding-bottom: 15px;
`;
const Wrapper = styled.div``;
const Products = ({
  setCurrentPage,
  setValueColor,
  setValueSize,
  setValueSort,
  products,
}) => {
  //console.log(cat, filters, sort);

  //const [filteredProducts, setFilteredProducts] = useState([]);

  // useEffect(() => {
  //   const getUserAPI = "http://localhost:8000/api/product/list";
  //   axios
  //     .get(getUserAPI)
  //     .then((response) => {
  //       setProducts(response.data);
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       alert("Xảy ra lỗi");
  //     });
  // }, []);

  // useEffect(() => {
  //   cat &&
  //     setFilteredProducts(
  //       products?.data?.filter((item) =>
  //         Object.entries(filters).every(([key, value]) =>
  //           item[key].includes(value)
  //         )
  //       )
  //     );
  // }, [products, cat, filters]);

  // useEffect(() => {
  //   if (sort === "newest") {
  //     setFilteredProducts((prev) => [...prev].sort((a, b) => b.id - a.id));
  //   } else if (sort === "asc") {
  //     setFilteredProducts((prev) =>
  //       [...prev].sort((a, b) => a.price - b.price)
  //     );
  //   } else {
  //     setFilteredProducts((prev) =>
  //       [...prev].sort((a, b) => b.price - a.price)
  //     );
  //   }
  // }, [sort]);
  // return (
  //   <Container>
  //     {ListCategories.map((Cat) => {
  //       <ListItems> {Cat.name}</ListItems>;
  //     })}
  //   </Container>
  // );
  //const location = useLocation();
  //const cat = location.pathname.split("/")[2];
  const [filterColor, setFilterColor] = useState({});
  const [filterSize, setFilterSize] = useState({});
  //const [sort, setSort] = useState("newest");
  const handleFilterColor = (e) => {
    const value = e.target.value;
    setFilterColor({
      ...filterColor,
      // "": null,
      [e.target.name]: value,
    });
    setValueColor(value);
  };
  const handleFilterSize = (e) => {
    const value = e.target.value;
    setFilterSize({
      ...filterSize,
      [e.target.name]: value,
    });
    setValueSize(value);
  };

  return (
    <>
      <Container>
        <FilterContainer>
          <Filter>
            <FilterText>Lọc:</FilterText>
            <Select name="color" onChange={handleFilterColor}>
              <Option value="">Color</Option>

              <Option>white</Option>
              <Option>black</Option>
              <Option>green</Option>
              <Option>gray</Option>
              <Option>yellow</Option>
            </Select>
            <Select name="size" onChange={handleFilterSize}>
              <Option value="">Size</Option>

              <Option>S</Option>
              <Option>M</Option>
              <Option>L</Option>
              <Option>XL</Option>
            </Select>
          </Filter>
          <Filter>
            <FilterText>Sắp Xếp:</FilterText>
            <Select onChange={(e) => setValueSort(e.target.value)}>
              <Option value="newest">Mới nhất</Option>
              <Option value="asc">Giá (tăng dần)</Option>
              <Option value="desc">Giá (giảm dần)</Option>
            </Select>
          </Filter>
        </FilterContainer>
        <Wrapper>
          <WrapProduct>
            {products?.data?.map((item) => (
              <Product
                item={item}
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                img={item.feature_image_path}
              />
            ))}
          </WrapProduct>
          <Paging>
            <Pagination
              defaultCurrent="1"
              total={products?.total}
              pageSize="8"
              //current={products?.current_page}
              onChange={(a) => {
                // console.log(a);
                setCurrentPage(a);
              }}
            />
          </Paging>
        </Wrapper>
      </Container>
      S
    </>
  );
};
export default Products;
