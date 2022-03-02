import React, { useState,useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './Auth/auth-context';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(()=>{
    const storedUserLoggedInInfo=localStorage.getItem("isLoggedIn");
    if(storedUserLoggedInInfo==="1"){
      // console.log("hello");
      setIsLoggedIn(true);
    }
  },[]);//it will run only one time.
  

  const loginHandler = (email, password) => {
    // We should ofcourse check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn","1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    
      <AuthContext.Provider value={{
isLoggedIn:isLoggedIn}}>
      <MainHeader /*isAuthenticated={isLoggedIn} */onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
      </AuthContext.Provider>
  );
}

export default App;
