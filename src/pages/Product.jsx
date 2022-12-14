import { Add, AddAlarmTwoTone, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import "antd/dist/antd.min.css";
import {
  Alarm,
  LocalShipping,
  Replay5,
  MonetizationOn,
} from "@material-ui/icons";
import axios from "axios";
import { useEffect, useState } from "react";
import { InputNumber, Space } from "antd";
import { mobile } from "../responsive";
import { useLocation, useParams } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 65vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 30px;
`;

const FilterContainer = styled.div`
  width: 80%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid gray;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
  :active {
    background-color: #a48383;
  }
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #f8f4f4;
  }
`;
const onChange = (value) => {
  // console.log("changed", value);
};
const InfoShop = styled.div``;
const Commit = styled.div``;
const CommitTitle = styled.div`
  background: #f6f6f6 none repeat scroll 0 0;
  border: 1px solid #eaeaea;
  font-weight: bold;
  height: 50px;
  line-height: 50px;
  margin-bottom: 7px;
  text-align: center;
  font-size: 12px;
`;
const CommitContent = styled.div`
  background: #f6f6f6 none repeat scroll 0 0;
  clear: both;
  display: table;
  padding-bottom: 8px;
  padding-right: 5px;
  padding-top: 8px;
  width: 296px;
  ${mobile({ margin: "auto" })}
`;

const WrapCommitContent = styled.div`
  margin: 10px;
`;
const WrapIcon = styled.div`
  //justify-content: center;
  align-items: center;
  display: flex;
  margin-bottom: 10px;
`;

const Detail = styled.div`
  margin-left: 8px;
`;
const ImageMin = styled.img`
  height: 235px;
  width: 296px;
  padding-top: 8px;
  object-fit: cover;
  ${mobile({ marginLeft: "30px" })}
`;
const Div = styled.span`
  font-size: 15px;
`;

const Product = () => {
  const [product, setProduct] = useState({});
  const [color, setColor] = useState({});
  const [size, setSize] = useState("");
  const name = product?.data?.name;
  const price = product?.data?.price;
  const img = product.data?.feature_image_path;
  const [quantity, setQuantity] = useState(1);
  // const dispatch = useDispatch();

  const location = useLocation();
  const id = location.pathname.split("/")[2];
  // console.log(id);
  const dispatch = useDispatch();
  useEffect(() => {
    const getUserAPI = `http://localhost:8000/api/product/list/${id}`;
    axios
      .get(getUserAPI)
      .then((response) => {
        setProduct(response.data);

        //console.log(response);
      })
      .catch((error) => {
        //console.log(error);
        alert("X???y ra l???i");
      });
  }, []);
  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      quantity < 10 && setQuantity(quantity + 1);
    }
  };
  // const onChange = (value) => {
  //   console.log("changed", value);
  // };
  // const handleClick = () => {
  //   dispatch(addProduct({ ...product, quantity, color, size }));
  // };
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image
            src={`http://localhost:8000${product.data?.feature_image_path}`}
          />
        </ImgContainer>
        <InfoContainer>
          <Title>{product?.data?.name}</Title>

          <Desc>
            <Div
              dangerouslySetInnerHTML={{ __html: product?.data?.content }}
            ></Div>
          </Desc>

          <Price>
            {Number(product?.data?.price).toLocaleString("vi-VN")}VN??
          </Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>

              {product?.color?.map((c) => (
                <FilterColor color={c} key={c} onClick={() => setColor(c)} />
              ))}

              {/* <FilterColor color="darkblue" />
              <FilterColor color="gray" /> */}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              {/* <FilterSize>
                <FilterSizeOption>{product?.size}</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize> */}
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((s) => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity("dec")} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity("inc")} />
            </AmountContainer>
            {/* <Space>
              <InputNumber
                size="large"
                min={1}
                max={10}
                defaultValue={1}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </Space> */}
            <Button
              onClick={() =>
                dispatch(
                  addToCart({
                    id,
                    name,
                    img,
                    size,
                    color,
                    price,
                    quantity,
                  })
                )
              }
            >
              TH??M V??O GI???
            </Button>
          </AddContainer>
        </InfoContainer>
        <InfoShop>
          <Commit>
            <CommitTitle>CAM K???T KHI MUA H??NG T???I A-FASHION</CommitTitle>
            <CommitContent>
              <WrapCommitContent>
                <WrapIcon>
                  <Alarm style={{ fontSize: "1,5rem" }} />
                  <Detail>
                    Nh???n h??ng trong v??ng 12 gi??? t???i HCM v?? 48 gi??? t???i c??c t???nh
                    th??nh kh??c
                  </Detail>
                </WrapIcon>
                <WrapIcon>
                  <LocalShipping style={{ fontSize: "1,5rem" }} />
                  <Detail>Giao h??ng mi???n ph?? tr??n to??n Qu???c</Detail>
                </WrapIcon>
                <WrapIcon>
                  <Replay5 style={{ fontSize: "1,5rem" }} />
                  <Detail>
                    ???????c ?????i tr??? trong v??ng 7 ng??y (Xem ch??nh s??ch ?????i tr???)
                  </Detail>
                </WrapIcon>
                <WrapIcon>
                  <MonetizationOn style={{ fontSize: "1,5rem" }} />
                  <Detail>Gi???m gi?? 20% cho ????n h??ng ?????u ti??n</Detail>
                </WrapIcon>
              </WrapCommitContent>
            </CommitContent>
            <ImageMin
              src={`http://localhost:8000${product.data?.feature_image_path}`}
            />
          </Commit>
        </InfoShop>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
