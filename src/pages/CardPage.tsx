import React from 'react'
import { useAppSelector } from '../hooks'

export default function CardPage() {

  const boxCountries = useAppSelector(state => state.countryList)
console.log(boxCountries)
  let Name;
  // boxCountries.forEach((element: { name: string | undefined; }) => {
  //     if (element.name ===  ) {
  //       Name = element.name
  //     }
  // });
  // const country = useAppSelector(state=> state.countryList.find((item: any) => item === match.param.id))
  return (
    <>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, pariatur.</p>
  
    
    <button>Back</button>
    </>
  )
}
function useParams() {
  throw new Error('Function not implemented.');
}

