import React, { Component } from 'react'
import { Segment, Icon,} from 'semantic-ui-react';
import { connect } from 'react-redux';

class MsgHeader extends Component {
    render() {
        return (
            <Segment.Group horizontal>
            <div style={{width:'60px',height:'60px', background:"#e1e1e1",margin:"10px"}}></div>
           <Segment padded style={{marginTop:"20px"}}>
               <h3 style={{margin:"0px"}}>{this.props.grpname} </h3>
               <p style={{margin:"0px"}}>Active 2 hours ago</p>
           </Segment>
           <Segment style={{display:"flex", justifyContent:"flex-end ", alignItems:"center"}}>
             <Icon name="phone" size='large' color='teal'style={{marginRight:"20px", cursor:"pointer"}}> </Icon>
             <Icon name="video" size='large' color='teal'style={{ marginRight:"20px", cursor:"pointer"}}> </Icon>
             <Icon name="align right" size='large'color='teal' style={{ cursor:"pointer"}}> </Icon>
           </Segment>
       </Segment.Group>
        )
    }
}

const mapStateToProps =(state)=>({
    groupInfo : state.group.currentGroup,
    grpname : state.group.grpname
  }
  
  )
    
  export default connect(mapStateToProps, {})(MsgHeader)