
import React,{Component} from 'react'
import {Card,Form, Button, Icon,Feed,Header,Modal, Item} from 'semantic-ui-react';
import {database,ref, set,onValue,push} from '../../firebase'
import { connect } from 'react-redux';
import {setgroups } from '../../Actions';
import './homecontainer.css'


class Groups extends Component {


state={
    open: false,
    groupname:'',
    tagline:'',
    groupdata:[],
    load: true,
    active: ''
}


clickmodal=()=>{
this.setState({
    open:true
})
}
closemodal =()=>{
    this.setState({
        open:false
    })
}


// form validation
 handalechange=(e)=>{
    this.setState({[e.target.name]: e.target.value})
}


// realtime data WRITE............
submitgroup =()=>{
    this.setState({ open:false})
    const db = database;
    const postListRef = ref(db, 'groups' );
    const newPostRef = push(postListRef);
    set(newPostRef, {
     GroupName: this.state.groupname,
     Tagline:this.state.tagline
    });
    
}

// realtime data READ............
componentDidMount(){
    this.loadData()
}

loadData =()=>{
    let groupdata= []
    const starCountRef = ref(database, 'groups/' );
    onValue(starCountRef, (snapshot) => {
        if(snapshot){
            snapshot.forEach(data =>{   
                
         let groupinfo = {
             id: data.key,
             groupname:data.val().GroupName,
             tagline:data.val().Tagline,
         }
         groupdata.push(groupinfo)
            })
            this.setState({groupdata:groupdata}, this.defaultgroup)
        }
    });
}

defaultgroup=()=>{
    let firstgroup = this.state.groupdata[0]
    if(this.state.load && this.state.groupdata.length > 0){
       this.props.setgroups(firstgroup)
    }
    
    this.setState({load: false})
    this.setState({active:firstgroup.id})
    
}



// realtime data READ DATA END............


// SEND REALTIME DATA TO REDUX 

            groupdata=(groups)=>{
                this.setState({active:groups.id})
                this.props.setgroups(groups)
            }

// SEND REALTIME DATA TO REDUX 




    render() {
        return (
            <Card  >
            <Card.Content >
                  <Card.Header  style={{display:'flex',fontSize:"18px" ,border:'none',fontWeight:"800",justifyContent:"space-between",alignItems:'center'}}> 
                         {this.props.header} ({this.state.groupdata.length})
                        <Icon color='grey' onClick={this.clickmodal} name='add circle' size='large' />  
                   </Card.Header>
                     <Modal open={this.state.open} >
                        <Modal.Header>Create a Group</Modal.Header>
                        <Modal.Content >
                            <Modal.Description>                   
                                <Form>
                                    <Form.Field>
                                    <input name='groupname' placeholder='Choose a Group Name '  onChange={this.handalechange} />
                                    </Form.Field>
                                    <Form.Field>
                                    <input name='tagline'  placeholder='Write a Tagline'  onChange={this.handalechange}/>
                                    </Form.Field>
                                </Form>
                            </Modal.Description>
                        </Modal.Content>
                                <Modal.Actions>
                                    <Button color='teal' onClick={this.submitgroup}>
                                     Submit
                                    </Button>

                                    <Button color='grey'  onClick={this.closemodal}>
                                     Close
                                    </Button>
                                </Modal.Actions>
                        </Modal>
            </Card.Content>



            <Card.Content className='allgroupscont'>
                        <Feed>
                            {/* group */}

                            {this.state.groupdata.map((data)=> (

                            <Feed.Event style={data.id== this.state.active ? active : common } >
                                    <Icon circular name='users' size='large' color={data.id == this.state.active ? 'black' :'teal'} />

                                    <Feed.Content  onClick={()=>this.groupdata(data)}>
                                        <Feed.Summary style={{margin:"5px 0px 0px 10px"}} >
                                        <Header  size='small'  >{data.groupname}</Header>
                                        </Feed.Summary >
                                        <Feed.Date style={{margin:"0px 10px",fontSize:'14px'}} content={data.tagline}/>
                                    </Feed.Content>

                            </Feed.Event>
                            ))
                                }

                           {/* group */}
                        </Feed>
                  </Card.Content>
           </Card>
        )
    }
}

const active={
    background: "rgb(370, 370, 370)",
    color:"#ffffff",
    borderRadius:'10px',
    transition:'0.2s',
    margin:'10px 0',
    padding:"10px 15px",
    boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",

}

const common={
    padding:"10px 25px",
    cursor:"pointer",
    margin:'10px 0',
    transition:'0.2s'
}



export default connect(null, {setgroups})(Groups)