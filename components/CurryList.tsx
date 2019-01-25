import { ICurry } from "../models/Curry";
import styled from "styled-components";

const CurryUl = styled.ul`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
`;

const CurryLi = styled.li`
  margin: 12px;
`;

const CurryImg = styled.img`
  display: block;
  width: 300px;
  height: 300px;
  object-fit: cover;
`;

const CurryName = styled.span`
  color: #e65100;
  font-size: 14px;
`;

export const CurryList = (props: { curries: ICurry[] }) => (
  <CurryUl>
    {props.curries.map(curry => (
      <CurryLi>
        <CurryName>{curry.name}</CurryName>
        <CurryImg src={curry.imageUrl} />
      </CurryLi>
    ))}
  </CurryUl>
);
