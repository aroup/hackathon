import React,{Component} from 'react';
import { Form, Icon, Input, Button } from 'antd';
const FormItem = Form.Item;
import '../../css/SignInForm.css';
import {Link} from 'react-router';

class SignInForm extends Component{
  constructor(props){
    super(props);
    this.state={
      username : '',
      password :''
    }
    this.handleOnChange=this.handleOnChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  handleOnChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.userSignUpRequest(this.state);
  }
  render(){
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
      <Form onSubmit={this.handleSubmit} >
        <FormItem {...formItemLayout} label="username" >
            <Input prefix={<Icon type="user" style={{ fontSize: 13}} />} type='text' placeholder="Username" name="username" onChange={this.handleOnChange} value={this.state.username} />
        </FormItem>
        <FormItem {...formItemLayout} label="password" >
            <Input  prefix={<Icon type="lock" style={{ fontSize: 13 }} />}  placeholder="Password" name="password" type="password" onChange={this.handleOnChange} value={this.state.password} />
        </FormItem>
        <FormItem  {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <Link to='/signup'> register now!  </Link>
        </FormItem>
      </Form>
    );
  }
}

export default SignInForm;
