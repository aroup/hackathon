import Validator from 'validator';
import _ from 'lodash';

export default function validateInput (data){
  let errors={};
  if(Validator.isEmpty(data.email)){
    errors.email = "Email is required";
  }
  if(!Validator.isEmail(data.email)){
    errors.email = "Email is invalid";
  }
  if(Validator.isEmpty(data.password)){
    errors.password = "password is required";
  }
  if(Validator.isEmpty(data.username)){
    errors.username = "username is required";
  }
  return {
    errors,
    isValid :_.isEmpty(errors)
  }
}
