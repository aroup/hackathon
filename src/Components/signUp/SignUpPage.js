import React,{Component} from 'react';
import SignUpForm from './SignUpForm';
import {userSignUpRequest} from '../../actions/signupActions';
import {addFlashMessage} from '../../actions/flashMessages';
import {connect} from 'react-redux';

class SignUpPage extends Component{
  render(){
    const {userSignUpRequest,addFlashMessage}= this.props;
    return(
        <SignUpForm userSignUpRequest={userSignUpRequest} addFlashMessage={addFlashMessage}/>
    )
  }
}

SignUpPage.propTypes ={
  userSignUpRequest : React.PropTypes.func.isRequired,
  addFlashMessage : React.PropTypes.func.isRequired
}


function mapDispatchToProps(dispatch){
  return(
    {
      userSignUpRequest : (userData) => dispatch(userSignUpRequest(userData)),
      addFlashMessage : (message)=> dispatch(addFlashMessage(message))
    }
  );
}

export default connect(null,mapDispatchToProps) (SignUpPage);
