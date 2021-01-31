import logo from './logo.svg';
import './App.css';
import React ,{useState} from 'react';
import UserForm from './components/UserForm';
import Result from './components/Result';


function App() {

  const [state,setState]=useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:""
  });
  return (
    <div className="App">
      <UserForm inputs={state} setInputs={setState}></UserForm>
      <Result data={state}/>      
    </div>
  );
}

export default App;
