import  * as   constants  from './constants';
const defaultState = {
    focused:false
};
export  default  (state = defaultState,action )=> {
     if(action.type === constants.FOCUS) {
          return {
              focused:true
          }
     }
     if(action.type === constants.BLUR) {
       return {
         focused:false
       }
     }
     return  state;
}
