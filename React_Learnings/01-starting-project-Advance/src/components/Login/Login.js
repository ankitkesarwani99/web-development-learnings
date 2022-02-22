import React, { useState,useEffect,useReducer} from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const emailReducer=(state,action)=>{
  if(action.type==="USER_EMAIL_INPUT"){
    // console.log("USER_EMAIL_INPUT");
    return {value:action.val,isValid:action.val.includes('@')};
  }
  if(action.type==="INPUT_BLUR"){
    // console.log("INPUT_BLUR", state.value);
    return {value:state.value,isValid:state.value.includes('@')};
  }

  return {value:'',isValid:false};
}

const passwordReducer=(state,action)=>{
  if(action.type==="USER_PASSWORD_INPUT"){
    // console.log("USER_PASSWORD_INPUT");
    return {value:action.val,isValid:action.val.trim().length > 6};
  }
  if(action.type==="INPUT_BLUR"){
    // console.log("INPUT_BLUR", state.value);
    return {value:state.value,isValid:state.value.trim().length > 6};
  }
  return {value:'',isValid:false};
}
const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState,emailDispatch]=useReducer(emailReducer,{value:'',isValid:false});
  const [passwordState,passwordDispatch]=useReducer(passwordReducer,{value:'',isValid:false});

  const {isValid:emailIsValid}=emailState;
  const {isValid:passwordIsValid}=passwordState;
  useEffect(()=>{
    
    //concept of debouncing=> https://www.youtube.com/watch?v=Zo-6_qx8uxg
    const identifier=setTimeout(()=>{
      console.log("Checking form Validation");
    setFormIsValid(
      passwordIsValid && passwordIsValid);
    },500);

    return () => {
      console.log("CleanUp");
      clearTimeout(identifier);
    };

  },[emailIsValid,passwordIsValid]);

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    emailDispatch({type:"USER_EMAIL_INPUT",val:event.target.value});
    // setFormIsValid(
    //   emailState.isValid && passwordState.isValid
    // );
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    passwordDispatch({type:"USER_PASSWORD_INPUT",val:event.target.value});
    // setFormIsValid(
    //   passwordState.isValid && emailState.isValid
    // );
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(emailState.isValid);
    emailDispatch({type:"INPUT_BLUR"});
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    passwordDispatch({type:"INPUT_BLUR"});
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;

/*
What to add & Not to add as Dependencies
In the previous lecture, we explored useEffect() dependencies.

You learned, that you should add "everything" you use in the effect function as a dependency - i.e. all state variables and functions you use in there.

That is correct, but there are a few exceptions you should be aware of:

You DON'T need to add state updating functions (as we did in the last lecture with setFormIsValid): React guarantees that those functions never change, hence you don't need to add them as dependencies (you could though)

You also DON'T need to add "built-in" APIs or functions like fetch(), localStorage etc (functions and features built-into the browser and hence available globally): These browser APIs / global functions are not related to the React component render cycle and they also never change

You also DON'T need to add variables or functions you might've defined OUTSIDE of your components (e.g. if you create a new helper function in a separate file): Such functions or variables also are not created inside of a component function and hence changing them won't affect your components (components won't be re-evaluated if such variables or functions change and vice-versa)

So long story short: You must add all "things" you use in your effect function if those "things" could change because your component (or some parent component) re-rendered. That's why variables or state defined in component functions, props or functions defined in component functions have to be added as dependencies!

Here's a made-up dummy example to further clarify the above-mentioned scenarios:

import { useEffect, useState } from 'react';
 
let myTimer;
 
const MyComponent = (props) => {
  const [timerIsActive, setTimerIsActive] = useState(false);
 
  const { timerDuration } = props; // using destructuring to pull out specific props values
 
  useEffect(() => {
    if (!timerIsActive) {
      setTimerIsActive(true);
      myTimer = setTimeout(() => {
        setTimerIsActive(false);
      }, timerDuration);
    }
  }, [timerIsActive, timerDuration]);
};
In this example:

timerIsActive is added as a dependency because it's component state that may change when the component changes (e.g. because the state was updated)

timerDuration is added as a dependency because it's a prop value of that component - so it may change if a parent component changes that value (causing this MyComponent component to re-render as well)

setTimerIsActive is NOT added as a dependency because it's that exception: State updating functions could be added but don't have to be added since React guarantees that the functions themselves never change

myTimer is NOT added as a dependency because it's not a component-internal variable (i.e. not some state or a prop value) - it's defined outside of the component and changing it (no matter where) wouldn't cause the component to be re-evaluated

setTimeout is NOT added as a dependency because it's a built-in API (built-into the browser) - it's independent from React and your components, it doesn't change

*/