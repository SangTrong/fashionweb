import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const Container = styled.div``;
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [valueColor, setValueColor] = useState("null");
  const [valueSize, setValueSize] = useState("null");
  const [valueSort, setValueSort] = useState("newest");
  const [search, setSearch] = useState("");
  const getProducts = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8000/api/product/shared/${currentPage}/${
          search || "null"
        }/${valueColor || "null"}/${valueSize || "null"}/${valueSort}`
      );
      setProducts(res.data);
    } catch (err) {}
  };
  useEffect(() => {
    getProducts();
  }, [currentPage, valueColor, valueSize, valueSort, search]);
  return (
    <>
      <Container>
        <Navbar setSearch={setSearch} search={search} />
        <Announcement style={{ marginTop: "70px" }} />
        <Products
          setCurrentPage={setCurrentPage}
          setValueColor={setValueColor}
          setValueSize={setValueSize}
          setValueSort={setValueSort}
          products={products}
        />
        <Newsletter />
        <Footer />
      </Container>
    </>
  );
};

export default ProductList;
