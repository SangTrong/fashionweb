import axios from "axios";
import { useEffect } from "react";
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
  // const [user, setUser] = useState();

  // useEffect(() => {
  //   setUser(JSON.parse(localStorage.getItem("Userinfo")));
  // }, []);
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
      localStorage.setItem("Userinfo", JSON.stringify(result));
      window.location.href = "/";
    } catch (err) {}
  };

  return (
    <>
      <Container>
        <Wrapper>
          <Title>T???O M???T T??I KHO???N</Title>
          <Form>
            <Input
              type="text"
              value={fisrtname}
              placeholder="t??n"
              onChange={(e) => setFisrtname(e.target.value)}
            />
            <Input
              type="text"
              value={lastname}
              placeholder="h???"
              onChange={(e) => setLastname(e.target.value)}
            />
            <Input
              type="text"
              value={name}
              placeholder="t??n ng?????i d??ng"
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
              placeholder="m???t kh???u"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              type="password"
              value={password_confirmation}
              placeholder="nh???p l???i m???t kh???u"
              onChange={(e) => setPasswordconfirm(e.target.value)}
            />
            <Agreement>
              B???ng c??ch t???o m???t t??i kho???n, t??i ?????ng ?? v???i vi???c x??? l?? d??? li???u ph??
              h???p v???i <b> CH??NH S??CH B???O M???T </b>
            </Agreement>
            <Button
              type="button"
              onClick={() => {
                password === password_confirmation
                  ? signUp()
                  : alert("sai password");
              }}
            >
              ????NG K??
            </Button>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
};

export default Register;
