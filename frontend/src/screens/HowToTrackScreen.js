import React from "react";
import {Container, Row } from "react-bootstrap";


const HowToTrackScreen = () => {


  return (
    <Container className="form__container ">
      <Row>
      <h1 className="info__header">
      كيف تتبع شحنتك
      </h1>
       <p className="info__p">
     بعد أن تقوم بتحويل قيمة الشحن سيتم شحن طلبك حسب شركة الشحن المختارة, سنقوم بتحديث طلبك ويمكنك تتبع طلبك من صفحة طلباتك 
    او يمكنك تتبع طلبك من خلال مراسلتنا على الواتساب او الفيسبوك ويسقوم فريقنا بتزويدكم بتحديثات طلبكم.

       </p>
      </Row>
    </Container>
  );
};

export default HowToTrackScreen;
