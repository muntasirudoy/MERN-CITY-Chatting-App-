import React from 'react'
import { Link } from 'react-router-dom'
import { Container,Search,Icon,Button } from 'semantic-ui-react'
import './homeheader.css'
import logoicon from './icon.svg'
import { auth,signOut } from '../../firebase'
 const HomeHeader = () => {

    const sendData=()=>{

        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }
     
    return (
        <> 
                <Container>
                          <div className="all">
                            <div className="logo-icon">
                                <img src={logoicon} />
                            </div>
                            <div className="search">
                               <Search />
                            </div>
                            <div className="icons">
                            <Icon name='home' size='big' />
                            <Icon name='group' size='big' />
                            <Icon name='comments' size='big' />
                            
                                 </div>
                             <div className="logout">
                        
                             <Button onClick={sendData}> <Icon name='sign-out' size='big'></Icon> Logout  </Button>
                            </div>   


                           </div>
                </Container>
                

        </>
    )
}
export default HomeHeader