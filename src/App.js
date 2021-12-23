
import './App.css'
import React from 'react'
import { Routes, Route,Navigate} from "react-router-dom";
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import Header from './Components/Header/Header';
import Home from './Pages/Home';
import { Component } from 'react';
import {auth} from './firebase'


 class App extends Component{

  state={
    status:false
}

componentDidMount(){                                  //check user is logged or not
    auth.onAuthStateChanged((user)=>{
        if(user){
           this.setState({status:true}) 
        }
        else{
            this.setState({status:false})
        }
    })
}

  render(){
    const{status}= this.state
    return(
     <>
  
         {status? 
           <>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/Login" element={<Navigate  to="/" />} />
                  <Route path="/Signup" element={<Navigate to="/" />} />
                </Routes>
                
           </>
                   :
            <>
                  <Header></Header>
                  <Routes>
                      <Route path="/" element={<Login />} />
                      <Route path="/Login" element={<Login />}/>
                      <Route path="/Signup" element={<Signup />} />
                  </Routes>       
            </>

         
        }
   </>

 )
}
}


export default App
