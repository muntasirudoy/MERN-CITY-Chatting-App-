import React, { Component } from 'react'
import { Accordion, Icon,Card } from 'semantic-ui-react'
import { connect } from 'react-redux'

class GroupInfo extends Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render(props) {
    const { activeIndex } = this.state

    return (
<>
        <Card>
        <Card.Content style={{textAlign:"center",padding:"25px 0px"}}>
        <Icon color='grey' circular name='users' size='big' />
        <Card.Header style={{textAlign:"center",fontSize:"25px", marginTop:"10px"}}>{this.props.grpname}</Card.Header>
        <Card.Meta >
             Group Headline Here
        </Card.Meta>
        <Card.Description>                   
        </Card.Description>
        </Card.Content>
        </Card>



      <Accordion styled style={{background:"rgb(251, 251, 253)!important"}}>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
         Group Members
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <p>
            Members
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
         Group Shared Photos
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <p>
            Images
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 2}
          index={2}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          Group Shared Files
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <p>
            Three common ways for a prospective owner to acquire a dog is from
            pet shops, private owners, or shelters.
          </p>
          <p>
           Files
          </p>
        </Accordion.Content>
      </Accordion>
      </>
    )

  }
}


const mapStateToProps =(state)=>({
  groupInfo : state.group.currentGroup,
  grpname: state.group.grpname
}

)
  
export default connect(mapStateToProps, {})(GroupInfo)