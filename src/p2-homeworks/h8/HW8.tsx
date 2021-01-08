import React, {useState} from "react";
import {AGE_LIMIT, checkAC, DOWN, homeWorkReducer, sortAC, UP} from "./bll/homeWorkReducer";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

export type InitialPeopleType = {
  _id: number
  name: string
  age: number
}

const initialPeople: Array<InitialPeopleType> = [
  {_id: 0, name: "Кот", age: 3},
  {_id: 1, name: "Александр", age: 66},
  {_id: 2, name: "Коля", age: 16},
  {_id: 3, name: "Виктор", age: 44},
  {_id: 4, name: "Дмитрий", age: 40},
  {_id: 5, name: "Ирина", age: 55},
]

function HW8() {
  const [people, setPeople] = useState(initialPeople);

  const finalPeople = people.map(p => (
    <div key={p._id}>
      <span>Name: {p.name} Age: {p.age}</span>
    </div>
  ))

  const sortUp = () => setPeople(homeWorkReducer(initialPeople, sortAC(UP)))
  const sortDown = () => setPeople(homeWorkReducer(initialPeople, sortAC(DOWN)))
  const check = () => setPeople(homeWorkReducer(initialPeople, checkAC(AGE_LIMIT)))

  return (
    <div>
      <hr/>
      homeworks 8

      {/*should work (должно работать)*/}

      {finalPeople}
      <div><SuperButton onClick={sortUp}>sort up</SuperButton></div>
      <div><SuperButton onClick={sortDown}>sort down</SuperButton></div>
      <div><SuperButton onClick={check}>check 18</SuperButton></div>
      <hr/>
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativePeople/>*/}
      <hr/>
    </div>
  );
}

export default HW8;
