import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
// import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://c.wallhere.com/photos/b0/61/landscape_nature_beach_swimming_pool_sand_palm_trees_sea_Chile-115467.jpg!d?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  //const history = useHistory();
  const [name, setName] = useState([]);
  const [fisrtname, setFisrtname] = useState([]);
  const [lastname, setLastname] = useState([]);
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const [password_confirmation, setPasswordconfirm] = useState([]);

  const signUp = async () => {
    try {
      let item = {
        name,
        fisrtname,
        lastname,
        email,
        password,
        password_confirmation,
      };
      //console.warn(item);

      let result = await axios.post("http://localhost:8000/api/register", item);
      console.warn("result", result);
      localStorage.setItem("Userinfo", JSON.stringify(result));
      window.location.href = "/";
    } catch (err) {}
  };

  return (
    <>
      <Container>
        <Wrapper>
          <Title>TẠO MỘT TÀI KHOẢN</Title>
          <Form>
            <Input
              type="text"
              value={fisrtname}
              placeholder="tên"
              onChange={(e) => setFisrtname(e.target.value)}
            />
            <Input
              type="text"
              value={lastname}
              placeholder="họ"
              onChange={(e) => setLastname(e.target.value)}
            />
            <Input
              type="text"
              value={name}
              placeholder="tên người dùng"
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              type="email"
              value={email}
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              value={password}
              placeholder="mật khẩu"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              type="password"
              value={password_confirmation}
              placeholder="nhập lại mật khẩu"
              onChange={(e) => setPasswordconfirm(e.target.value)}
            />
            <Agreement>
              Bằng cách tạo một tài khoản, tôi đồng ý với việc xử lý dữ liệu phù
              hợp với <b> CHÍNH SÁCH BẢO MẬT </b>
            </Agreement>
            <Button type="button" onClick={signUp}>
              ĐĂNG KÝ
            </Button>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
};

export default Register;
