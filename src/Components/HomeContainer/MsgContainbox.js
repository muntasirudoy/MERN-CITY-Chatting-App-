import { onValue } from 'firebase/database';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { database, ref, onChildAdded, onChildChanged} from "../../firebase";
 class MsgContainbox extends Component {


  state={
    message:[]
  }

  componentDidUpdate(previous){
    
    // console.log(this.props.groupInfo)
    let msgarr=[]
    
    const db= database;
    const msgref = ref(db, 'messages')

    onValue(msgref,  data=>{
      msgarr=[]
      data.forEach(items => {
              msgarr.push(items.val())
              
            });
            if(previous.groupInfo){
                    if(previous.groupInfo.groupname!== this.props.groupInfo.groupname ){
                      this.setState({message:msgarr})
                    }
                  }
                  else{
                    this.setState({message:msgarr})
                  }

                  console.log()
    })



    
       
  }


    render() {
     
   
      const {groupid,userid} = this.props
      return (

        
            <div className='msgbox'>
             <div className='startbottom'>
             
                  {this.state.message.map(data=>(
                
                      
                      Object.entries(data).map(data=>(
                        
                         data[1].gpid== groupid ? 
                        <div className={userid == data[1].sender ? 'msgright' : 'msgleft'} >
                         <p>{data[1].message} </p> 
                      </div>
                      :
                      ""



                      ))
                  
                  
                  ))}

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


  // <div className={userid == data.sender ? 'msgright' : 'msgleft'} >
                      //    <p>{data.message} </p> 
                      // </div>