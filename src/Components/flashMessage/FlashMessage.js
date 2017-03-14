import React ,{Component} from 'react';
import { Alert,Icon } from 'antd';
import './styles.css'
class FlashMessage extends Component {
  constructor(props){
    super(props);
    this.handleOnClick=this.handleOnClick.bind(this);
  }
  handleOnClick(e){
    this.props.deleteFlashMessage(this.props.message.id);
  }
  render(){
    const {type,text} = this.props.message;
    return (
      <div >
        {type === "success" ? (<div > <Alert message={text} type="success" /> </div> )   :  (<div><Alert message={text} type="error"/> </div>)}
        <div><Icon  onClick={this.handleOnClick}  type="close" /> </div>
      </div>

    )
  }

}

FlashMessage.propTypes={
  message : React.PropTypes.object.isRequired,
  deleteFlashMessage : React.PropTypes.func.isRequired
}

export default FlashMessage;
