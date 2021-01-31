import React from  'react';
const UserForm = (props) => {
    const {inputs,setInputs}=props;
    const onChange=(e)=>{
        setInputs({
            ...inputs,
            [e.target.name]:e.target.value
        });
    }

return(

    <form>
        <div>
            <label>First Name</label>
            <input type="text" onChange={onChange} name="firstName"/>
        </div>

        <div>
            <label>Last Name</label>
            <input onChange={onChange} type="text" name="lastNmae"/>
        </div>

        <div>
            <label>password</label>
            <input type="password" onChange={onChange} name="password"/>
        </div>

        <div>
            <label>Confirm Password</label>
            <input type="password" onChange={onChange} name="confirmPassword"/>
        </div>
        <div> 
            <input type="submit" value="Show"/>
        </div>
    </form>
    );
};


export default UserForm;