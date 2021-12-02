import React, {useState} from "react";

export default function DropDownList(props){//Выпадающий список с выбором направления фильтрации
    
    const [ascendingDirectionSort, setDirection]=useState(true)
    return(
      <select value = {ascendingDirectionSort} onChange={(e)=>{
        setDirection(e.target.value)
        props.sendData(e.target.value)// передаем в таблицу значение ascendingDirectionSort
          }}>
        <option value={true}>По возрастанию</option>
        <option value={false}>По убыванию</option>
      </select>
    )
}