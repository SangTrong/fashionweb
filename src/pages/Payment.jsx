import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import "antd/dist/antd.min.css";

import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCart } from "../redux/cartSlice";
import axios from "axios";

const Container = styled.div`
  font-family: Arial;
`;

const Wrapper = styled.div`
  padding: 20px;
  background-color: #eef2f3;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 600;
  text-align: center;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  border: 0px solid gray;
  border-radius: 10px;
  margin-left: 1cm;
  margin-right: 1cm;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 4;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 0.5px solid gray;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 3;
  display: flex;
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
  margin: 15px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 16px;
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

  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px;
  margin-left: 10px;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const ProductAmount = styled.div`
  font-size: 16px;
  margin-bottom: 10px;

  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 16px;
  margin-bottom: 10px;
  ${mobile({ marginBottom: "20px" })}
`;
const Summary = styled.div`
  font-size: 16px;
`;
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Form = styled.form`
  display: flex;
  padding-top: 25px;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  margin-left: 5.3cm;
  margin-top: 15px;
  ${mobile({
    marginLeft: 0,
  })}
`;
const WrapperForm = styled.div`
  flex: 2;
  width: 25%;
  height: 9cm;
  padding: 20px;
  margin-top: 30px;
  margin-left: 30px;
  border: 1px solid gray;
  border-radius: 20%;
  background-color: #a4d9e7;

  ${mobile({ width: "25%" })}
`;
const SummaryItemPrice = styled.div`
  margin: 20px 0 0 300px;
  font-size: 20px;
`;

const order = async () => {
  try {
    let item = {
      user_id: 1,
      total: 99999999,
      payment: "tien mat",
      status: "Dang cho",
      product: [
        {
          product_id: 2,
          color: "gray",
          size: "M",
          quantity: 2,
        },
        {
          product_id: 3,
          color: "red",
          size: "S",
          quantity: 3,
        },
      ],
    };
    //console.warn(item);

    let result = await axios.post("http://localhost:8000/api/order", item);
    console.warn("result", result);
  } catch (err) {}
};
const Cart = (item) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState();
  const [fullname, setFullname] = useState([]);
  const [phone, setPhone] = useState([]);
  const [address, setAddress] = useState([]);
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("Userinfo")));
  }, []);
  const order = async () => {
    try {
      let item = {
        user_id: user.data.user.id || 1,
        total: getTotal().totalPrice,
        payment: "tien mat",
        status: "Dang cho",
        fullname: fullname || "Nguyen Van Thong",
        address: address || "Binh Dinh",
        phone: phone || "09037111111",
        product: Array.from(cart).map((item) => ({
          product_id: item.id,
          color: item.color,
          size: item.size,
          quantity: item.quantity,
        })),
      };
      // {
      //   product_id: 3,
      //   color: "red",
      //   size: "S",
      //   quantity: 3,
      // },

      //console.warn(item);

      let result = await axios.post("http://localhost:8000/api/order", item);
      console.warn("result", result);
    } catch (err) {}
  };
  const Alert = () => {
    alert("Đã thanh toán thành công!\n Cảm ơn quý khách");
  };
  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    Array.from(cart).forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
    });
    return { totalPrice, totalQuantity };
  };

  // let
  //   const signUp = async () => {
  //     try {
  //       let item = {
  //         id
  //         fisrtname,
  //         lastname,
  //         email,
  //         password,
  //         password_confirmation,
  //       };
  //       //console.warn(item);

  //       await axios.post("http://localhost:8000/api/register", item);

  //       window.location.href = "/";
  //     } catch (err) {}
  //   };
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>THANH TOÁN</Title>
        <Bottom>
          <Info>
            {Array.from(cart).map((item) => (
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
                    <ProductAmount>
                      <b>Số lượng: </b> {item.quantity}
                    </ProductAmount>
                  </ProductAmountContainer>
                  <ProductPrice>
                    <b>Giá: </b> {Number(item.price).toLocaleString("vi-VN")}
                    VNĐ
                  </ProductPrice>
                  <Summary>
                    <b>Tổng: </b>
                    {Number(item.price * item.quantity).toLocaleString("vi-VN")}
                    VNĐ
                  </Summary>
                </PriceDetail>
              </Product>
            ))}
            <SummaryItemPrice>
              <b>Tổng Cộng: </b>
              {Number(getTotal().totalPrice).toLocaleString("vi-VN")} VNĐ
            </SummaryItemPrice>
            <Hr />
          </Info>
          <WrapperForm>
            <Form>
              <Input
                type="text"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                placeholder="tên của bạn..."
              />
              <Input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="số điện thoại..."
              />
              <Input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="địa chỉ..."
              />
              <Link to="/">
                <Button
                  onClick={() =>
                    user
                      ? dispatch(removeCart(item.id)) && order() && Alert()
                      : alert("vui lòng đăng nhập trước khi thanh toán")
                  }
                >
                  <b>THANH TOÁN</b>
                </Button>
              </Link>
            </Form>
          </WrapperForm>
        </Bottom>
      </Wrapper>

      <Hr />
      <Footer />
    </Container>
  );
};

export default Cart;
