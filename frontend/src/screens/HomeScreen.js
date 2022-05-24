import React, { useRef }  from 'react'
import Footer from "../components/Footer";
import MainContent from "../components/MainContent";
import Steps from "../components/Steps";
import Services from "../components/Services";
import {Row} from "react-bootstrap";



const HomeScreen = () => {

 const tawkMessengerRef = useRef();
    return (
        <>
        <MainContent/>
          <Steps />
  	    
         <Services id="services" />
        
        <Footer />
        
      </>
    )
}

export default HomeScreen
