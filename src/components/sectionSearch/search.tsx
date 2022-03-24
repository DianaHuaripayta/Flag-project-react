import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components';

const WrapperStyled = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 58px;
`;
const WrapperSearchStyled = styled.div`
    width: 30%;
    transform: translate(-50%, -50%);
    .search{
        width: 100%;
        position: relative;
        display: flex;
    }
    .searchTerm {
        width: 100%;
        border: 3px solid #00B4CC;
        border-right: none;
        padding: 5px;
        height: 20px;
        border-radius: 5px 0 0 5px;
        outline: none;
        color: #9DBFAF;
    }
    .searchTerm:focus{
    color: #00B4CC;
    }
    .searchButton {
        width: 40px;
        height: 36px;
        border: 1px solid #00B4CC;
        background: #00B4CC;
        text-align: center;
        color: #fff;
        border-radius: 0 5px 5px 0;
        cursor: pointer;
        font-size: 20px;
        }

`;
const TotalItemsStyled = styled.p`
    font-size: 20px;
    font-weight: bold;
`;
export default function Search() {
  return (
      <WrapperStyled>
          <div>
              <TotalItemsStyled>258 Countries</TotalItemsStyled>
          </div>
        <WrapperSearchStyled>
            <div className="search">
                <input type="text" className="searchTerm" placeholder="What are you looking for?"/>
                <button type="submit" className="searchButton">
                    <SearchIcon/>
                </button>
            </div>
        </WrapperSearchStyled>
      </WrapperStyled>
  
  )
}
