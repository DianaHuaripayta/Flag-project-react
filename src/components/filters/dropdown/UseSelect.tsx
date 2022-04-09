import React, { useState } from "react";
import styled from "styled-components";
import { setFilterByRegion } from "../../../features/listSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
const DropDownContainer = styled("div")`
  width: 150px;
  box-shadow: 0 0.25rem 0.75rem rgb(0 0 0 / 10%), 0 0.2rem 0.1rem rgb(0 0 0 / 5%);
  cursor: pointer;
  background: #fff;
  height: 47px;
  border-radius: 14px;
`;
const ButtomToggleStyled = styled("div")`
    padding: 14px 30px;
    color: #000;
    display: flex;
    justify-content: space-between;
    margin: auto;
    align-items: center;
`;
const DropDownListContainer = styled("div")`
    position: absolute;
    z-index: 100;
    width: 9.5em;
`;

const DropDownList = styled("ul")`
  width: 150px;
    box-shadow: 0 0.25rem 0.75rem rgb(0 0 0 / 10%), 0 0.2rem 0.1rem rgb(0 0 0 / 5%);
    background: #ffffff;
    border: 2px solid #e5e5e5;
    box-sizing: border-box;
    color: #000;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
  &:hover {
    color: #1f74fe;
  }
`;
const IconStyled = styled(ExpandCircleDownIcon)`
  color: #1f74fe;
  margin: 0px 8px;
  &:hover {
    color: #adbed8;
  }
`;

const filterByRegionAction = (regionSelected: any) => {
  return {
    type: setFilterByRegion,
    payload: { regionSelected },
  };
}
export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);
  const dispatch = useAppDispatch()
  const filterByRegion = useAppSelector((state) => state.filterByRegion);

  const onRegionChange = (selectEvent: any) => {
    dispatch(filterByRegionAction(selectEvent));
    setIsOpen(false);
  }
  return (
    <>
      <DropDownContainer>
        <ButtomToggleStyled onClick={toggling}>
          {filterByRegion || "All"}
          <IconStyled/>
        </ButtomToggleStyled>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              <ListItem value="All" onClick={()=> onRegionChange('All')}>All</ListItem>
              <ListItem value="Africa" onClick={()=> onRegionChange('Africa')}>Africa</ListItem>
              <ListItem value="Americas" onClick={()=> onRegionChange('Americas')}>Americas</ListItem>
              <ListItem value="Asia" onClick={()=> onRegionChange('Asia')}>Asia</ListItem>
              <ListItem value="Europe" onClick={()=> onRegionChange('Europe')}>Europe</ListItem>
              <ListItem value="Oceania" onClick={()=> onRegionChange('Oceania')}>Oceania</ListItem>
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </>
  );
}