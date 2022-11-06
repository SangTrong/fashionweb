import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60px;

  ${mobile({ height: "60px" })}
`;

const Wrapper = styled.div`
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

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>VN</Language>
          <SearchContainer>
            <Input placeholder="Tìm kiếm..." />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>A-FASHION</Logo>
        </Center>
        <Right>
          <Link to="/register">
            <MenuItem style={{ color: "black" }}>ĐĂNG KÝ</MenuItem>
          </Link>
          <Link to="/login">
            <MenuItem style={{ color: "black" }}>ĐĂNG NHẬP</MenuItem>
          </Link>
          <MenuItem>
            <Link to="/cart">
              <Badge
                badgeContent={4}
                color="primary"
                style={{ color: "black" }}
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
