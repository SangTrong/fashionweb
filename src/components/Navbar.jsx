import { Badge } from "@material-ui/core";
import {
  Search,
  ShoppingCartOutlined,
  AccountCircle,
} from "@material-ui/icons";
//import userEvent from "@testing-library/user-event";
//import { clear } from "@testing-library/user-event/dist/clear";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
const Container = styled.div`
  width: 100%;
  height: 70px;
  position: fixed;
  top: 0;
  z-index: 4;
  background-color: white;

  ${mobile({ height: "60px" })}
`;

const Wrapper = styled.div`
  width: 100%;

  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  margin-bottom: 15px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  margin-bottom: 15px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  outline: 0; //delete border when search
  ${mobile({ width: "40px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "18px", marginLeft: "10px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 3, justifyContent: "center", marginRight: "25px" })}
`;
const RightItem = styled.div`
  display: flex;
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = ({ search, setSearch }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("Userinfo")));
  }, []);
  //const quantity = useSelector((state) => state.cart.quantity);
  const cart = useSelector((state) => state.cart);

  const getTotalQuantity = () => {
    let total = 0;
    Array.from(cart).forEach((item) => {
      total += item.quantity;
    });
    return total;
  };
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>VN</Language>
          <SearchContainer>
            <Input
              placeholder="T??m ki???m..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {/* {console.log(search)} */}
            <Search type="button" style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Link to="/">
            <Logo>A-FASHION</Logo>
          </Link>
        </Center>
        <Right>
          {user ? (
            <RightItem>
              <MenuItem style={{ color: "black" }}>
                <AccountCircle fontSize="large" />
                {user.data.user.name}
              </MenuItem>
              <MenuItem
                onClick={(e) => {
                  localStorage.removeItem("Userinfo");
                  window.location.href = "/";
                }}
                style={{ color: "black", marginTop: "20px" }}
              >
                ????NG XU???T
              </MenuItem>
            </RightItem>
          ) : (
            <RightItem>
              <Link to="/register">
                <MenuItem style={{ color: "black" }}>????NG K??</MenuItem>
              </Link>
              <Link to="/login">
                <MenuItem style={{ color: "black" }}>????NG NH???P</MenuItem>
              </Link>
            </RightItem>
          )}
          <MenuItem>
            <Link to="/cart">
              <Badge
                badgeContent={getTotalQuantity() || 0}
                color="primary"
                style={{ color: "black" }}
                overlap="rectangular"
              >
                <ShoppingCartOutlined />
              </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
