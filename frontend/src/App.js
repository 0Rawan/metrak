import './App.css';
import { Container } from 'react-bootstrap'
import HomeScreen from './screens//HomeScreen'
import Header from './components/Header'
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import FaqScreen from './screens/FaqScreen';
import HowToTrackScreen from './screens/HowToTrackScreen';
import HowToOrderScreen from './screens/HowToOrderScreen';
import MoreScreen from './screens/MoreScreen';
import OrderScreen from './screens/OrderScreen';
import UserListScreen from './screens/UserListScreen'
import OrderListScreen from './screens/OrderListScreen'
import NewOrderScreen from './screens/NewOrderScreen'
import Chat from "./components/Chat";
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';



import { BrowserRouter as Router, Route } from "react-router-dom";



function App() {
  return (
    <Router>
     <Header />
    
      <Route path="/" component={HomeScreen} exact />
      <Route path="/login" component={LoginScreen} />
      <Route path='/register' component={RegisterScreen} />
      <Route path='/profile' component={ProfileScreen} />
      <Route path='/shipping/:id' component={ShippingScreen} />
      <Route path='/faq' component={FaqScreen} />
      <Route path='/how-to-track' component={HowToTrackScreen} />
      <Route path='/how-to-order' component={HowToOrderScreen} />
      <Route path='/more' component={MoreScreen} />
      <Route path='/new-order' component={NewOrderScreen} />
      <Route path='/order/:id' component={OrderScreen} />
      <Route path='/admin/userlist' component={UserListScreen} />
      <Route path='/admin/orderlist' component={OrderListScreen} />
      
     
       <Chat /> 
    </Router>
    
     
  );
}

export default App;
