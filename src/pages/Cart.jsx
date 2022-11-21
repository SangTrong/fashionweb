//import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import "antd/dist/antd.min.css";
import { InputNumber, Space } from "antd";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { useState } from "react";
import StripeCheckout from "react-stripe-checkout";

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

// const ProductAmount = styled.div`
//   font-size: 24px;
//   margin: 5px;
//   ${mobile({ margin: "5px 15px" })}
// `;

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
const onChange = (value) => {
  //console.log("changed", value);
};

const Cart = (item) => {
  const [buttonText, setButtonText] = useState("THANH TOÁN NGAY");
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
            <TopText>Giỏ hàng của bạn(2)</TopText>
            <TopText>Sản phẩm yêu thích(0)</TopText>
          </TopTexts>
          <TopButton type="filled">THANH TOÁN</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="http://labaha.vn/image/cache/catalog/Ao_nam/AO_so_mi/SM023/TB1ihxTxStYBeNjSspaXXaOOFXa_!!0-item_pic-800x800.jpg" />
                <Details>
                  <ProductName>
                    <b>Sản phẩm:</b> GIÀY PUKATA
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size:</b> 37.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  {/* <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove /> */}
                  <Space>
                    <InputNumber
                      //size="small"
                      min={1}
                      max={10}
                      defaultValue={1}
                      value={item.qty}
                      onChange={onChange}
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        paddingLeft: "15px",
                      }}
                    />
                  </Space>
                </ProductAmountContainer>
                <ProductPrice> 40000đ</ProductPrice>
              </PriceDetail>
              <Delete>
                <DeleteForeverIcon
                  style={{
                    width: "30px",
                    height: "40px",
                    margin: "30px",
                  }}
                />
              </Delete>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://salt.tikicdn.com/cache/750x750/ts/product/15/be/4d/8388c81a1a3c40f256e9c4331cd076dd.jpg.webp" />
                <Details>
                  <ProductName>
                    <b>Sản phẩm:</b> Áo sơ mi nam
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
                  <ProductColor color="gray" />
                  <ProductSize>
                    <b>Size:</b> M
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  {/* <Add />
                  <ProductAmount>1</ProductAmount>
                  <Remove /> */}
                  <Space>
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
                  </Space>
                </ProductAmountContainer>
                <ProductPrice>50000đ</ProductPrice>
              </PriceDetail>
              <Delete>
                <DeleteForeverIcon
                  style={{
                    width: "30px",
                    height: "40px",
                    margin: "30px",
                  }}
                />
              </Delete>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>Đơn Đặt Hàng</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Tạm Tính</SummaryItemText>
              <SummaryItemPrice>90000đ</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Phí giao hàng</SummaryItemText>
              <SummaryItemPrice>15000đ</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Freeship</SummaryItemText>
              <SummaryItemPrice>15000đ</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Tổng Cộng</SummaryItemText>
              <SummaryItemPrice>90000đ</SummaryItemPrice>
            </SummaryItem>
            {/* <Button onClick={() => setButtonText("ĐÃ THANH TOÁN")}>
              {buttonText}
            </Button> */}
            <StripeCheckout
              name="A-FASHION"
              image="https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png"
              billingAddress
              shippingAddress
              description={`Your total is 0D`}
              // amount="100"
              // token={''}
              //stripeKey={"123"}
            >
              <Button>CHECKOUT NOW</Button>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
