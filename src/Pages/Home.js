import React, { Component } from 'react'
import {Link } from "react-router-dom";
import "./home.css"
import { Container } from 'semantic-ui-react'
import HomeHeader from '../Components/Home-header/HomeHeader';
import HomeContainer from '../Components/HomeContainer/HomeContainer';
import {auth} from '../firebase'
import {setuser,clearuser} from '../Actions';
import {connect} from 'react-redux'
import { Loading } from '../Components/Loading';
class Home extends Component {

  componentDidMount(){
    auth.onAuthStateChanged((user)=>{
        if(user){
        this.props.setuser(user)
        }
      else{
        this.props.clearuser()
      }
    })
    
    
}

  
render(){


    return ( 
    <div className="home" >
       <div className="home__header">
         <Container>
             <HomeHeader />
         </Container>
       </div>
       <div className="home__container">
         <HomeContainer nam={this.props.name} email={this.props.email}/>
       </div>
     </div>                 
    )
}
}

const mapStateToProps =(state)=>({
    name : state.user.currentUser
}

)



export default connect(mapStateToProps, {setuser,clearuser})(Home)