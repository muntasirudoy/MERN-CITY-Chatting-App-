import React, { Component } from 'react'
import {Link } from "react-router-dom";
import { Container, Header,Form,Icon,Label,loader, Button, Segment,Message } from 'semantic-ui-react'
import manshape from '../../Images/manshape.svg'
import bgshape1 from '../../Images/bgshape1.svg'
import bgshape2 from '../../Images/bgshape2.svg'
import suc from '../../Images/suc.gif'
import icon from '../../Images/icon.svg'
import '../Signup/signup.css'
import {createUserWithEmailAndPassword, auth,updateProfile,database,ref, set} from '../../firebase'
export default class Signup extends Component {

//  state

 state={
     username : "",
     email :"",
     password :"",
     conpassword : "",
     errormsg:"",
     success:"",
     ploader : false,
     formhide: false,
     sucshow : false
     }

// ///////////////////////////////////////////////////////////////
isempty=({username,email,password,conpassword})=>{
    if(username == "" )
  
    {
        this.setState({errormsg:"Your username invalied or wrong"})
    }
    if(email== "" )
  
    {
        this.setState({errormsg:"Your email invalied/wrong"})
    }
    if (password.length !=6 || conpassword.length <6 ){
        this.setState({errormsg:"Your Password should be at least 6 charecters"})
    }
    if (password != conpassword ){
        this.setState({errormsg:"Your Password doesn't matched"})
    }
    else{
        return true
    }
}
// ///////////////////////////////////////////////////////////////


 handlechange =(e)=>{
  this.setState({[e.target.name]: e.target.value})
}
// /////////////////////////////////////////////////////////////////
sendData =(e)=>{
   e.preventDefault()

if(this.isempty(this.state)){
    
    this.setState({ploader:true})
    const {email,password} = this.state

           createUserWithEmailAndPassword(auth, email, password) // set firebase auth

          .then((userCredential) => {  // all data store userCredential 
                updateProfile(auth.currentUser, {  // desplay name - update profile
                 displayName: this.state.username
                })

          .then(() => {  //send data firbase auth to realtime
                this.writeUserData(userCredential)
               }) 

          .then(() => {
                this.setState({username:""})
                this.setState({email:""})
                this.setState({password:""})
                this.setState({conpassword:""})
                this.setState({errormsg:""})
                this.setState({formhide:true})
                this.setState({sucshow:true})
                this.setState({success:"You have done. Pleasae login now!"})
                this.setState({ploader:false})
             }) 
          
      })

    .catch((error) => {
      // const errorCode= error.code;
    this.setState({success:""})
    this.setState({ploader:false})
    });

}
}


// //////////////////////// Real time data write////////////////////////////////////////////////////////////

 writeUserData =(user)=>{
    const db = database;
    set(ref(db, 'users/' + user.user.uid), {
      username: this.state.username
    });
  }

// ////////////////////////////////////////////  FUNCTION END  ////////////////////////////////////////////


    render() {
        const {username,email,password,conpassword,errormsg,success,ploader,formhide,sucshow } = this.state
        return (
     
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
                     <Header as='h1' icon  textAlign='center' >
                            <span style={{color:"#2bc48a"}}>Create</span> an account
                            <Header.Subheader>
                                 Please! confirme your registration. 
                            </Header.Subheader>
                      </Header>  
                      <img style={{display:"none"}} className={sucshow ? "sucShow" : ""}   src={suc} />

                        <Form className={formhide ? "formhide" : ""}    >
                            <Form.Field widths="equal" >
                            <input required name="username" onChange={this.handlechange} placeholder='User Name'  value={username} />
                            {
                               errormsg.includes("username") ? <Label pointing prompt>{errormsg  }</Label> : ''
                            }     
                            </Form.Field >

                            <Form.Field >
                            <input required name="email" onChange={this.handlechange} placeholder='Email' value={email}/>
                               {
                               errormsg.includes("email") ? <Label pointing prompt>{errormsg}</Label> : '' 
                                }
                            </Form.Field>

                            <Form.Field className={errormsg.includes("should") ? "error" : "" } >                      
                            <input  type="password" name="password" onChange={this.handlechange} placeholder='Password' value={password}/>
                              
                            {
                               errormsg.includes("least") ? <Label pointing prompt>{errormsg}</Label> : ''
                              
                            } 

                            </Form.Field>
                            <Form.Field required className={errormsg.includes("should") ? "error" : "" }>                        
                            <input type="password" name="conpassword" onChange={this.handlechange} placeholder='Confirm Password'value={conpassword} />
                            {
                          errormsg.includes("matched") ? <Label pointing prompt>{errormsg}</Label> : ""
                            } 
                            
                            </Form.Field>


                            <Button  className={ploader ? "load loading disable" : ""} color='teal' onClick={this.sendData} >Submit</Button>
                        </Form>  
                                

                            {
                             success ? <Message color='green'>{success}</Message> : ""
                            } 



                     </Segment>
                     <Message info  style={{display:"block"}}>
                        Already have an account? <Link to='/Login'> <b>Login</b> </Link>
                    </Message>
    
                 </div>
                 

             </div>
            </Container>
            </div>
        )
    }
}
