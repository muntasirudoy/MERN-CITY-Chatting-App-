import React, { Component } from 'react'
import {  Icon,Input,Button,Form} from 'semantic-ui-react';
import {database,ref, set,onValue,push,child} from '../../firebase'
import { connect } from 'react-redux';

class MsgTypebox extends Component {

    state={
       message: '',
       error: false 
    }

handalechange=(e)=>{
    this.setState({[e.target.name]:e.target.value})
    // console.log(({[e.target.name]:e.target.value}))
}

sendMessage=()=>{
    this.setState({ message:''})
    if(this.state.message){
        const db =database
        const msgref = ref(db, 'messages/')
        const newmsgref = push(child(msgref, `${this.props.groupid}`))
        set(newmsgref,{
            message: this.state.message,
            sender: this.props.userid,
            gpid:this.props.groupid
            
        }).then(()=>{
        
        })
    }
    else{
        this.setState({error:true})
    }
}



    render() {
// console.log(this.props.userid)
        return (
            
                   <div className='msg-write'>
                        <Icon name="image" size='large' color='teal'style={{ border:"none!important", cursor:"pointer"}}> </Icon>
                        <Icon name="attach" size='large' color='teal' style={{ border:"none!important", cursor:"pointer"}}> </Icon>
                        <Icon name="microphone" size='large'color='teal' style={{ border:"none!important", cursor:"pointer"}}> </Icon>
                            
                            <Form  onSubmit={this.sendMessage}  >
                                 <Form.Group>
                                        <Form.Input className={this.state.error ? 'red': 'nored' }
                                        placeholder='Name'
                                        value={this.state.message}
                                        name='message'
                                        onChange={this.handalechange}
                                        />
                                        <Icon type='submit' name="paper plane" size='big' color='teal' style={{ border:"none!important", cursor:"pointer", marginTop:"10px"}}>  </Icon>
                                    </Form.Group>
                                </Form>
                        
                    </div>
        )
    }




}


const mapStateToProps =(state)=>({
    groupInfo : state.group.currentGroup,
    userid : state.user.userid,
    groupid : state.group.currentGroupid
  }
  )

export default connect(mapStateToProps, {})(MsgTypebox)