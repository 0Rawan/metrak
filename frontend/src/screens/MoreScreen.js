import React from "react";
import {Container, Row } from "react-bootstrap";
import services_img_1 from "../images/order.jpg";


const MoreScreen = () => {


  return (
    <Container className="form__container ">
      <Row>
      <h1>
    مواقع تركية للتسوق
      </h1>
     
       <h4 className="padding-1">
       نقوم بالطلب من جميع المواقع التركية
       <br></br>
       <br></br>

أدناه قائمة بأشهر المواقع التركية التي نقوم بالطلب منها علما أن القائمة لاتحوي جميع المواقع
</h4>

	<br></br>
	<ul>
	<li>www.modagram.com</li>
	<li>www.hepsiburada.com</li>
	<li>www.markafoni.com</li>
	<li>https://shop.goldenrose.com.tr/</li>
	<li>https://tr.uspoloassn.com/uyeIslem/siparistakip.aspx?lang=tr-TR</li>
	<li>www.akakce.com</li>
	<li>www.fashionfriends.com</li>
	<li>www.lidyana.com</li>
	<li>www.morhipo.com</li>
	</ul>
      
      </Row>
    </Container>
  );
};

export default MoreScreen;
