import React, {useState} from "react";
import { Button, Row, Col } from "react-bootstrap";
import {useSelector } from 'react-redux'
import { LinkContainer } from "react-router-bootstrap";
import Todo from './Todo'
import RegisterScreen from '../screens/RegisterScreen'
import LoginScreen from '../screens/LoginScreen'




const MainContent = () => {
 const [isVisible, setIsVisible] = useState(false);
  const [isRegister, setIsRegister] = useState(true);
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  
  const handleClick = () => {
    window.open("http://twitter.com/saigowthamr");
  };
    return (
        <Row className="hero__section d-flex align-items-center justify-content-md-center">
        <Col sm={12} md={8}>
            <h3><span className="logo">مِطراق</span> وسيط المواقع التركية لشراء وتغليف وتجميع المشتريات بطرد واحد والشحن من تركيا الى العراق بعمولة ٨٪ فقط </h3>
            { userInfo ?(
            <Todo  contentInfo={{ isVisible: isVisible}} />
            ) : (
            <div style={{display: (isVisible )? "block" : "none"}}>
              {isRegister ?(
               <RegisterScreen  isHome={true}/>
               ):(
               <LoginScreen isHome={true}/>
               )}
                 <Row className="py-3" >
        <Col>
         <div className="hero_sign_btn" onClick={() => setIsRegister(!isRegister)}>  
         {isRegister? (
             <>
              لديك حساب؟ 
          <span className="hero_sign_span">ادخل هنا </span>
               </>
         ):(
             <>
             ليس لديك حساب؟ 
         <span className="hero_sign_span">سجل هنا</span>
               </>
         )}
         </div>
        </Col>
      </Row>
	    </div>
            )}
	 
        <Row className="hero__order_btn_wrapper">
          
          <Col sm={12}  >      
          <Button variant="primary" size="lg" className="hero__btn" onClick={() => setIsVisible(!isVisible)}>  
            <div className="button-web hero__order_btn" > اطلب من الموقع</div>
         </Button>
         </Col> 

          {/*<Col sm={6} >      
          <Button variant="primary" size="lg" className="hero__btn wapp">  
            <div className="button-web hero__order_btn">اطلب من الواتساب</div>
         </Button>
         </Col> */}
         </Row>
        </Col>
        
        <Col sm={12} md={4}>
          <Row className="hero__content ">
          
          <Col xs={6} sm={4} md={6} className="justify-content-center d-flex">       
         <Button  className="button hero__web_btn" size="lg" onClick={() =>window.open("https://www.trendyol.com", '_blank', 'noopener,noreferrer')}>  
            <div className="button-web">
            <div className="trendyol"></div>
            </div>
         </Button>
         </Col> 

          <Col xs={6} sm={4} md={6} className="justify-content-center d-flex">      
          <Button className="button hero__web_btn" size="lg"  onClick={() =>window.open("https://www.hepsiburada.com", '_blank', 'noopener,noreferrer')}>  
            <div className="button-web ">
             <div className="hepsi"></div>
             </div>
         </Button>
         </Col>  

         <Col xs={6} sm={4} md={6} className="justify-content-center d-flex">      
          <Button className="button hero__web_btn" size="lg"  onClick={() =>window.open("https://www.n11.com", '_blank', 'noopener,noreferrer')}>  
            <div className="button-web">
           <div className="n11"></div> 
            </div>
         </Button>
         </Col>  
              
          <Col xs={6} sm={4} md={6} className="justify-content-center d-flex">      
          <Button className="button hero__web_btn" size="lg">  
            <div className="button-web">
            <div className="bim"></div>
            </div>
         </Button>
         </Col> 

          <Col xs={6} sm={4} md={6} className="justify-content-center d-flex">      
          <Button className="button hero__web_btn"size="lg">  
            <div className="button-web">
            <div className="a101"></div>
            </div>
         </Button>
         </Col>  
         
         <LinkContainer to="/more">
         <Col xs={6} sm={4} md={6} className="justify-content-center d-flex">      
          <Button className="button  hero__web_btn" size="lg">  
            <div className="button-web more"> مواقع اكثر</div>
         </Button>
         </Col>  
         </LinkContainer>
             
          </Row>
        </Col>
     
       
        
      </Row>
    )
}

export default MainContent
