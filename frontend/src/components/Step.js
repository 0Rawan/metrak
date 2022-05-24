import React from 'react'
import { Col } from "react-bootstrap";

const  Step = ({stepInfo}) => {
    return (
        <Col sx={12} sm={3} className="step__component margin text-center">
       
          <img src={stepInfo.image} className="step__image padding-1"/>
          <h5>{stepInfo.title}</h5>
          <p>{stepInfo.paragraph}</p>
      </Col>
    )
}

export default Step
