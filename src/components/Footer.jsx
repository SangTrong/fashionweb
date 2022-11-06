import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  background-color: #f7f4f4;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>A-FASHION</Logo>
        <Desc>
          "Đặt sự hài lòng của khách hàng là ưu tiên số 1 trong mọi suy nghĩ
          hành động của mình" là sứ mệnh, là triết lý, là chiến lược... Hãy luôn
          cùng "AFASHION" tiến bước nhé!
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Trong Cửa Hàng</Title>
        <List>
          <ListItem>Trang Chủ</ListItem>
          <ListItem>Giỏ Hàng</ListItem>
          <ListItem>Thời Trang Nam</ListItem>
          <ListItem>Thời Trang Nữ</ListItem>
          <ListItem>Phụ Kiện</ListItem>
          <ListItem>Tài Khoản</ListItem>
          <ListItem>Theo Dõi Đơn Hàng</ListItem>
          <ListItem>Danh Sách Yêu Thích</ListItem>
          <ListItem>Tuyển Dụng</ListItem>
          <ListItem>Tin Tức</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Liên hệ</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> 622 Tô Ký, Tân Chánh Hiệp,
          Quận 12, TP Hồ Chí Minh
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +84 934946704
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> trongpz111@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
