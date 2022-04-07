import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import styled from 'styled-components';
import Fab from '@mui/material/Fab';
const WrapperStyled = styled.div`
  position: fixed;
  width: 100px;
  height: 100px;
  bottom: 0;
  right: 0;
  margin: 35px 25px;
  background: red;
`;
export default function FloatingButtom() {

  return (
    <Fab color="primary" aria-label="add">
        <AddIcon />
    </Fab>
  )
}
