import styled from "styled-components";

const Title = styled.h1`
  margin-top: 100px;
  text-align: center;
  color: #2f3a18;
`;
const Description = styled.h4`
  text-align: center;
  color: rgb(197, 166, 91);
`;

const ShopImg = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
`;

const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

const PlantWrapper = styled.div`
  margin: 20px;`;

export { Title, Description, ShopImg, ListWrapper, PlantWrapper};

const styles = {
  text: {
    textAlign: "center",
  },

  plantImg: {
    width: "200px",
    height: "200px",
  },
};

export default styles;
