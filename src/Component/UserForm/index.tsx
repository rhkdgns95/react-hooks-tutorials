import React from "react";
import useInput from "../../Hooks/useInput";

const UserForm = () => {
    const firstName = useInput("firstName", "");
    const lastName = useInput("lastName", "");
    const handleSubmit = () => {
        alert(`${firstName.value} ${lastName.value}`);
        firstName.reset();
        lastName.reset();
    };
    return (
        <div>
            <p>
                <input type={"text"} {...firstName}/>
                <button onClick={e => firstName.reset()}>Reset FirstName</button>
            </p>
            <hr />
            <p>
                <input type={"text"} {...lastName}/>
                <button onClick={e => lastName.reset()}>Reset lastName</button>
            </p>
            <hr />
            <button onClick={handleSubmit}>SUBMIT</button>
        </div>
    )
};

export default UserForm;