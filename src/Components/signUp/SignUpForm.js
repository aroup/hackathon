import React,{Component} from 'react';
import { Form, Input, Button } from 'antd';
const FormItem = Form.Item;
import validateInput from './validation';
import { Spin } from 'antd';
import {browserHistory} from 'react-router';

class SignUpForm extends Component {
  constructor(props){
    super(props);
    this.state={
      username : '',
      password :'',
      email: '',
      errors : {},
      isLoading : false
    }
    this.handleOnChange=this.handleOnChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.navigate = this.navigate.bind(this);
  }
  navigate(){
      browserHistory.push('/home');
  }
  isValidated(){
    const {errors,isValid} = validateInput(this.state);
    if(!isValid){
      this.setState({errors});
    }
    return isValid;
  }
  handleOnChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    if(this.isValidated()){
      this.setState({
        errors : {},
        isLoading : true
      });
      this.props.userSignUpRequest(this.state).then(
        ()=>{
          this.props.addFlashMessage({
            type: "success",
            text: "You signed up successfully,congrats"
          });
          this.setState({
            isLoading : false
          });
          this.navigate();
        },
        ({data})=>{
          this.setState({
            errors: data,
            isLoading:false
          })
        }
      );
    }
  }
  render() {
    const {errors} = this.state;
    const {isLoading} =this.state;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 14,
          offset: 0,
        },
        sm: {
          span: 14,
          offset: 6,
        },
      },
    };

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem {...formItemLayout} label="E-mail" validateStatus={(!errors.email)?"success":"error"} help={(!errors.email)?"":errors.email}>
          <Input type="text" name="email" value={this.state.email} onChange={this.handleOnChange}/>
        </FormItem>
        <FormItem {...formItemLayout} label="User Name" validateStatus={(!errors.username)?"success":"error"} help={(!errors.username)?"":errors.username}>
          <Input type="text" name="username" value={this.state.username} onChange={this.handleOnChange}/>
        </FormItem>
        <FormItem {...formItemLayout} label="Password" validateStatus={(!errors.password)?"success":"error"} help={(!errors.password)?"":errors.password}>
          <Input name="password" type="password" value={this.state.password} onChange={this.handleOnChange}/>
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          {isLoading? <Spin size="large"></Spin>: <Button type="primary" htmlType="submit" size="large" onSubmit={this.handleSubmit}>Register</Button> }
        </FormItem>
      </Form>
      );

  }
}

SignUpForm.propTypes={
  userSignUpRequest : React.PropTypes.func.isRequired,
  addFlashMessage : React.PropTypes.func.isRequired
}

export default SignUpForm;
