import  React ,{Component}  from 'react'
import { connect }  from  'react-redux'
import  * as actionCreators   from './store/actionCreators'
import  {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper
}  from  './style'
class   Header   extends   Component {
    render () {
       return  (
           <HeaderWrapper >
               <Logo   href='/' />
               <Nav>
                  <NavItem  className="left">首页</NavItem>
                  <NavItem  className="left">下载</NavItem>
                  <NavItem  className="right">登陆</NavItem>
                  <NavItem className='right'>
                    <i className="iconfont">&#xe636;</i>
                  </NavItem>
                  <SearchWrapper>
        						{/* <CSSTransition
        							in={this.state.focused}
        							timeout={200}
        							className="slide"
        						> */}
        							<NavSearch
        								className={this.props.focused ? 'focused': ''}
        								onFocus={this.props.handleInputFocus}
        								onBlur={this.props.handleInputBlur}
        							></NavSearch>

        						<i className={this.props.focused ? 'focused iconfont zoom': 'iconfont zoom'}>
        							&#xe614;
        						</i>
        					</SearchWrapper>
               </Nav>
               <Addition>
                 <Button className="writting">
                   	<i className="iconfont">&#xe615;</i>
                   写文章
                 </Button>
                  <Button className="reg">注册</Button>
               </Addition>
           </HeaderWrapper>
       )
    }
}
const   mapStateToProps = (state) => {
  return {
    focused: state.header.focused
  }
}
const  mapDispatchToProps = (dispatch,ownProps) => {
   return {
        handleInputFocus () {
            const  action = {
              type:'focus'
            };
        dispatch(action);
      },
      handleInputBlur () {
        const  action = {
           type : 'blur'
        };
        dispatch (action);
      }
   }
}
export  default  connect( mapStateToProps,mapDispatchToProps )(Header);
