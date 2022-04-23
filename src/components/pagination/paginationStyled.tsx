import styled from "styled-components";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
export const PaginationStyled = styled.section`
  display: flex;
  flex-direction: column;   
  justify-content: center;
`
export const PageNumbersStyled = styled.div`
    list-style: none;
    display: flex;
    justify-content: center;
`;
export const ReadMoreStyled = styled.button`
    padding: 1rem;
    border-radius: 16px;
    font-size: 1.2rem;
    cursor: pointer;
    margin: 20px auto;
    color: #696b6e;
    border: #fff;
    &:hover{
      background: #1f74fe;
      color: #fff;
  }
`
export const BoxIconStyled = styled.button`
  padding: 1rem;
  background: #f0f0f0;
  border-radius: 50%;
  cursor: pointer;
  border: #fff;
  &:hover{
      background: #1f74fe;
  }
`
export const IconNextStyled = styled(NavigateNextIcon)`
  color: #696b6e;
  &:hover{
      color: #fff;
  }
`
export const IconLeftStyled = styled(ChevronLeftIcon)`
  color: #696b6e;
  &:hover{
      color: #fff;
  }
`
export const BoxNumberStyled = styled.div`
  display: flex;  
  background: #f0f0f0;
  border-radius: 35px;
  padding: 0px 26px;
  margin: 0px 25px;
  .points{
    font-size: 24px;
    padding: 15px 7px;
    cursor: pointer;
  }
`
export const LiStyled = styled.li`
  padding: 20px;
  cursor: pointer;
  color: #696b6e;
    &.active {
    background-color: #1f74fe;
    color: #ffff;
    border-radius: 18px;
    }
`


