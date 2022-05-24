import { useEffect, useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../actions/cartActions";
import { createOrder } from '../actions/orderActions'
import { ORDER_CREATE_RESET } from '../constants/orderConstants'
import { USER_DETAILS_RESET } from '../constants/userConstants'
import {useHistory} from 'react-router-dom'

export default function Todo( { contentInfo }) {

 const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
const history = useHistory();

  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });
  const [todo, setTodo] = useState("");
  const [prdComp, setPrdComp] = useState("");
  const [prdQnt, setPrdQnt] = useState("");
  const [prdSize, setPrdSize] = useState("");
  
  const [isEditing, setIsEditing] = useState(false);
  
  const orderCreate = useSelector((state) => state.orderCreate)
  const { order, success, error } = orderCreate
  

  useEffect(() => {
     if (success) {
      history.push(`/order/${order._id}`)
      dispatch({ type: USER_DETAILS_RESET })
      dispatch({ type: ORDER_CREATE_RESET })
    }
    localStorage.setItem("todos", JSON.stringify(todos));
    
    
  }, [todos, history, success]);



  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: todos
      })
    )
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    
   
   
    if (todo !== "") {
     let newTodo = {
          _id_: new Date(),
          name: todo.trim(),
          comp: prdComp.trim(),
          qty: prdQnt,
          desc: prdSize.trim()}
          
      setTodos([
        ...todos,
      newTodo
      ]);
      
        dispatch(addToCart(todos));
            setTodo("");
    setPrdComp("")
    setPrdQnt("") 
    setPrdSize("")
    }
    
  


  }
  

 

  function handleDeleteClick(id) {
 
    const removeItem = todos.filter((todo) => {
      return todo._id_ !== id;
    });
    setTodos(removeItem);
  }

 


  return (
    <div style={{display: contentInfo.isVisible? "block" : "none"}}>

   
        <form onSubmit={handleFormSubmit}>
        
          <h2>طلب جديد</h2>
        
   	<Row className="todo__row">
   	
   	<Col md={6}>
       
          <input
            name="todo"
            type="text"
            placeholder="ارفق رابط المنتج او اسمه"
            value={todo}
            onChange={e=>setTodo(e.target.value)}
            className="margin-ud"
          />
          <input
            name="prdComp"
            type="number"
            placeholder="الكمية"
            value={prdQnt}
            onChange={e =>setPrdQnt(e.target.value)}
          />
          </Col>
          
          <Col md={6}> 
          <input
            name="prd_comp"
            type="text"
            placeholder="من اي موقع او شركة؟"
            value={prdComp}
            onChange={e =>setPrdComp(e.target.value)}
            className="margin-ud"
          />
            <input
            name="prd_comp"
            type="text"
            placeholder="القياس او تفاصيل اخرى"
            value={prdSize}
            onChange={e =>setPrdSize(e.target.value)}
          />
          
          </Col>
          </Row>
          
     
          <button type="submit">اضف المنتج</button>
        </form>
    

      <ul className="todo-list">
        {todos.map((todo) => (
 
          
          <li key={todo.id}>
            
            
            
          
          
          
              <div class="card rounded-3">
            <div class="card-body">
               <Row class="d-flex align-items-center">
                  <Col md={3}>
                     <h6 class="fw-normal mb-2">{todo.name.substr(0, 40)}...</h6>
                     
                  </Col>
                  <Col md={3}> <h6 class="fw-normal mb-2">{todo.comp}</h6></Col>
                  <Col md={3}><p><span class="text-muted">Size: {todo.desc}</span></p></Col>
                  <Col md={2}>
                     <h6 >{todo.qty ? todo.qty : "لم تحدد"}</h6>
                  </Col>
                  <Col md={1}>
                     <a href="#!" onClick={() => handleDeleteClick(todo._id_)}>X</a>
                  </Col>
               </Row>
             </div>
         </div>
           
          </li>
        ))}
      </ul>
      
     
 {todos.length > 0 && 
        <Button  type='button'
                  className='btn-block'
                  disabled={todos.length === 0}
                  onClick={placeOrderHandler}>
          اطلب الان
        </Button>
        }	

    </div>
  );
}

