import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import "antd/dist/antd.min.css";
import { InputNumber, Space } from "antd";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from "../redux/cartSlice";

const Container = styled.div`
  font-family: Arial;
`;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div``;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
  ${mobile({ display: "none" })}
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  margin: 15px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid gray;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;
const Delete = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 60px 20px;
  height: "40px";
  cursor: pointer;
  :hover {
    color: #d81727;
  }
`;
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;
// const onChange = (value) => {
//   //console.log("changed", value);
// };

const Cart = (item) => {
  //const [buttonText, setButtonText] = useState("THANH TOÁN NGAY");

  // const cart = useSelector((state) => state.cart);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    Array.from(cart).forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
    });
    return { totalPrice, totalQuantity };
  };
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>GIỎ HÀNG</Title>
        <Top>
          <Link to="/products/clothes" style={{ color: "black" }}>
            <TopButton>TIẾP TỤC MUA HÀNG</TopButton>
          </Link>
          <TopTexts>
            <TopText>Giỏ hàng của bạn({getTotal().totalQuantity})</TopText>
            <TopText>Sản phẩm yêu thích(0)</TopText>
          </TopTexts>
          <TopButton type="filled">THÊM ƯU ĐÃI</TopButton>
        </Top>
        <Bottom>
          <Info>
            {Array.from(cart)?.map((item) => (
              <Product>
                <ProductDetail>
                  <Image src={`http://localhost:8000${item.img}`} />
                  <Details>
                    <ProductName>
                      <b>Sản phẩm: </b>
                      {item.name}
                    </ProductName>
                    <ProductId>
                      <b>ID:{item.id}</b>
                    </ProductId>
                    <ProductColor color={item?.color} />
                    <ProductSize>
                      <b>Size:{item.size}</b>
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Remove
                      onClick={() => dispatch(decrementQuantity(item.id))}
                    />
                    <ProductAmount>{item.quantity}</ProductAmount>
                    <Add onClick={() => dispatch(incrementQuantity(item.id))} />
                    {/* /<Space>
                    <InputNumber
                      //size="large"
                      min={1}
                      max={10}
                      defaultValue={1}
                      onChange={onChange}
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        paddingLeft: "15px",
                      }}
                    />
                  </Space>  */}
                  </ProductAmountContainer>
                  <ProductPrice>
                    {Number(item.price).toLocaleString("vi-VN")}
                    VNĐ
                  </ProductPrice>
                </PriceDetail>
                <Delete>
                  <DeleteForeverIcon
                    style={{
                      width: "30px",
                      height: "40px",
                      margin: "30px",
                    }}
                    onClick={() =>
                      dispatch(
                        removeItem({
                          id: item.id,
                          color: item.color,
                          size: item.size,
                        })
                      )
                    }
                  />
                </Delete>
              </Product>
            ))}
            <Hr />
          </Info>

          <Summary>
            <SummaryTitle>Đơn Đặt Hàng</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Tạm Tính</SummaryItemText>
              <SummaryItemPrice>
                {Number(getTotal().totalPrice).toLocaleString("vi-VN")} VNĐ
              </SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Phí giao hàng</SummaryItemText>
              <SummaryItemPrice>15.000 VNĐ</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Freeship</SummaryItemText>
              <SummaryItemPrice>15.000 VNĐ</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Tổng Cộng</SummaryItemText>
              <SummaryItemPrice>
                {Number(getTotal().totalPrice).toLocaleString("vi-VN")} VNĐ
              </SummaryItemPrice>
            </SummaryItem>
            {/* <Button onClick={() => setButtonText("ĐÃ THANH TOÁN")}>
              {buttonText}
            </Button> */}
            <Link to="/payment">
              <Button>THANH TOÁN NGAY</Button>
            </Link>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
