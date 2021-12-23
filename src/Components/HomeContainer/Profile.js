
import { Card,Icon} from 'semantic-ui-react';
import { connect } from 'react-redux';


import React, { Component } from 'react'

 class Profile extends Component {
    render(props) {
        return (
                       <Card>
                           <Card.Content style={{textAlign:"center",padding:"25px 0px"}}>
                            <Icon color='grey' circular name='users' size='big' />
                           <Card.Header style={{textAlign:"center",fontSize:"25px", marginTop:"10px"}}>{this.props.nam}  </Card.Header>
                           <Card.Meta >
                           </Card.Meta>
                           <Card.Description>                   
                             </Card.Description>
                             </Card.Content>
                     </Card>
        )
    }
}



const mapStateToProps =(state)=>({
    grpname : state.group.grpname
  }
  
  )

export default connect(mapStateToProps, {})(Profile)