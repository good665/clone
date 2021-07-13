import React, { useEffect } from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Route,Switch} from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from './StateProvider';

function App() {
  const [ {} ,dispath] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser =>{
      console.log('User is >>>',authUser);

      if (authUser){
        //유저가 로그인했을때,유저가로그인했었을때
        dispath({
          type: 'SET_USER',
          user: authUser
        })
      } else{
        //유저가 로그아웃했을때
        dispath({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    //BEM
    <Router>
    <div className="App">
      <Header/>

        <Switch>
        <Router path="/login">          
          <Login/>
        </Router>
        <Router path="/checkout">          
          <Checkout/>        
        </Router>

        <Router path="/">
          <Home/>
        </Router>

        </Switch>
    </div>
    </Router>
  );
}

export default App;
