import React, { Component } from 'react'
import {Link } from "react-router-dom";
import { Container, Header,Form, Button, Segment,Message } from 'semantic-ui-react'
import manshape from '../../Images/manshape.svg'
import bgshape1 from '../../Images/bgshape1.svg'
import bgshape2 from '../../Images/bgshape2.svg'
import icon from '../../Images/icon.svg'
import '../Signup/signup.css'

import {signInWithEmailAndPassword, auth} from '../../firebase'

export default class Login extends Component {


    state={
        username : "",
        email :"",
        password :"",
        // conpassword : "",
        // errormsg:"",
        // success:"",
        ploader : false,
        // formhide: false,
        // sucshow : false
        }

    handlechange =(e)=>{
        this.setState({[e.target.name]: e.target.value})
      }


isempty=({email,password})=>{
   
    if(email== "" )
  
    {
        this.setState({errormsg:"Your email invalied/wrong"})
    }

     if (password.length <6 ){
        this.setState({errormsg:"Your Password should be at least 6 charecters"})
    }

    else{
        return true
    }
}


sendData =(e)=>{
    e.preventDefault()
 
 if(this.isempty(this.state)){
 
     this.setState({ploader:true})
 
     const {email,password} = this.state
     signInWithEmailAndPassword(auth, email, password)
     
     .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
         this.setState({email:""})
         this.setState({password:""})
         this.setState({ploader:false})
       })
       .catch((error) => {
          this.setState({ploader:false})
       });
 }
 
 }




    render() {
        const {email,password,ploader} = this.state
        return (
            <div >

<div className="signup">
              <img className="bgshape1" src={bgshape1}  />
              <img className="bgshape2" src={bgshape2}  />
             <Container>

             <div className="items">
             <div className="image">
                     <img className="manshape" src={manshape} />
                 </div>
                 <div className="forms">
              
                     <Segment  color='teal' textAlign="center">
                     <img style={{width:"100px", marginTop:"20px"}} src={icon} />
                     <Header as='h1' icon  textAlign='center'>
                           
                             <span style={{color:"#2bc48a"}}> Login </span> your account
                            <Header.Subheader>
                            Please! confirme your login
                            </Header.Subheader>
                      </Header>  
                        <Form >
                       
                        
                            <Form.Field >
                           <input required name="email" onChange={this.handlechange} placeholder='Email' value={email}/>
                            </Form.Field>

                            <Form.Field >
                            <input  type="password" name="password" onChange={this.handlechange} placeholder='Password' value={password}/>
                            </Form.Field>


                            <Button  className={ploader ? "load loading disable" : ""} color='teal' onClick={this.sendData} >Submit</Button>
                       
                       
                       
                        </Form>       
                     </Segment>
                     <Message info  style={{display:"block"}}>
                        Already have an account? <Link to='/Signup'> <b>Sign up</b> </Link>
                    </Message>
    
                 </div>
                 

             </div>
            </Container>
            </div>
            </div>
        )
    }
}
