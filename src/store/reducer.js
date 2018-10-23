import  {combineReducers,createStore}  from  'redux';
import  headerReeducer  from '../common/header/store/reducer'
export  default   combineReducers({
   header: headerReeducer
})
