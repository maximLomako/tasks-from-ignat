import React, {useState} from "react";
import GreetingContainer from "./GreetingContainer";

// types
export type UserType = {
    _id: number
    name: string
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([
      {_id: 0, name: 'Petya'},
      {_id: 1, name: 'Vasya'},
      {_id: 2, name: 'Kolya'},
      {_id: 3, name: 'Sveta'}
    ]);

    const addUserCallback = (name: string) => {
      const newUser = {_id: 4, name: name};
      const newUsers = [newUser, ...users];
        setUsers(newUsers);
    }

    return (
        <div>
            <hr/>
            homeworks 3

            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    );
}

export default HW3;
