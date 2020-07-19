import styled from "styled-components";

export const ListWrapper = styled.div`
  margin-top: 40px;
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const PlantWrapper = styled.div`
  margin: 20px;

  img {
    width: 100px;
    height: 130px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  p {
    text-align: center;

    &.plant-price {
      color: ${(props) => props.theme.gold};
    }
  }
`;
