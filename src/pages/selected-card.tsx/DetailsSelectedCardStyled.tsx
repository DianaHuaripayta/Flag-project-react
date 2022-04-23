import styled from "styled-components";

export const WrapperStyled = styled.div`
 margin: 8rem auto;
`;
export const BoxStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 100%;
`;
export const BoxImgStyled = styled.div`
margin: auto;
width: 50%;
 /* max-width: 50vw; */
`;
export const ImgFlagStyled = styled.img`
 width: 70%;  
 margin-left: 80px;
`;
export const ButtonBackStyled = styled.button`
    height: 100%;
    width: 12%;
    background: none;
    border: none;
    padding: 18px;
    border-radius: 0.375rem;
    font-size: 16px;
    line-height: 16px;
    position: relative;
    cursor: pointer;
    color: #000;
    box-shadow: 0 0.25rem 0.75rem rgb(0 0 0 / 10%), 0 0.2rem 0.1rem rgb(0 0 0 / 5%);
    margin: 0px 79px;
`
export const BoxDescriptionStyled = styled.div`
font-size: 20px;
    margin: auto;
    width: 50%;
    display: flex;
    flex-direction: column;
    .nameCountry{
      font-size: 30px;
      font-weight: bolder;
    }
    .section_description{
    display: flex;
    flex-direction: row;
    }
`