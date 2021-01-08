import React from 'react';
import {homeWorkReducer} from "../homeWorkReducer";
import {InitialPeopleType} from "../../HW8";

let initialState: Array<InitialPeopleType>;

beforeEach(() => {
  initialState = [
    {_id: 0, name: "Кот", age: 3},
    {_id: 1, name: "Александр", age: 66},
    {_id: 2, name: "Коля", age: 16},
    {_id: 3, name: "Виктор", age: 44},
    {_id: 4, name: "Дмитрий", age: 40},
    {_id: 5, name: "Ирина", age: 55},
  ]
});

test("sort name up", () => {
  const newState = homeWorkReducer(initialState, {type: "sort", payload: "up"});
  const sortedState = [...initialState];
  sortedState.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  })
  expect(newState).toStrictEqual(sortedState);
});
test("sort name down", () => {
  const newState = homeWorkReducer(initialState, {type: "sort", payload: "down"});
  const sortedState = [...initialState];
  sortedState.sort((a, b) => {
    if (a.name < b.name) {
      return 1;
    }
    if (a.name > b.name) {
      return -1;
    }
    return 0;
  })
  expect(newState).toStrictEqual(sortedState);

});
test("check age 18", () => {
  const newState = homeWorkReducer(initialState, {type: "check", payload: 18});
  const filteredState = initialState.filter(u => u.age >= 18)
  expect(newState).toStrictEqual(filteredState);
});
