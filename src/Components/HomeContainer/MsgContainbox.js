import React, { Component } from 'react'
import { connect } from 'react-redux'
import { database, ref, onChildAdded, onChildChanged} from "../../firebase";
 class MsgContainbox extends Component {


  state={
    message:[]
  }

  componentDidUpdate(previous){
    // console.log(previous)
    // console.log(this.props.groupid)
    let msgarr=[]
    const db= database;
    const msgref = ref(db, 'messages/')
    onChildAdded(msgref, data=>{
       msgarr=[]
        data.forEach(items => {
          msgarr.push(items.val())
        });
        if(previous.groupInfo){
          if(previous.groupInfo.groupname !== this.props.groupInfo.groupname){
            this.setState({message:msgarr})
          }
        }
        else{
          this.setState({message:msgarr})
        }
    })

    onChildChanged(msgref, data=>{
       msgarr=[]
      data.forEach(items => {
        msgarr.push(items.val())
      });
      if(previous.groupInfo){
        if(previous.groupInfo.groupname !== this.props.groupInfo.groupname){
          this.setState({message:msgarr})
        }
      }
      else{
        this.setState({message:msgarr})
      }
  })


  }






    render() {
      const {groupid,userid} = this.props
      return (

        
            <div className='msgbox'>
             <div className='startbottom'>
             
                  {
                    this.state.message.map(data=>(
                       
                      <div className={userid == data.sender ? 'msgright' : 'msgleft'} >
                         <p>{data.message} </p> 
                      </div>
                   
                      ))
                  }

             </div>
           </div>
         


        )
    }
}


const mapStateToProps =(state)=>({
  groupInfo : state.group.currentGroup,
  userid : state.user.userid,
  groupid: state.group.currentGroupid,

}
)

export default connect(mapStateToProps, {})(MsgContainbox)