import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import { Pagination } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

const Container = styled.div`
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
const Products = ({ cat, filters, sort }) => {
  //console.log(cat, filters, sort);
  const [products, setProducts] = useState([]);
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
  const getProducts = async (current_page = 1) => {
    try {
      const res = await axios.get(
        `http://localhost:8000/api/product/list?page=${current_page}`
      );
      setProducts(res.data);
    } catch (err) {}
  };
  useEffect(() => {
    getProducts();
  }, [cat]);

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

  return (
    <>
      <Container>
        {products?.data?.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </Container>
      <Paging>
        <Pagination
          defaultCurrent="1"
          total={products?.total}
          pageSize="4"
          current={products?.current_page}
          onChange={(current) => {
            getProducts(current);
          }}
        />
      </Paging>
    </>
  );
};
export default Products;
