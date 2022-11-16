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
  const [ListCategories, setListCategories] = useState([]);
  useEffect(() => {
    const getUserAPI = "http://localhost:8000/api/product/list";
    axios
      .get(getUserAPI)
      .then((response) => {
        setListCategories(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        alert("Xảy ra lỗi");
      });
  }, []);
  //   return (
  //     <Container>
  //       {ListCategories.map((Cat) => {
  //         <ListItems> {Cat.name}</ListItems>;
  //       })}
  //     </Container>
  //   );
  // };
  return (
    <>
      <Container>
        {ListCategories.slice(0, 8).map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </Container>
      <Paging>
        <Pagination
          defaultCurrent={1}
          total={40}
          // showSizeChanger
          // showQuickJumper
          // showTotal={(total) => `Total ${total} items`}
        />
      </Paging>
    </>
  );
};
export default Products;
