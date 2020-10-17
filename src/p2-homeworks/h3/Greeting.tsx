import React, {ChangeEvent} from "react";
import s from "./Greeting.module.css";

type GreetingPropsType = {
    name: string
    setNameCallback: (e:ChangeEvent<HTMLInputElement>)=> void
    addUser: () => void
    error: string
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : ''; // need to fix with (?:)

    return (
        <div className={s.greeting}>
            <input value={name} onChange={setNameCallback} className={`${inputClass} ${s.superInputStyle}`}/>
            <span>{error}</span>
            <button className={s.btn} onClick={addUser}>add</button>
            <span className={s.counter}>{totalUsers}</span>
        </div>
    );
}

export default Greeting;
