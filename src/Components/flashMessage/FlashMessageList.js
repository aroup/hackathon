import React,{Component} from 'react';
import {connect} from 'react-redux';
import FlashMessage from './FlashMessage';
import {deleteFlashMessage} from '../../actions/flashMessages';

class FlashMessageList extends Component{
  render(){
    const messages = this.props.flashMessages.map(message=>
      <FlashMessage key={message.id} message={message} deleteFlashMessage={this.props.deleteFlashMessage}/>
    );
    return (
      <div>
        {messages}
      </div>
    )
  }
}

FlashMessageList.propTypes={
  flashMessages:React.PropTypes.array.isRequired
}

function mapStateToProps(state){
  return{
    flashMessages : state.flashMessages
  }
}
function mapDispatchToProps(dispatch){
  return(
    {
      deleteFlashMessage : (id)=>dispatch(deleteFlashMessage(id))
    }
  )
}

export default connect(mapStateToProps,mapDispatchToProps)(FlashMessageList);
