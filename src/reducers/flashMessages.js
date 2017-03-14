import * as types from '../actions/actionTypes';
import initialState from '../reducers/initialState';
import shortid from 'shortid';
import _ from 'lodash';

export default function flashReducer(state=initialState.flashMessages,action){
  switch (action.type) {
    case types.ADD_FLASH_MESSAGE:
      return [...state,{
        type : action.message.type,
        text : action.message.text,
        id: shortid.generate()
      }];
    case types.DELETE_FLASH_MESSAGE:
      const index=_.findIndex(state,{id:action.id});
      if(index>=0){
        return [
          ...state.slice(0,index),
          ...state.slice(index+1)
        ]
      }
      return state;
    default :
      return state;
  }
}

// switch-> case , default
