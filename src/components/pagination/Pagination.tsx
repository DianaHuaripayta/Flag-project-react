import * as React from 'react';
import { useAppSelector } from '../../hooks';


export default function Pagination() {
  const [curretPage, setCurretPage] = React.useState(1)
  const [itemPerPage, setItemPerPage] = React.useState(5)
  const countriesTotalData = useAppSelector(state => state.countryList)
  const pages: number[] =[];

  for (let i = 1; i <= Math.ceil(countriesTotalData.length/itemPerPage); i++) {
    pages.push(i)   
  }

  return (
    <>
    {pages.map((number)=>{
      return(
        <li key={number}>
          {number}
        </li>
      )
    })}
    </>
  );
}



