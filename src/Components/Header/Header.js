import React,{Component} from 'react'
import '../Header/header.css'
import 'semantic-ui-css/semantic.min.css'
import logo from '../../Images/logo.svg'
import { Container,Segment,Button } from 'semantic-ui-react'
import {Link } from "react-router-dom";

    
    export const Header = (props) => {
        return (
            <div >
                
                <Segment raised >
                        <Container>
                            <div style={{display:"flex",width:"100%",justifyContent:"space-between"}}>
                            <div className="logo__head">
                                <img src={logo} />
                            </div>
                
                            
                              <Button.Group >
                                   <Link to='/Signup'> <Button negative> Signup </Button> </Link>
                                    <Button.Or />
                                    <Link to='/Login'> <Button positive> Login </Button> </Link>
                                </Button.Group>
                               
                            
                            </div>
                            </Container>
                        </Segment>
            </div>
        )
    }
    
        
  



// const Header = () => {
//     return (
//         <Segment raised >
//            <Container>
//                <div style={{display:"flex",width:"100%",justifyContent:"space-between"}}>
//                <div className="logo__head">
//                   <img src={logo} />
//                </div>

               
//                <Button.Group>
//                    <Link to='/Signup'> <Button negative> Signup </Button> </Link>
//                     <Button.Or />
//                     <Link to='/Login'> <Button positive> Login </Button> </Link>
//                 </Button.Group>
              
               
//                </div>
//             </Container>
//         </Segment>
//     )
// }

export default Header
