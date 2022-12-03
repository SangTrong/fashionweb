import styled from "styled-components";
import Product from "./Product";
import { Pagination } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

const WrapProduct = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;

  //justify-content: space-between;
`;
const Container = styled.div``;

const Paging = styled.div`
  display: flex;

  justify-content: center;
  padding-bottom: 15px;
`;
const SlideProducts = () => {
  const [products, setProducts] = useState([]);

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
  }, []);

  return (
    <>
      <Container>
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
            current={products?.current_page}
            onChange={(current) => {
              getProducts(current);
            }}
          />
        </Paging>
      </Container>
    </>
  );
};
export default SlideProducts;
