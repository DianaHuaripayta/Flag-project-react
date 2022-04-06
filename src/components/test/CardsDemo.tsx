import React from 'react'
interface IProps {
    data:any,
  }
const CardsDemo =(prop: IProps) => {

  return (
    <ul>
        {prop.data.map((todo:any, index :any) => {
            return <li key={index}>{todo.name}</li>;
        })}
    </ul>
    
  )
}
export default CardsDemo
