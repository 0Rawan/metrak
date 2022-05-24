import React from "react";
import { Row } from "react-bootstrap";
import StepImage1 from "../images/step-1.svg";
import StepImage2 from "../images/step-2.svg";
import StepImage3 from "../images/step-3.svg";
import Step from "../components/Step";

const  Steps =() => {
  return (
  <div className="one">
    <div className="steps__section align-items-center">
      <Row className="steps__content padding text-center">
        <span>انطلق معنا</span>
        <h1>بثلاث خطوات بسيطة</h1>
      </Row>

      <Row className="steps__row justify-content-md-center padding-bottom">
        <Step
          stepInfo={{
            image: StepImage2,
            title: "تسوق",
            paragraph:
              " تسوق في المواقع التركية, احفظ الروابط المحتوية على المنتجات التي ترغب بشرائها وأرسلها لنا عن طريق الضغط على طلب جديد ",
          }}
        />

        <Step
          stepInfo={{
            image: StepImage1,
            title: "نشتري",
            paragraph:
              "سنقوم بالرد على طلبك بتكلفة الشراء, و بعد تحويل المبلغ, سنقوم بشراء المنتجات و تغليفها و شحنها إلى العراق",
          }}
        />

        <Step
          stepInfo={{
            image: StepImage3,
            title: "استلم",
            paragraph:
              "غالبا سيصل الطلب خلال ١٠ إلى ١٦ يوم, يمكن لشركة الشحن إيصال الشحنة لبيتك أو تقوم باستلامها من مقر شركة الشحن بمدينتك",
          }}
        />
      </Row>
    </div>
       
       </div>
  );
}

export default Steps;
