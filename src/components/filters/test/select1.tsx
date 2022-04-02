import * as React from 'react';
import styled from 'styled-components';
import { setFilterByRegion } from '../../../features/listSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks';
const RegionFilterStyled = styled.div`
.dropdown {
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  text-align: center;
  font-size: 12px;
  padding: 20px;
  position: relative;
  background: #fff;
}
.btn-toggle .fas {
  display: none;
}
body.dark .btn-toggle .fas {
  display: inline-block;
}
.dropdown .fa-chevron-down {
  margin-left: 10px;
}
.dropdown ul {
border-radius: 4px;
  background-color: red;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.12);
  display: none;
  padding: 10px;
  text-align: center;
  position: absolute;
  top: 100%;
  left: 0;
  list-style-type: none;
  background: #fff;
  width: 100%;
  z-index: 99;
}
.dropdown.open ul {
  display: block;
}
.dropdown ul li {
  margin: 10px 0;
}
`

export default function SelectVariants() {
const [dropdown, setdropdown] = React.useState(false)
const dispatch = useAppDispatch();

const filterByRegionAction = (regionSelected: any) => {
    return {
        type: setFilterByRegion,
        payload: { regionSelected },
    };
}    

// const filterByRegion = useAppSelector((state) => state.filterByRegion);

const onRegionChange = (selectEvent: string) => {
    dispatch(
        filterByRegionAction(selectEvent)
    );
}

  return (
    <>
    <RegionFilterStyled>

    <div className={`${dropdown?'dropdown open':'dropdown'}`} onClick={()=> setdropdown(!dropdown)} id="filter">
          Filter by Region
          <i className="fas fa-chevron-down"></i>
          <ul>
            <li onClick={()=>onRegionChange('Africa')}>Africa</li>
            <li onClick={()=>onRegionChange('Americas')}>Americas</li>
            <li onClick={()=>onRegionChange('Asia')}>Asia</li>
            <li onClick={()=>onRegionChange('Europe')}>Europe</li>
            <li onClick={()=>onRegionChange('Oceania')}>Oceania</li>
          </ul>
        </div>
    </RegionFilterStyled>
    </>
  );
}
