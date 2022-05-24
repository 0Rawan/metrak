import React from 'react'
import { Navbar, Nav, Container, NavDropdown, Button} from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/userActions'


const Header = () => {
 const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }
    return (
        <header>
             <Navbar collapseOnSelect expand="lg" bg="light" fixed="top" variant="light" className="shadow ">
    <Container >
    <LinkContainer to="/">
    <Navbar.Brand className="header__brand" href="#home">مِطراق</Navbar.Brand>
    </LinkContainer>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">	
      <Nav.Link href="#home">الرئيسية</Nav.Link>
    
      
        <NavDropdown title="معلومات عامة" id="collasible-nav-dropdown">
        <LinkContainer to='/faq'>
        <NavDropdown.Item >الاسئلة الشائعة</NavDropdown.Item>
        </LinkContainer>
        <NavDropdown.Item href="#action/3.2">محول العملات</NavDropdown.Item>
        <LinkContainer to='/how-to-order'>
        <NavDropdown.Item href="#action/3.2">كيفية الطلب</NavDropdown.Item>
        </LinkContainer>
        <LinkContainer to='/how-to-track'>
         <NavDropdown.Item>طريقة تتبع الطلبات</NavDropdown.Item>
         </LinkContainer>
         <LinkContainer to='/more'>
         <NavDropdown.Item>مواقع وحسابات للطلب</NavDropdown.Item>
         </LinkContainer>
         {/*
        <NavDropdown.Item href="#action/3.3">خيارات الدفع</NavDropdown.Item>
        */}
  
      </NavDropdown>
      <LinkContainer to='/new-order'>
      <Nav.Link>طلب جديد</Nav.Link>
      </LinkContainer>
  
    </Nav>
    <Nav>  
    {userInfo ?(
      
    <NavDropdown title={userInfo.name} id='username'>
    <LinkContainer to='/profile'>
    <NavDropdown.Item>حسابي</NavDropdown.Item>
    </LinkContainer>
    <NavDropdown.Item onClick={logoutHandler}>
      تسجيل خروج
    </NavDropdown.Item>
     </NavDropdown>
      ) : (
       <>
      <LinkContainer to="/login">	
      <Nav.Link href="#deets">
      <Button className="header__btn signin">
      <div className="header__btn_wrapper signin" >تسجيل الدخول </div>
      </Button></Nav.Link>
      </LinkContainer>
      <LinkContainer to="/register">
      <Nav.Link eventKey={2} href="#memes"><Button className="header__btn signup" >
      <div className="header__btn_wrapper signup" >حساب جديد</div>
      </Button></Nav.Link>
      </LinkContainer>
      </>
      )}
      {userInfo && userInfo.isAdmin && (
       <NavDropdown title='Admin' id='adminmenu'>
       <LinkContainer to='/admin/userlist'>
       <NavDropdown.Item>Users</NavDropdown.Item>
       </LinkContainer>
       <LinkContainer to='/admin/productlist'>
       <NavDropdown.Item>Products</NavDropdown.Item>
       </LinkContainer>
       <LinkContainer to='/admin/orderlist'>
       <NavDropdown.Item>Orders</NavDropdown.Item>
       </LinkContainer>
       </NavDropdown>
        )}
    </Nav>
  </Navbar.Collapse>
    </Container>
  </Navbar>
        </header>
    )
}

export default Header
