import React from "react";
import { Accordion, Container, Row } from "react-bootstrap";


const RegisterScreen = () => {
 return (
 <Container className="form__container">
 <Row>
<Accordion>
  <Accordion.Item eventKey="0">
    <Accordion.Header>كم عمولة الموقعع ؟</Accordion.Header>
    <Accordion.Body>
      عمولة الموقع ثابته وهي 8% من سعر المنتج, وتشمل الشراء , والتأكد من صلاحية المنتج بشكل عام, والتغليف.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>ماهو دوركم ؟</Accordion.Header>
    <Accordion.Body>
     نقوم بطلب المنتجات بدلا عن العميل وتجميع الطلبات في مقرنا في تركيا, ومن ثم اعادة التاكد من صلاحيه المنتج بشكل عام ومن ثم تغليف المنتجات في طرد واحد ليتم تخفيض قيمة الشحن على العميل وإرسال الطرد لعنوانه.
    </Accordion.Body>
  </Accordion.Item>

  
   <Accordion.Item eventKey="2">
    <Accordion.Header>هل من الممكن شراء منتج واحد؟</Accordion.Header>
    <Accordion.Body>
    نعم ممكن, لكن شراء اكثر من منتج وشحنها يمكنك من توفير مصاريف الشحن من تركيا الى العراق.
    </Accordion.Body>
  </Accordion.Item>
  
   <Accordion.Item eventKey="3">
    <Accordion.Header>ماذا عن منتجات التقليد, هل تضمنون وصولها ؟</Accordion.Header>
    <Accordion.Body>
      الجمارك لاتهم كثيرا بالطلبات غير الأصليه بكميات شخصية ( غير تجارية ). نقوم بشحن منتجات غير أصلية كطلبات للعملاء بشكل شبه يومي.
    </Accordion.Body>
  </Accordion.Item>
  
     <Accordion.Item eventKey="4">
    <Accordion.Header>هل هناك ترجيع ؟</Accordion.Header>
    <Accordion.Body>
   نعم هناك ترجيع من تركيا بعد فحص المنتجات والتواصل مع العميل وارسال الصور والفيديو والتأكد من سلامة وصحة المنتج, يمكن للعميل ان يرجع المنتجات مجاناً ان كان هناك خلل.
   <br></br>
   وهناك ترجيع من داخل العراق الى تركيا من ثم البائع ويتحمل العميل مصاريف التوصيل من العراق الى تركيا. 
    </Accordion.Body>
  </Accordion.Item>
  
     <Accordion.Item eventKey="5">
    <Accordion.Header>هل هناك منتجات لاتقومون بشحنها ؟</Accordion.Header>
    <Accordion.Body>
      نعم, أي منتجات مخالفة للشريعة الإسلامية لانقوم بالتعامل فيها سواء اسطوانات أغاني أو مجلات تحوي صور غير محتشمة الى اخره.
    </Accordion.Body>
  </Accordion.Item>
  
   <Accordion.Item eventKey="6">
    <Accordion.Header>كم غالبا تأخذ عملية الشراء وإرسال الطلب ؟</Accordion.Header>
    <Accordion.Body>
     فريق وسيط تركيا يقوم بطلب المنتجات في خلال ٤٨ساعة على الاكثر من وصول الدفعة 
بإستثناء يومي السبت والأحد حيث أن أغلب البائعين لايردون على الاستفسارات
بعد ذلك, يقوم البائع في أغلب الأحوال بإرسال القطع خلال ٣-٨ أيام
وقد تمتد على أكثر من ذلك اعتمادا على البائع
والشحن من تركيا الى العراق يستغرق 14 يوم عمل 
    </Accordion.Body>
  </Accordion.Item>
  
   <Accordion.Item eventKey="7">
    <Accordion.Header>هل من الممكن تصوير المنتجات عند وصولها لكم ؟</Accordion.Header>
    <Accordion.Body>
      نعم, بكل تأكيد يمكننا تصوير المنتجات وارسالها لكم.
    </Accordion.Body>
  </Accordion.Item>
  
     <Accordion.Item eventKey="8">
    <Accordion.Header>هل بأمكاني تتبع طلباتي؟</Accordion.Header>
    <Accordion.Body>
      نعم, يمكنك تتبع طلباتك سواء داخل تركيا, او العراق عن طريق صفحة طلباتي.
    </Accordion.Body>
  </Accordion.Item>
  
    <Accordion.Item eventKey="7">
    <Accordion.Header>هل هناك رسوم تخزين عند اكتمال الطلب؟وكم أطول مدة للتخزين ؟</Accordion.Header>
    <Accordion.Body>
      عند اكتمال كامل الطلب, وتغليفة واخبار العميل بالفاتورة, للعميل تخزين الطلب لمدة 30 يوم فقط بدون رسوم. بعد ذلك يتم احتساب 0.5 دولار لكل طرد عن كل يوم تخزين اضافي
      <br></br>
      
بعد مرور 90 يوم من اكتمال الطرد وعدم دفع مبلغ الشحن من قبل العميل, يحق للوسيط اتلاف الطرود لتوفير مساحة بالمستودع أو إكمال احتساب رسوم التخزين.
    </Accordion.Body>
  </Accordion.Item>
  
  
    <Accordion.Item eventKey="7">
    <Accordion.Header>هل من الممكن شحن طلباتي لداخل تركيا ؟</Accordion.Header>
    <Accordion.Body>
     نعم، الرجاء زيارة الصفحة الخاصة بأسعار الشحن !
    </Accordion.Body>
  </Accordion.Item>
  
  
  
</Accordion>

</Row>
</Container>

)

}


export default RegisterScreen;
