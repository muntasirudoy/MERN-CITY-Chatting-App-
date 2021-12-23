
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import './homecontainer.css'
import Groups  from './Groups';
import  Profile  from './Profile';
import GroupInfo  from './GroupInfo';
import Msgbox from './MsgTypebox.js';
import MsgContainbox from './MsgContainbox';
import MsgHeader from './MsgHeader';
import React, { Component } from 'react'



export default class HomeContainer extends Component {
    render(props) {
        return (
            
          <Grid container spacing={0} style={{boxShadow:"none", borderRadius:'0'}}>


          {/* LEFT GRID */}
          
                    <Grid item xs={6} md={3}>
                               <Paper  className="papers left" elevation={3}> 
                                  <Profile nam={this.props.nam} />  
                                  <Groups header="Groups"  />
                                  {/* <Groups header="Friends" /> */}
                              </Paper>
                    </Grid>
          
          
          {/* MIDDLE GRID */}
          
                          <Grid item xs={6} md={6}>
                              <Paper className="papers middle" elevation={3}> 
                                      {/* Message Header */}
                                          <MsgHeader />
                                      {/* Message Contain box */}
                                          <MsgContainbox nam={this.props.nam}/>
                                      {/* Message type box  */} 
                                          <Msgbox />   
                              </Paper>
                          </Grid>
          
          {/* RIGHT GRID */}
          
                          <Grid item xs={6} md={3}>
                               <Paper  className="papers right" elevation={3}> 
                                     <GroupInfo />
                              </Paper>
                          </Grid>
                          </Grid>
              
          
        )
    } 
} 

