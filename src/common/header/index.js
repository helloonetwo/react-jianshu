import  React ,{Component}  from 'react'
import  {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem
}  from  './style'
class   Header   extends   Component {
    render () {
       return  (
           <HeaderWrapper >
               <Logo   href='/'/>
               <Nav>
                  <NavItem  className="left">首页</NavItem>
                  <NavItem  className="left">下载</NavItem>
                  <NavItem  className="right">登陆</NavItem>
                  <NavItem  className="right">Aa</NavItem>
               </Nav>
           </HeaderWrapper>
       )
    }
}
export  default  Header;
