import React, { useState } from 'react'
import styled from 'styled-components'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const RegionFilterStyled = styled.div`
.dropdown {
  border-radius: 5px;
  background-color: '#ffff';
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  text-align: center;
  font-size: 12px;
  padding: 20px;
  position: relative;
  background: '#ffff';
}
.btn-toggle .fas {
  display: none;
}

.dropdown .fa-chevron-down {
  margin-left: 10px;
  color: blue;
  
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
  background: '#ffff';
  width: 100%;
  z-index: 99;
}
.dropdown.open ul {
  display: block;
  
}

`

export default function SelectRegion() {
  const [dropdown, setdropdown] = useState(false)
  return (
    <>
    <RegionFilterStyled>

    <div  className={`${dropdown?'dropdown open':'dropdown'}`} onClick={()=> setdropdown(!dropdown)} id="filter">
          Filter by Region
          <KeyboardArrowDownIcon className='fas fa-chevron-down'/>
          <ul>
            <li >Africa</li>
            <li >Americas</li>
            <li>Asia</li> 
            <li>Europe</li>
            <li>Oceania</li>
          </ul>
        </div>
    </RegionFilterStyled>
    </>
  )
}
