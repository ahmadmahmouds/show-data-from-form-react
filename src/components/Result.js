import React from  'react';
const Result =(props)=>{
    const {firstName,lastName,email,password,confirmPassword}=props.data;
    return(

        <div>
            <h1>Result : </h1>
            <p>First Name :{firstName} </p>
            <p>Last Name{lastName}</p>
            <p>Password :  {password}</p>
            <p>Confirm Password: {confirmPassword}</p>



        </div>
    )
}

export default Result;
